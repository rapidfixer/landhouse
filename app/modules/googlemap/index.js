'use strict';

const params = {
  center: {lat: 44.540, lng: -78.546},
  contour: [
    {lat: 37.772, lng: -122.214},
    {lat: 21.291, lng: -157.821},
    {lat: -18.142, lng: 178.431},
    {lat: -27.467, lng: 153.027}
  ],
  routeStart: {lat: 44.540, lng: -78.546},
  routeEnd: {lat: 44.540, lng: -78.546}
};

module.exports = function() {
  var mapElem = document.getElementById('#google-map');
  if (!mapElem) return;
  var map = new google.maps.Map(mapElem, {
    center: params.center,
    zoom: 8,
    disableDefaultUI: true
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
  var directionsDisplay = new google.maps.DirectionsRenderer();
  // add marker
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: iconBase + 'schools_maps.png'
  });

  area.setMap(map);
  directionsService.route({
    origin: params.routeStart,
    destination: params.routeEnd,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
  directionsDisplay.setMap(map);
  return map;
};
