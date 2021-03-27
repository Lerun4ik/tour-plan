var map = L.map('map').setView([7.838839, 98.392374], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([7.838839, 98.392374]).addTo(map)
    .bindPopup('GRAND HILTON HOTEL')
    .openPopup();
 map.scrollWheelZoom.disable();