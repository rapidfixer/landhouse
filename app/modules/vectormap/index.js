'use strict';

// Depends
const SVG = require('svgjs');
const MapObject = require('./object');

let VectorMap = class VectorMap {

  constructor(selector, objects) {
    this.map = SVG(selector);
    this.objects = [];
    objects.forEach((objParams) => {
      let params = objParams;
      objects.push(new MapObject(params, this.map));
    });
  }
  //   position: {x:x, y:y}, - положение центра относительно границ карты

};

module.exports = VectorMap;
