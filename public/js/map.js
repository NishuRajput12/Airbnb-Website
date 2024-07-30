

// let mapToken=mapToken;
//   console.log(mapToken);
  mapboxgl.accessToken=mapToken;
	// mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsdGEtc3R1ZHVlbnQiLCJhIjoiY2xvMDk0MTVhMTJ3ZDJrcGR5ZDFkaHl4ciJ9.Gj2VU1wvxc7rFVt5E4KLOQ';
    const map = new mapboxgl.Map({
        container: 'map',
        // You can add layers to the predetermined slots within the Standard style basemap.
        style: 'mapbox://styles/mapbox/dark-v11',
        center:listing.geometry.coordinates ,//starting position [lng,lat]
        zoom: 5,
        maxZoom: 6
    });
  

  const marker1 = new mapboxgl.Marker({color:'red'})
    .setLngLat(listing.geometry.coordinates)//listing.geometry/.coordinates
    .setPopup( new mapboxgl.Popup({offset: 25})
    // .setLngLat(e.lngLat)
    .setHTML(
          
         `<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`
        )
    
     )
    .addTo(map);



