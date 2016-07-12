import videojs from 'video.js';

// Default options for the plugin.
const defaults = {
  key: '',
  url: '',
  debug: false
};

let init = [];
const onPlayerReady = function (player, options) {
  options = videojs.mergeOptions(defaults, options || {});

  if (init[player.id_] !== undefined) {
    if (options.debug)
      console.debug('Player ' + bcPlayerId + '(#' + player.id_ + ') > Plugin logo, already initialized, skip.');
    return;
  } else {
    init[player.id_] = true
  }

  if (options.debug)
    console.debug('Player ' + bcPlayerId + '(#' + player.id_ + ') > Plugin logo', options);

  if (options.debug)
    console.debug('SMPlugin constructor');
  //  player.one('loadedmetadata', function() {});
  if (options.debug)
    console.debug('SMPlugin meta data');

  var sm = new SMSdk(options.key, '');

  player.ready(function(){
    if (options.debug)
      console.debug('Player ready')

    sm.unblock(options.url, (url, hasAdBlock) => {
      if (options.debug)
        console.debug('SMPlugin unblock');
    });
  })
}

const sm = function (options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  })
}

videojs.plugin('sm', sm);

export default sm
