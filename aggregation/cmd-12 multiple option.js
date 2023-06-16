db.friends.aggregate([
  { $unwind: "$examScores" },
  { $project: { _id: 1, name: 1, age: 1, scores: "$examScores.score" } },
  { $sort: { scores: -1 } },
  {
    $group: {
      _id: "$_id",
      name: { $first: "$name" },
      maxScores: { $max: "$scores" },
    },
  },
  { $sort: { maxScores: -1 } },
]);
