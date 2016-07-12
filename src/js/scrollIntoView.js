import videojs from 'video.js';

// Default options for the plugin.
const defaults = {};

let init = [];
const onPlayerReady = function (player, options) {
  options = videojs.mergeOptions(defaults, options || {});

  let bcPlayerId = document.querySelector('#' + player.id_ + ' video').getAttribute('data-player');

  if (init[player.id_] !== undefined) {
    if (options.debug)
      console.debug('Player ' + bcPlayerId + '(#' + player.id_ + ') > Plugin scrollIntoView, already initialized, skip.');
    return;
  } else {
    init[player.id_] = true
  }

  if (options.debug)
    console.debug('Player ' + bcPlayerId + '(#' + player.id_ + ') > Plugin scrollIntoView', options);

  let checkIfVideoInView = function () {
    // Player is fully in viewport, is never played and is in pause
    if ($(player.el_).isOnScreen(1, 1).inView && !player.hasStarted_ && player.paused()) {
      player.play()
    }
  };

  let timer;
  $(window).on('scroll.playOnScroll', function () {
    // Trigger 250ms after when finish scrolling and only once
    clearTimeout(timer);
    timer = setTimeout(function () {
      checkIfVideoInView()
    }, 250)
  });
}

const scrollIntoView = function (options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  })
}

videojs.plugin('scrollIntoView', scrollIntoView);

export default scrollIntoView
