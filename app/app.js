// God save the Dev
'use strict';

// Depends
var $ = require('jquery');
const VectorMap = require('_modules/vectormap');

// Stylesheet entrypoint
require('_stylesheets/app.styl');

// Are you ready?
$(function() {
  var vectorMap = new VectorMap(document.getElementById('vector-map'), [
    {
      posX: 40,
      posY: 50
    },
    {
      posX: 220,
      posY: 300
    },
    {
      posX: 100,
      posY: 340
    }
  ]);
});
