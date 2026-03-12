var mapa = L.map('mapa-locais').setView([-26.300249859681117, -48.85061839372728], 16);
console.log("ta sim")

const layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    // attribution: '&copy; OpenStreetMap & CARTO',
    maxZoom: 19
});

layer.addTo(mapa)

const local1 = L.marker([-26.300249859681117,-48.85061839372728])
local1.addTo(mapa)

// mapa.setView([-26.318860311800716, -48.8563316280546], 16)
