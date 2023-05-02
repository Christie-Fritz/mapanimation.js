
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fmcml0ejIzIiwiYSI6ImNsZ2llZHJzajB1aWMzbW55dnVqMTRmdTQifQ.9oSNIL2e711-UUI6h7AzQw';
  
  

  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
  
  setTimeout(() => {
    if (counter >= busStops.length)return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
    }, 1000);
  }
  