db.friends.aggregate([
    {$project:{_id:0,numScore:{$size:"$examScores"}}}
  ]);
  