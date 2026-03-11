var mapa = L.map('mapa-locais').setView([-26.300249859681117, -48.85061839372728], 16);
console.log("ta sim")

const layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    // attribution: '&copy; OpenStreetMap & CARTO',
    maxZoom: 19
});

layer.addTo(mapa)

const iconeVermelho = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const local1 = L.marker([-26.300249859681117,-48.85061839372728],{icon:iconeVermelho})
local1.addTo(mapa)

const local2 = L.marker([-26.296969660655037, -48.846438878099725],{icon:iconeVermelho})
local2.addTo(mapa)

const local3 = L.marker([-26.287314623127745, -48.849691899391274],{icon:iconeVermelho})
local3.addTo(mapa)

const local4 = L.marker([-26.318860311800716, -48.8563316280546],{icon:iconeVermelho})
local4.addTo(mapa)
