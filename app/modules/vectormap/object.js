'use strict';

// Depends
const SVG = require('svgjs');
const defaults = {
  posX: 0,
  posY: 0,
  polygon: '0,0 20,0 20,20 0,20',
  circleRadius: 15,
  free: true,
  freeColor: 'B2D023',
  busyColor: 'DF6D52',
  freeClass: 'map-object_free',
  text: '0',
  borderColor: 'F7E902',
  borderWidth: 3,
  borderColorHover: 'FAFAFA'
};

let MapObject = class MapObject {

  // params = {
  //   polygon: 'x,y x,y x,y', - координаты углов участка
  //   free: true/false, - свободен или занят
  //   text: '' - текст внутри
  //   borderColor: цвет границы
  //   borderWidth: ширина границы
  //   borderColorHover: цвет границы при ховере
  // }

  constructor(params, parent) {
    this.settings = Object.assign(defaults, params);
    this.parent = parent;
    let setts = this.settings;
    this.group = this.parent.group();
    // create borders
    this.group
      .polygon(setts.polygon)
      .stroke({
        width: setts.borderWidth,
        color: setts.borderColor
      });
    let center = {
      x: this.group.first().bbox.cx,
      y: this.group.first().bbox.cy
    };
    // add marker
    this.group
      .circle(setts.circleRadius)
      .fill({
        color: setts.free ? setts.freeColor : setts.busyColor
      })
      .center(center.x, center.y);
    // add text
    // set events
    // this.group.mouseover(() => {
    //   this.setHover();
    // });
    // this.group.mouseout(() => {
    //   this.removeHover();
    // });

    // move to point
    this.group.move(setts.posX, setts.posY);
    return this;
  }

  // setHover() {
  //   this.group.
  // }

  // removeHover() {
  //   this.group.
  // }

};

module.exports = MapObject;
