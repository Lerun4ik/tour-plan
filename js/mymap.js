 ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [7.838839, 98.392374],
      zoom: 12,
      controls: [
        'zoomControl', 
        'routeButtonControl', 
        'trafficControl', 
        'typeSelector', 
        'fullscreenControl', 
        ]
});
     var myPlacemark = new ymaps.Placemark([7.838839, 98.392374], {
         hintContent: 'GRAND HILTON HOTEL',
         balloonContent: 'H'
});
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
  
}
