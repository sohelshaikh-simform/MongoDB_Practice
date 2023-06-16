db.persons.aggregate([
  {
    $project: {
      _id: 0,
      gender: 1,
      birthdate: { $toDate: "$dob.date" },
      fullname: {
        $concat: [
          //   { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
          { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
          {
            $substrCP: [
              "$name.first",
              1,
              { $subtract: [{ $strLenCP: "$name.first" }, 1] },
            ],
          },
          " ",
          { $toUpper: "$name.last" },
        ],
      },
    },
  },
  {
    $group: {
      _id: { birthYear: { $isoWeekYear: "$birthdate" } },
      numPersons: { $sum: 1 },
    },
  },
  {$sort:{numPersons:1}}
]);
