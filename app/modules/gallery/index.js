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
    .on('click', function() {
      $carousel.jcarousel('scroll', '-=1');
    });
  $carouselWrap.find('.js-gallery-next')
    .on('click', function() {
      $carousel.jcarousel('scroll', '+=1');
    });
  return $carousel;
};
