
db.places.aggregate([
  {
    $geoNear: {
      near: {
        type: "point",
        coordinates: [-73.99,40.719296],
      },
      maxDistance: 2,
      query: { category: "Stadiums" },
      distanceField: "distance",
    },
  },
]);


db.places.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [-73.99279, 40.719296] },
      distanceField: "dist.calculated",
      maxDistance: 2,
      query: { category: "Parks" },
      includeLocs: "dist.location",
      spherical: true,
    },
  },
]);
