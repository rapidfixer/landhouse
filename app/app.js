// God save the Dev
'use strict';

// Depends
var $ = require('jquery');
require('malihu-custom-scrollbar-plugin')($);
const VectorMap = require('_modules/vectormap');
const gallery = require('_modules/gallery');
const googleMap = require('_modules/googlemap');

// Stylesheet entrypoint
require('_stylesheets/app.styl');

// Are you ready?
$(function() {
  var $galleryCarousel = gallery('.js-gallery');
  window.vectorMap = new VectorMap(document.getElementById('vector-map'), [
    {
      polygon: '0,0 47,12 38,70 -16,60',
      posX: 263,
      posY: 239,
      num: 13
    },
    {
      polygon: '0,0 51,5 44,64 -7,58',
      posX: 364,
      posY: 257,
      free: false,
      num: 7
    },
    {
      polygon: '0,0 19,-44 52,-31 87,-35 129,-9 126,16 62,14',
      posX: 181,
      posY: 421,
      num: 6,
      text: '12/4',
      borderColor: 'red'
    }
  ]);
  googleMap();

  $.mCustomScrollbar.defaults.axis = 'y';
  $('.js-custom-scroll').mCustomScrollbar({
    alwaysShowScrollbar: 1,
    scrollInertia: 0,
    mouseWheel: {
      enable: true
    },
    theme: 'dark-2'
  });

  // Documents box trigger
  $('.b-documents-box__trigger').on('click', function() {
    $(this).parent().toggleClass('b-documents-box_collapsed');
  });
});
