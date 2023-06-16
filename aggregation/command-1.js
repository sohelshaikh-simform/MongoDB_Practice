db.persons.aggregate([
    {$match:{gender:"female"}},
    {$group:{_id:{state:"$location.state"},totalPerson:{$sum:1}}},
    {$sort:{totalPerson}}
])