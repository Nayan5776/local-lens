fetchNearbyPlaces(52.6369, -1.1398, 1000)
  .then((places) => {
    places.forEach((place) => {
      if (place.tags && place.tags.name) {
        L.marker([place.lat, place.lon]).addTo(map).bindPopup(place.tags.name);
      }
    });
  })
  .catch((err) => console.error("API error:", err));
