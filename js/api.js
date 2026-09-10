async function fetchNearbyPlaces(lat, lon, radius) {
  const query = `
    [out:json];
    (
      node["amenity"~"cafe|restaurant|fast_food|pub|library"](around:${radius},${lat},${lon});
      node["leisure"~"park|fitness_centre"](around:${radius},${lat},${lon});
    );
    out body;
  `;

  const url = "https://overpass-api.de/api/interpreter";

  const response = await fetch(url, {
    method: "POST",
    body: query,
  });

  const data = await response.json();
  return data.elements;
}

fetchNearbyPlaces(52.6369, -1.1398, 1000)
  .then((places) => {
    console.log("Places Found:", places.length);
    console.log(places);
  })
  .catch((err) => console.error("API error:", err));
