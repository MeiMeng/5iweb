import {
  cursor,
  listen,
  loadImage,
  transEndEvent,
  getOriginalSource
} from '../utils'
import DEFAULT_OPTIONS from '../options'

import handler from './handler'
import overlay from './overlay'
import target from './target'

/**
 * Zooming instance.
 */
export default class Zooming {
  /**
   * @param {Object} [options] Update default options if provided.
   */
  constructor(options) {
    this.target = Object.create(target)
    this.overlay = Object.create(overlay)
    this.handler = Object.create(handler)
    this.body = document.body

    this.shown = false
    this.lock = false
    this.released = true
    this.lastScrollPosition = null
    this.pressTimer = null

    this.options = Object.assign({}, DEFAULT_OPTIONS, options)
    this.overlay.init(this)
    this.handler.init(this)
    this.listen(this.options.defaultZoomable)
  }

  /**
   * Make element(s) zoomable.
   * @param  {string|Element} el A css selector or an Element.
   * @return {this}
   */
  listen(el) {
    if (typeof el === 'string') {
      const els = document.querySelectorAll(el)
      let i = els.length

      while (i--) {
        this.listen(els[i])
      }
    } else if (el.tagName === 'IMG') {
      el.style.cursor = cursor.zoomIn
      listen(el, 'click', this.handler.click)

      if (this.options.preloadImage) {
        loadImage(getOriginalSource(el))
      }
    }

    return this
  }

  /**
   * Update options or return current options if no argument is provided.
   * @param  {Object} options An Object that contains this.options.
   * @return {this|this.options}
   */
  config(options) {
    if (options) {
      Object.assign(this.options, options)
      this.overlay.updateStyle(this.options)
      return this
    } else {
      return this.options
    }
  }

  /**
   * Open (zoom in) the Element.
   * @param  {Element} el The Element to open.
   * @param  {Function} [cb=this.options.onOpen] A callback function that will
   * be called when a target is opened and transition has ended. It will get
   * the target element as the argument.
   * @return {this}
   */
  open(el, cb = this.options.onOpen) {
    if (this.shown || this.lock) return

    const target = typeof el === 'string' ? document.querySelector(el) : el

    if (target.tagName !== 'IMG') return

    if (this.options.onBeforeOpen) {
      this.options.onBeforeOpen(target)
    }

    this.target.init(target, this)

    if (!this.options.preloadImage) {
      loadImage(this.target.srcOriginal)
    }

    this.shown = true
    this.lock = true

    this.target.zoomIn()
    this.overlay.insert()
    this.overlay.fadeIn()

    listen(document, 'scroll', this.handler.scroll)
    listen(document, 'keydown', this.handler.keydown)

    if (this.options.closeOnWindowResize) {
      listen(window, 'resize', this.handler.resizeWindow)
    }

    const onOpenEnd = () => {
      listen(target, transEndEvent, onOpenEnd, false)
      this.lock = false
      this.target.upgradeSource()

      if (this.options.enableGrab) {
        toggleGrabListeners(document, this.handler, true)
      }

      if (cb) cb(target)
    }

    listen(target, transEndEvent, onOpenEnd)

    return this
  }

  /**
   * Close (zoom out) the Element currently opened.
   * @param  {Function} [cb=this.options.onClose] A callback function that will
   * be called when a target is closed and transition has ended. It will get
   * the target element as the argument.
   * @return {this}
   */
  close(cb = this.options.onClose) {
    if (!this.shown || this.lock) return

    const target = this.target.el

    if (this.options.onBeforeClose) {
      this.options.onBeforeClose(target)
    }

    this.lock = true
    this.body.style.cursor = cursor.default
    this.overlay.fadeOut()
    this.target.zoomOut()

    listen(document, 'scroll', this.handler.scroll, false)
    listen(document, 'keydown', this.handler.keydown, false)

    if (this.options.closeOnWindowResize) {
      listen(window, 'resize', this.handler.resizeWindow, false)
    }

    const onCloseEnd = () => {
      listen(target, transEndEvent, onCloseEnd, false)

      this.shown = false
      this.lock = false

      this.target.downgradeSource()

      if (this.options.enableGrab) {
        toggleGrabListeners(document, this.handler, false)
      }

      this.target.restoreCloseStyle()
      this.overlay.remove()

      if (cb) cb(target)
    }

    listen(target, transEndEvent, onCloseEnd)

    return this
  }

  /**
   * Grab the Element currently opened given a position and apply extra zoom-in.
   * @param  {number}   x The X-axis of where the press happened.
   * @param  {number}   y The Y-axis of where the press happened.
   * @param  {number}   scaleExtra Extra zoom-in to apply.
   * @param  {Function} [cb=this.options.scaleExtra] A callback function that
   * will be called when a target is grabbed and transition has ended. It
   * will get the target element as the argument.
   * @return {this}
   */
  grab(x, y, scaleExtra = this.options.scaleExtra, cb) {
    if (!this.shown || this.lock) return

    const target = this.target.el

    if (this.options.onBeforeGrab) {
      this.options.onBeforeGrab(target)
    }

    this.released = false
    this.target.grab(x, y, scaleExtra)

    const onGrabEnd = () => {
      listen(target, transEndEvent, onGrabEnd, false)
      if (cb) cb(target)
    }

    listen(target, transEndEvent, onGrabEnd)

    return this
  }

  /**
   * Move the Element currently grabbed given a position and apply extra zoom-in.
   * @param  {number}   x The X-axis of where the press happened.
   * @param  {number}   y The Y-axis of where the press happened.
   * @param  {number}   scaleExtra Extra zoom-in to apply.
   * @param  {Function} [cb=this.options.scaleExtra] A callback function that
   * will be called when a target is moved and transition has ended. It will
   * get the target element as the argument.
   * @return {this}
   */
  move(x, y, scaleExtra = this.options.scaleExtra, cb) {
    if (!this.shown || this.lock) return

    this.released = false
    this.body.style.cursor = cursor.move
    this.target.move(x, y, scaleExtra)

    const target = this.target.el

    const onMoveEnd = () => {
      listen(target, transEndEvent, onMoveEnd, false)
      if (cb) cb(target)
    }

    listen(target, transEndEvent, onMoveEnd)

    return this
  }

  /**
   * Release the Element currently grabbed.
   * @param  {Function} [cb=this.options.onRelease] A callback function that
   * will be called when a target is released and transition has ended. It
   * will get the target element as the argument.
   * @return {this}
   */
  release(cb = this.options.onRelease) {
    if (!this.shown || this.lock) return

    const target = this.target.el

    if (this.options.onBeforeRelease) {
      this.options.onBeforeRelease(target)
    }

    this.lock = true
    this.body.style.cursor = cursor.default
    this.target.restoreOpenStyle()

    const onReleaseEnd = () => {
      listen(target, transEndEvent, onReleaseEnd, false)
      this.lock = false
      this.released = true

      if (cb) cb(target)
    }

    listen(target, transEndEvent, onReleaseEnd)

    return this
  }
}

function toggleGrabListeners(el, handler, add) {
  const types = [
    'mousedown',
    'mousemove',
    'mouseup',
    'touchstart',
    'touchmove',
    'touchend'
  ]

  types.forEach(function toggleListener(type) {
    listen(el, type, handler[type], add)
  })
}
