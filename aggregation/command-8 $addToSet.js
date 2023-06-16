// to remove duplicate in array
db.friends.aggregate([
    {$unwind:"$hobbies"},
    {$group:{_id:{age:"$age"},allHobbies:{$addToSet:"$hobbies"}}}
  ]);
  