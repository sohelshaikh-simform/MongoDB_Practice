db.persons.aggregate([
  {
    $project: {
      _id: 0,
      //   birthdate: { $convert: { input: "$dob.date", to: "date" } },
      birthdate: { $toDate: "$dob.date" },
    },
  },
]);
