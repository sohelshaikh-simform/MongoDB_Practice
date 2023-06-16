db.blog.insertOne({name:"Bob"})
db.post.insertMany([{name:"First Post",userId:ObjectId("647588d4612a1793dfceb254")},{name:"Second Post",userId:ObjectId("647588d4612a1793dfceb254")}])

const session = db.getMongo().startSession();
const userCol=session.getDatabase("blog").user
const postCol=session.getDatabase("blog").post
session.startTransaction()
userCol.deleteOne({_id:ObjectId("647588d4612a1793dfceb254")})
postCol.deleteMany({_id:ObjectId("647588d4612a1793dfceb254")})
session.startTransaction();
