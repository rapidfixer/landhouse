// God save the Dev
'use strict';

// Depends
var $ = require('jquery');
require('jquery-mousewheel');
require('malihu-custom-scrollbar-plugin')($);
const VectorMap = require('_modules/vectormap');
const gallery = require('_modules/gallery');
const googleMap = require('_modules/googlemap');

// Stylesheet entrypoint
require('_stylesheets/app.styl');

// Are you ready?
$(function() {
  var $galleryCarousel = gallery('.js-gallery');
  window.vectorMap = new VectorMap(document.getElementById('vector-map'), [{
      polygon: '0,0 33,33 5,59 -28,26',
      posX: 507,
      posY: 0,
      num: 1,
      text: '8-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 5,59 -28,26',
      posX: 540,
      posY: 33,
      num: 2,
      text: '8-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -10,74 -43,41',
      posX: 479,
      posY: 26,
      num: 3,
      text: '7-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -10,74 -43,41',
      posX: 512,
      posY: 59,
      num: 4,
      text: '7-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -10,69 -43,36',
      posX: 436,
      posY: 67,
      num: 5,
      text: '6-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -10,69 -43,36',
      posX: 469,
      posY: 100,
      num: 6,
      text: '6-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -7,66 -40,33',
      posX: 393,
      posY: 103,
      num: 7,
      text: '5-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -7,66 -40,33',
      posX: 426,
      posY: 136,
      num: 8,
      text: '5-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -7,70 -40,37',
      posX: 353,
      posY: 136,
      num: 9,
      text: '4-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -7,70 -40,37',
      posX: 386,
      posY: 169,
      num: 10,
      text: '4-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -7,70 -40,37',
      posX: 313,
      posY: 173,
      num: 11,
      text: '3-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -7,70 -40,37',
      posX: 346,
      posY: 206,
      num: 12,
      text: '3-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -17,80 -50,47',
      posX: 273,
      posY: 210,
      num: 13,
      text: '2-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -17,80 -50,47',
      posX: 306,
      posY: 243,
      num: 14,
      text: '2-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 -17,80 -50,47',
      posX: 223,
      posY: 257,
      num: 15,
      text: '1-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 33,33 3,58 -50,47',
      posX: 256,
      posY: 290,
      num: 16,
      text: '1-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 21,70 -25,23',
      posX: 497,
      posY: 158,
      num: 17,
      text: '19-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 21,70 -25,23',
      posX: 543,
      posY: 204,
      num: 18,
      text: '22-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 21,70 -25,23',
      posX: 472,
      posY: 181,
      num: 19,
      text: '19-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 21,70 -25,23',
      posX: 518,
      posY: 227,
      num: 20,
      text: '22-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 21,70 -25,23',
      posX: 447,
      posY: 204,
      num: 21,
      text: '18-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 21,70 -25,23',
      posX: 493,
      posY: 250,
      num: 22,
      text: '21-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 21,70 -25,23',
      posX: 422,
      posY: 227,
      num: 23,
      text: '18-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 21,70 -25,23',
      posX: 468,
      posY: 273,
      num: 24,
      text: '21-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 21,70 -25,23',
      posX: 397,
      posY: 250,
      num: 25,
      text: '17-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 21,70 -75,70',
      posX: 443,
      posY: 296,
      num: 26,
      text: '20-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 21,70 -25,23',
      posX: 372,
      posY: 273,
      num: 27,
      text: '17-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 21,70 -25,23',
      posX: 347,
      posY: 296,
      num: 28,
      text: '16-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 -40,38',
      posX: 322,
      posY: 319,
      num: 29,
      text: '16-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 1,70 -35,33',
      posX: 581,
      posY: 78,
      num: 30,
      text: '9-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 1,70 -35,33',
      posX: 546,
      posY: 111,
      num: 31,
      text: '9-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 1,70 -35,33',
      posX: 617,
      posY: 114,
      num: 32,
      text: '10-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 1,70 -35,33',
      posX: 582,
      posY: 147,
      num: 33,
      text: '10-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 1,70 -35,33',
      posX: 653,
      posY: 150,
      num: 34,
      text: '11-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 1,70 -35,33',
      posX: 618,
      posY: 183,
      num: 35,
      text: '11-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 1,70 -35,33',
      posX: 689,
      posY: 186,
      num: 36,
      text: '12-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 1,70 -35,33',
      posX: 654,
      posY: 219,
      num: 37,
      text: '12-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 1,70 -35,33',
      posX: 725,
      posY: 222,
      num: 38,
      text: '13-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 1,70 -35,33',
      posX: 690,
      posY: 255,
      num: 39,
      text: '13-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 1,70 -35,33',
      posX: 761,
      posY: 258,
      num: 40,
      text: '14-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 1,70 -35,33',
      posX: 726,
      posY: 291,
      num: 41,
      text: '14-1',
      borderColor: 'red'
    }, {
      polygon: '0,0 46,46 11,67 1,70 -35,33',
      posX: 797,
      posY: 294,
      num: 42,
      text: '15-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 36,36 -19,50 -35,33',
      posX: 762,
      posY: 327,
      num: 43,
      text: '15-1',
      borderColor: 'red'
    }, {
      polygon: '7,7 30,30 -10,70 -40,40 -7,7',
      posX: 604,
      posY: 262,
      num: 44,
      text: '23-1',
      borderColor: 'red'

    }, {
      polygon: '0,0 30,30 10,50 -55,55',
      posX: 564,
      posY: 302,
      num: 45,
      text: '23-3',
      borderColor: 'red'
    }, {
      polygon: '0,0 30,30 -10,70 -60,60',
      posX: 634,
      posY: 292,
      num: 46,
      text: '24-2',
      borderColor: 'red'
    }, {
      polygon: '0,0 30,30 10,50 -40,40',
      posX: 664,
      posY: 322,
      num: 47,
      text: '24-1',
      borderColor: 'red'
    }]);
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
