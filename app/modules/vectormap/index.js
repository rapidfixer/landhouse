'use strict';

// Depends
const $ = require('jquery');
const SVG = require('svgjs');
const MapObject = require('./object');

let VectorMap = class VectorMap {

  constructor(elem, objects) {
    this.map = SVG(elem).size('100%', '100%');
    this.objects = [];
    objects.forEach((objParams) => {
      let params = objParams;
      objects.push(new MapObject(params, this.map));
    });
    // debug info
    this.$debug = $('<div id="vector-map__helper"></div>').appendTo($(elem));
    this.map.mousemove((e) => {
      this.showCoords(e);
    });
  }

  showCoords(e) {
    this.$debug.html('X: ' + e.offsetX + ', Y: ' + e.offsetY);
  }
};

module.exports = VectorMap;
