function initMap() {
	L.mapquest.key = 'xDKNgXrz0x0z6saegAdiNxIbXumWAGS4';
	
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}