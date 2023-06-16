db.absences.aggregate([
  {
    $lookup: {
      from: "holidays",
      pipeline: [
        { $match: { year: 2018 } },
        { $project: { _id: 0, date: { name: "$name", date: "$date" } } },
        { $replaceRoot: { newRoot: "$date" } },
      ],
      as: "holidays",
    },
  },
  {$out:"transform"}
]);
 


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
  