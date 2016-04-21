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
  let $carouselWrap = $carousel.closest('.js-gallery-wrap');
  $carouselWrap = $carouselWrap.length
    ? $carouselWrap
    : $carousel;
  $carouselWrap.find('.js-gallery-prev')
    .jcarouselControl({
      target: '-=1'
    });
  $carouselWrap.find('.js-gallery-next')
    .jcarouselControl({
      target: '+=1'
    });
  return $carousel;
};
