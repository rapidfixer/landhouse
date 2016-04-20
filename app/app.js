// God save the Dev
'use strict';

// Depends
var $ = require('jquery');
const VectorMap = require('_modules/vectormap');

// Stylesheet entrypoint
require('_stylesheets/app.styl');

// Are you ready?
$(function() {
  // window.vectorMapDebug = true;
  var vectorMap = new VectorMap(document.getElementById('vector-map'), [
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
      text: '6',
      borderColor: 'red'
    }
  ]);
});
