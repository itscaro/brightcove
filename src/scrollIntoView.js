/**
 * Scroll Into View
 */
(function (videojs) {
  var init = []
  var scrollIntoViewFunc = function (options) {
    if (init[this._id] !== undefined) {
      console.debug('Plugin logo, already initialized, skip.')
      return;
    } else {
      init[this._id] = true
    }

    defaultOptions = {}
    options = options || {}
    options = videojs.mergeOptions(defaultOptions, options)
    console.debug('Plugin scrollIntoView', options)

    var player = this;

    var checkIfVideoInView = function () {
      // Player is fully in viewport, is never played and is in pause
      if ($(player.el_).isOnScreen(1, 1).inView && !player.hasStarted_ && player.paused()) {
        player.play()
      }
    }

    var timer;
    $(window).on('scroll.playOnScroll', function () {
      // Trigger 250ms after when finish scrolling and only once
      clearTimeout(timer)
      timer = setTimeout(function () {
        checkIfVideoInView()
      }, 250)
    });
  }

  videojs.plugin('scrollIntoView', scrollIntoViewFunc);
})(videojs)
