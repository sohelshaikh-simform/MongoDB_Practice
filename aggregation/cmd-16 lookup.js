db.inventory.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "sku",
      foreignField: "item",
      as: "inventory_docs",
    },
  },
]);

db.friends.aggregate([
  {$match:{name:"Max"}},
  {
    $replaceRoot: {
      newRoot: "$examScores",
    },
  },
]);

db.friends.aggregate([{$replaceRoot: {
      newRoot: "$examScores",},},]);
