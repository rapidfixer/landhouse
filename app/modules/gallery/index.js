'use strict';

// Depends
const $ = window.jQuery = require('jquery');
require('jcarousel');
const defaults = {
  transitions: true,
  wrap: 'circular'
};

module.exports = function(selector, params = {}) {
  let settings = {};
  Object.assign(settings, defaults, params);
  let $carousel = $(selector);
  $carousel.jcarousel(settings);
  $carousel.find('.js-gallery-prev')
    .jcarouselControl({
      target: '-=1'
    });
  $carousel.find('.js-gallery-next')
    .jcarouselControl({
      target: '+=1'
    });
  return $carousel;
};
