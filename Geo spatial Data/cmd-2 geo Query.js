db.place.find({
  location: {
    $near: {
      $geometry: { $type: "Point", coordinates: [-122.4669476, 37.7697755] },
      $maxDistance:200,
      $minDistance:10,
    },
  },
});

db.place.createIndex({ location: "2dsphere" });

const p1=[-122.4547,37.77473]
const p2=[-122.45303,37.76641]
const p3=[-122.51026,37.76411]
const p4=[-122.51088,37.77131]


db.place.find({
    location: {
      $geoWithin: {
        $geometry: { $type:"Polygon", coordinates:[[p1,p2,p3,p4,p1]] },
      },
    },
  });
  