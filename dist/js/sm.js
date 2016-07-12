(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _video = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Default options for the plugin.
var defaults = {
  key: '',
  url: '',
  debug: false
};

var init = [];
var onPlayerReady = function onPlayerReady(player, options) {
  options = _video2.default.mergeOptions(defaults, options || {});

  if (init[player.id_] !== undefined) {
    if (options.debug) console.debug('Player ' + bcPlayerId + '(#' + player.id_ + ') > Plugin logo, already initialized, skip.');
    return;
  } else {
    init[player.id_] = true;
  }

  if (options.debug) console.debug('Player ' + bcPlayerId + '(#' + player.id_ + ') > Plugin logo', options);

  if (options.debug) console.debug('SMPlugin constructor');
  //  player.one('loadedmetadata', function() {});
  if (options.debug) console.debug('SMPlugin meta data');

  var sm = new SMSdk(options.key, '');

  player.ready(function () {
    if (options.debug) console.debug('Player ready');

    sm.unblock(options.url, function (url, hasAdBlock) {
      if (options.debug) console.debug('SMPlugin unblock');
    });
  });
};

var sm = function sm(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, _video2.default.mergeOptions(defaults, options));
  });
};

_video2.default.plugin('sm', sm);

exports.default = sm;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
