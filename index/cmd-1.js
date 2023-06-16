

// index allow you to retrive data more efficiently because your query only look at a subset of all document.
// you can use single field,Compound Multi Key and tex indexes.
// index slow down your writes


db.contacts.createIndex({ "dob.age": 1 });

db.contacts.explain("executionStats").find({ "dob.age": { $gt: 60 } });

db.contacts.explain("executionStats").find({ "dob.age": { $gt: 20 } });

db.contacts.dropIndex({ "dob.age": 1 });

db.contacts.getIndexes();

db.contacts.createIndex(
  { "dob.age": 1 },
  { partialFilterExpression: { gender: "male" } }
);

// query diagnosis & query plannng
explain;
option: 1 > queryPlanner;
option: 2 > executionStats;
option: 3 > allPlanExecutions;

// How mongoDB reject Plan.

// Multikey index

// Text index
db.products.createIndex({ description: "text" });

db.products.find({ $text: { $search: "awesome" } });
db.products.find({ $text: { $search: '"awesome book"' } });

// Text index sort

db.products.createIndex({title:"text",description:"text"})

db.products.find(
    { $text: { $search: "awesome red" } },
    { score: { $meta: "textScore" } }
  ).sort({ score: { $meta: "textScore" } });

// Combined Text indexs

// exclude word
db.products.find(
  { $text: { $search: "awesome -red" } })


// weight

db.products.createIndex({ title: "text", description: "text" }, { weights: { title: 1, description: 10 } })

