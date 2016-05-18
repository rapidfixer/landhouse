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
    if (!elem) return;
    this.$elem = $(elem);
    this.map = SVG(elem).size('100%', '100%');
    this.objects = [];
    objects.forEach((objParams) => {
      objects.push(new MapObject(objParams, this.map));
    });
    this.$infoArray = $(infoArrClass);
    this.$infoElems = this.$infoArray.find(infoArrElemClass);
    this.map.on('show', (e) => {
      this.showInfo(e);
    });
    this.map.on('markers-to-front', () => {
      this.moveMarkersFront();
    });
    this.map.on('click', () => {
      this.hideInfo();
    });
    this.moveMarkersFront();
  }

  hideInfo() {
    let $oldElem = this.$infoElems.filter('.js-active');
    $oldElem.find('.js-gallery-mapinfo').jcarousel('destroy');
    $oldElem.removeClass('js-active');
    $oldElem.hide(0);
    this.$infoArray.hide(0);
  }

  showInfo(e) {
    this.hideInfo();
    this.$infoArray.show(0);
    let $newElem = this.$infoElems
      .filter('[data-info-number=' + e.detail.num + ']');
    $newElem.show(0);
    gallery($newElem.find('.js-gallery-mapinfo'));
    $newElem.addClass('js-active');
  }

  moveMarkersFront() {
    this.map.select('.vectormap-marker').each(function() {
      this.front();
    });
  }

  setDebug() {
    // debug info
    this.debugPointSet = false;
    this.$debug = $('<div id="vector-map__helper"></div>').appendTo(this.$elem);
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
