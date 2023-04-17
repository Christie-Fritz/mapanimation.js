
var map;
var markers = [];
mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fmcml0ejIzIiwiYSI6ImNsZ2loeTZ6djB2a2szZXBteTJ6ZW9jYnUifQ.GdArpSfpYFFUsdiyYRSERg';

function init(){
      
      let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.069688, 42.353895],
        zoom: 14,
      });
      var marker = new mapboxgl.Marker()
      .setLngLat([-71.069688, 42.353895])
      .addTo(map);

      var marker = new mapboxgl.Marker()
      .setLngLat([-71.08768363, 42.3470772])
      .addTo(map);

  	addMarkers();
}


async function addMarkers(){
	
	var locations = await getBusLocations();

	
	locations.forEach(function(bus){
		var marker = getMarker(bus.id);		
		if (marker){
			moveMarker(marker,bus);
		}
		else{
			addMarker(bus);			
		}
	});

	console.log(locations);
    console.log(markers);
	console.log(new Date());
	setTimeout(addMarkers,15000);
}

async function getBusLocations(){

	var url = 'https://api-v3.mbta.com/vehicles?api_key=4a1383ffbf534311857fbaec05e4fd25&filter[route]=1&include=trip';	
	var response = await fetch(url);
	var json     = await response.json();
	return json.data;
}

function addMarker(bus){
	// var icon = getIcon(bus);
	var marker = new mapboxgl.Marker()
    .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
    .addTo(map);
    console.log(marker)

	markers.push(marker);
}

function getIcon(bus){
	
	if (bus.attributes.direction_id === 0) {
		return 'red.png';
	}
	return 'blue.png';
}

function moveMarker(marker,bus) {
    // marker.setPosition( {
    // 	lat: bus.attributes.latitude, 
    // 	lng: bus.attributes.longitude
	// });
}

function getMarker(id){
	var marker = markers.find(function(item){
		return item.id === id;
	});
	return marker;
}

window.onload = init;
