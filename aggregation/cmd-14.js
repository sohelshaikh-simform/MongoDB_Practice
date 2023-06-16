db.persons.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      name: { $concat: ["$name.first", " ", "$name.last"] },
      birthdate: { $toDate: "$dob.date" },
    },
  },
  {
    $sort: {
      birthdate: 1,
    },
  },
  {
    $skip: 10,
  },
  {
    $limit: 10,
  },
]);
