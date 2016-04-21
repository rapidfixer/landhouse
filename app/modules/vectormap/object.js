'use strict';

// Depends
window.SVG = require('svgjs');
require('../../vendors/svgjs.filter')(window);
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
  //   num: номер объекта в массиве объектов (для показа инфо), считается с единицы
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
    this.center = {
      x: this.group.first().bbox().cx,
      y: this.group.first().bbox().cy
    };
    // Add marker
    let markerText = (setts.text ? setts.text : setts.num) + '';
    if (markerText.length > 2) {
      this.styleMarker(this.group.rect(1.8 * setts.circleDiameter, setts.circleDiameter * 0.85).radius(setts.circleDiameter / 2));
    } else {
      this.styleMarker(this.group.circle(setts.circleDiameter));
    }
    // add number/text
    this.group
      .text(markerText + '\n')
      .font({
        family: 'Arial',
        size: 20,
        'font-weight': 'bold',
        'fill': '#fff'
      })
      .center(this.center.x, this.center.y);
    // set events
    this.group.click((e) => {
      e.stopPropagation();
      this.parent.fire('show', {num: this.settings.num});
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

  // add marker with shadow
  styleMarker(elem) {
    elem.center(this.center.x, this.center.y)
      .fill({
        color: this.settings.free ? this.settings.freeColor : this.settings.busyColor
      })
      .filter(function(add) {
        var blur = add
          .offset(0, 7)
          .in(add.sourceAlpha)
          .gaussianBlur(3);
        add.blend(add.source, blur);
        this.size('180%', '180%');
      });
  }

};

module.exports = MapObject;
