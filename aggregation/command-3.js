db.persons.aggregate([
  {
    $project: {
      _id: 0,
      gender: 1,
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
]);
