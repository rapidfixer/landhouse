'use strict';

// Depends
const $ = require('jquery');
const SVG = require('svgjs');
const MapObject = require('./object');
const gallery = require('_modules/gallery');
const infoArrClass = '.js-mapinfo-array';
const infoArrElemClass = '.js-mapinfo-item';

let VectorMap = class VectorMap {

  constructor(elem, objects) {
    this.map = SVG(elem).size('100%', '100%');
    this.objects = [];
    objects.forEach((objParams) => {
      objects.push(new MapObject(objParams, this.map));
    });
    this.$infoElems = $(infoArrClass).find(infoArrElemClass);
    this.map.on('show', (e) => {
      this.showInfo(e);
    });
    this.map.on('click', (e) => {
      this.hideInfo();
    });
  }

  hideInfo() {
    let $oldElem = this.$infoElems.filter('.js-active');
    $oldElem.find('.js-gallery-mapinfo').jcarousel('destroy');
    $oldElem.removeClass('js-active');
    $oldElem.hide(0);
  }

  showInfo(e) {
    this.hideInfo();
    let $newElem = this.$infoElems
      .filter('[data-info-number=' + e.detail.num + ']');
    $newElem.show(0);
    gallery($newElem.find('.js-gallery-mapinfo'));
    $newElem.addClass('js-active');
  }

  setDebug() {
    // debug info
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

  showCoords(e) {
    if (this.debugPointSet) {
      this.$debug.html('dX: ' + (-(this.debugPointData.x - e.offsetX)) + ', dY: ' + (-(this.debugPointData.y - e.offsetY)));
    } else {
      this.$debug.html('X: ' + e.offsetX + ', Y: ' + e.offsetY);
    }
  }
};

module.exports = VectorMap;
