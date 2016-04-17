'use strict';

// Depends
const SVG = require('svgjs');
const defaults = {
  posX: 0,
  posY: 0,
  polygon: '0,0 20,0 20,20 0,20',
  circleDiameter: 32,
  free: true,
  freeColor: '#B2D023',
  busyColor: '#DF6D52',
  num: 1,
  borderColor: '#F7E902',
  borderWidth: 3,
  borderColorHover: '#FAFAFA'
};

let MapObject = class MapObject {

  // params = {
  // posX/posY, - положение полигона относительно левого верхнего угла карты
  //   polygon: 'x,y x,y x,y', - координаты углов участка
  //   free: true/false, - свободен или занят
  //   text: '' - текст внутри
  //   borderColor: цвет границы
  //   borderWidth: ширина границы
  //   borderColorHover: цвет границы при ховере
  // }

  constructor(params, parent) {
    this.settings = {};
    Object.assign(this.settings, defaults, params);
    this.parent = parent;
    let setts = this.settings;
    this.group = this.parent
      .group()
      .style({
        cursor: 'pointer'
      })
      ;
    // create borders
    this.borderPoly = this.group
      .polygon(setts.polygon)
      .stroke({
        width: setts.borderWidth,
        color: setts.borderColor
      })
      .fill({
        color: 'transparent'
      });
    let center = {
      x: this.group.first().bbox().cx,
      y: this.group.first().bbox().cy
    };
    // add marker
    this.group
      .circle(setts.circleDiameter)
      .center(center.x, center.y)
      .fill({
        color: setts.free ? setts.freeColor : setts.busyColor
      });
    // add number
    this.group
      .text((setts.text ? setts.text : setts.num) + '\n')
      .font({
        family: 'Arial',
        size: 20,
        'font-weight': 'bold',
        'fill': '#fff'
      })
      .center(center.x, center.y);
    // set events
    this.group.click(() => {
      this.parent.fire('show.vectormap', {num: this.settings.num});
    });

    this.group.mouseover(() => {
      this.borderPoly.stroke({
        color: setts.borderColorHover
      });
    });

    this.group.mouseout(() => {
      this.borderPoly.stroke({
        color: setts.borderColor
      });
    });

    // move to point
    this.group.move(setts.posX, setts.posY);
    return this;
  }

};

module.exports = MapObject;
