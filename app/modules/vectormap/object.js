'use strict';

// Depends
window.SVG = require('svgjs');
require('../../vendors/svgjs.filter')(window);
const defaults = {
  posX: 0,
  posY: 0,
  polygon: '0,0 20,0 20,20 0,20',
  circleDiameter: 22,
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
    this.markerText = (setts.text ? setts.text : setts.num) + '';
    if (this.markerText.length > 2) {
      this.addMarker(this.group.rect(1.8 * setts.circleDiameter, setts.circleDiameter * 0.85).radius(setts.circleDiameter / 2));
    } else {
      this.addMarker(this.group.circle(setts.circleDiameter));
    }
    // set events
    this.set = this.parent.set();
    this.set
      .add(this.group)
      .add(this.marker);
    this.set.click((e) => {this.showInfo(e)});

    this.set.mouseover(() => {this.moveFront()});

    this.set.mouseout(() => {
      this.borderPoly.stroke({
        color: setts.borderColor
      })
      this.parent.fire('markers-to-front');
    });

    // move to point
    this.group.move(setts.posX, setts.posY);
    return this;
  }

  // add marker with shadow
  addMarker(elem) {
    var marker = this.parent.group();
    marker.add(elem);
    var markerCenter = {
      x: marker.first().bbox().cx,
      y: marker.first().bbox().cy
    };
    elem.center(markerCenter.x, markerCenter.y)
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
    // add number/text
    marker.text(this.markerText + '\n')
      .font({
        family: 'Arial',
        size: 20,
        'font-weight': 'bold',
        'fill': '#fff'
      })
      .center(markerCenter.x, markerCenter.y);
    marker.center(this.settings.posX + this.center.x, this.settings.posY + this.center.y);
    marker.addClass('vectormap-marker')
      .style({
        cursor: 'pointer'
      });
    this.marker = marker;
  }

  // show info
  showInfo(e) {
    e.stopPropagation();
    this.parent.fire('show', {num: this.settings.num});
  }

  moveFront() {
    this.borderPoly.stroke({
      color: this.settings.borderColorHover
    });
    this.group.front();
    this.marker.front();
  }

};

module.exports = MapObject;
