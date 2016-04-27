'use strict';

const params = {
  center: {lat: 55.534291, lng: 37.091198},
  markerPos: {lat: 55.530397, lng: 37.116362},
  contour: [
    {lat: 55.534140, lng: 37.111065},
    {lat: 55.533600, lng: 37.119435},
    {lat: 55.531782, lng: 37.105785},
    {lat: 55.534140, lng: 37.111065}
  ],
  routeStart: {lat: 55.542680, lng: 37.097494},
  routeEnd: {lat: 55.530397, lng: 37.116362}
};

module.exports = function() {
  var mapElem = document.getElementById('google-map');
  if (!mapElem) return;
  var map = new google.maps.Map(mapElem, {
    center: params.center,
    zoom: 14,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });
  // Contours
  var area = new google.maps.Polyline({
    path: params.contour,
    geodesic: true,
    strokeColor: '#FFFFFF',
    strokeOpacity: 1.0,
    strokeWeight: 3
  });
  // show route
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer({
    preserveViewport: true,
    suppressMarkers: true
  });
  // add marker
  new google.maps.Marker({
    position: params.markerPos,
    map: map,

    icon: 'http://s32.postimg.org/hhb1stupd/map_marker.png'
  });

  area.setMap(map);
  directionsDisplay.setMap(map);
  directionsService.route({
    origin: params.routeStart,
    destination: params.routeEnd,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
  return map;
};
