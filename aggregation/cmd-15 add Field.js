db.students.aggregate([
  {
    $addFields: {
      totalHomework: { $sum: "$homework" },
      totalQuize: { $sum: "quize" },
    },
  },
  {
    $addFields: {
      totalScore: { $sum: ["$totalHomework", "$totalQuize", "$extraCredit"] },
    },
  },
]);

db.students.aggregate([
  {
    $addFields: {
      _id: "$item",
      item: "Fruite",
    },
  },
]);
