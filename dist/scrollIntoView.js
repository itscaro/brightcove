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
var defaults = {};

var init = [];
var onPlayerReady = function onPlayerReady(options) {
  if (init[this._id] !== undefined) {
    console.debug('Plugin logo, already initialized, skip.');
    return;
  } else {
    init[this._id] = true;
  }

  options = _video2.default.mergeOptions(defaults, options || {});
  console.debug('Plugin scrollIntoView', options);

  var player = this;

  var checkIfVideoInView = function checkIfVideoInView() {
    // Player is fully in viewport, is never played and is in pause
    if ($(player.el_).isOnScreen(1, 1).inView && !player.hasStarted_ && player.paused()) {
      player.play();
    }
  };

  var timer = void 0;
  $(window).on('scroll.playOnScroll', function () {
    // Trigger 250ms after when finish scrolling and only once
    clearTimeout(timer);
    timer = setTimeout(function () {
      checkIfVideoInView();
    }, 250);
  });
};

var scrollIntoView = function scrollIntoView(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, _video2.default.mergeOptions(defaults, options));
  });
};

_video2.default.plugin('scrollIntoView', scrollIntoView);

exports.default = scrollIntoView;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
