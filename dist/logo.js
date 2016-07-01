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
  logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACh0lEQVRYCdVYy24UMRCsJiCRIOAESIggEK8LX8ONH+CQMwd+gz/gygV+J4E8pChw4IIiJARIpFBH66Vn1j1Ts0xmg6WVPba7XS5313gH+J8KybdcXXld4+pCq/NJ63nKx+3aYnOAJA3Ao9qkifp2auvMAQLYBLBRmzRRXzeDAB5PBKS2zDcz+1wbiAyuMv4+1MB533kBWD3e8wSwmiBtgKuMwZRBl5bTQvJZ68jL0BsAV8pDUh8AeAngN4CTWe3t8qv1xbkHZvY98Z13k7wqvlje517+beRij7l67LvFD0nX0pvluaM+NrOvHeP9QySfiwy+KN5Ibok2r4pNVx1lpjZvMIMDBD/VvghkLIAfg1P1fZ5KS/DVEOrYX9oKgz8AHBUDkUHP6r1gkzb7GFTY2DMz+gokLwG4l672d+DQzHxjvSUFSNIz8XqvB2CewQDuA+hTBncpxZ9PTAGKR+U+YvwpIeE2UvyNBTAyqISErzspgxGgyuAoAFU2ljniUQAqbPxsSYyyKc/eQz9npVSTZPYH6qHgwCXGNc0lZh3AHcFmt9gIc9MsvgvgsuAgxp9vaH5967CVj9d9VBk8Y4kZBaASS77ByKASs24ja+AYDEaA6qYGMZi9llQ2lpGYpyRvOztJOTGzd2WsGtQknZkHZVJSu8RslIwk+QXAjWTukO4jM/OvHKdlIUkG3Ej2Azi/VIwBzkE1rmELAGfMrc020FXF+FNDostfGdsvDa9rANVgj/Gn2sS1s3YvgyobK2NQBRgZVG0y1mJ/7xGri0UGz+yIF2SG5CcAXTrlu/0FYD1k8TGAa5GGJdv+nbDhp5EkJP0bTB84XztKzK2RwLnfRoIsuclpzf4A6UyQKIuzXKcAAAAASUVORK5CYII='
};

var init = [];
var onPlayerReady = function onPlayerReady(player, options) {
  if (init[player.id_] !== undefined) {
    console.debug('Player ' + player.id_ + ' > Plugin logo, already initialized, skip.');
    return;
  } else {
    init[player.id_] = true;
  }

  options = _video2.default.mergeOptions(defaults, options || {});
  console.debug('Player ' + player.id_ + ' > Plugin logo', options);

  // Create variables and new div, anchor and image for company logo
  var title = void 0,
      newElement = document.createElement('div'),
      newImage = document.createElement('img');

  // Assign id and classes to div for logo
  newElement.classList.add('vjs-logo');
  newElement.style.float = 'left';

  // Assign properties to elements and assign to parents
  newImage.setAttribute('src', options.logo);
  newImage.style.display = 'block';
  newElement.appendChild(newImage);

  title = document.querySelector('#' + player.id_ + ' .vjs-dock-text');
  if (title != null) {
    title.insertBefore(newElement, title.firstElementChild);
  }
};

var logo = function logo(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, _video2.default.mergeOptions(defaults, options));
  });
};

_video2.default.plugin('logo', logo);

exports.default = logo;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
