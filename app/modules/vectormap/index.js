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
      objects.push(new MapObject(objParams, this.map));
    });

    // debug info
    if (window.vectorMapDebug) {
      this.debugPointSet = false;
      this.$debug = $('<div id="vector-map__helper"></div>').appendTo($(elem));
      this.map.click((e) => {
        this.debugPointSet = !this.debugPointSet;
        this.debugPointData = {
          x: e.offsetX,
          y: e.offsetY
        };
        this.$debug.toggleClass('debug-mode');
      });
      this.map.mousemove((e) => {
        this.showCoords(e);
      });
    }
  }

  showCoords(e) {
    if (this.debugPointSet) {
      this.$debug.html('dX: ' + (-(this.debugPointData.x - e.offsetX)) + ', dY: ' + (-(this.debugPointData.y - e.offsetY)));
    } else {
      this.$debug.html('X: ' + e.offsetX + ', Y: ' + e.offsetY);
    }
  }
};

module.exports = VectorMap;
