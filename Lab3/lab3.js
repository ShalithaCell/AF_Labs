// 3.Add the following document to the database sliit

use sliit



db.createCollection("student")



db.student.insertOne(

{

"name": "John",

"dateOfBirth": "1990-01-01T00:00:00Z",

"subjects": 

    ["Application frameworks", "Computer architecture"]

}

)



//we can use the new Date() method to insert the current date and time to MongoDB

db.student.insertOne(

{

"name": "John",

"dateOfBirth": new Date(),

"subjects": 

    ["Application frameworks", "Computer architecture"]

}

)



// 4. Find the document by �name�.

db.student.find({"name": "John"})



// 5. Find the document by �_id�

db.student.find({_id: ObjectId("6063d5c4e7f6a98848fac632")})



// another way to find by id

db.student.find(ObjectId("6063d5c4e7f6a98848fac632"))



// 6. Add �Distributed Computing� to the subjects list.

db.student.updateOne({"name": "John"}, {$push: {"subjects": "Distributed Computing"}})



// 7. Add the following 2 document to the same collection.

db.student.insertMany(

[

{

"name": "Smith",

"dateOfBirth": "1990-01-15T00:00:00Z",

"subjects": ["Application frameworks", "Computer architecture"],

"isActive": true

},

{

"name": "Jane",

"dateOfBirth": "1990-02-15T00:00:00Z",

"subjects": ["Application frameworks", "Computer architecture"],

"isActive": false

}

]

)



// 7. Find the document with the name �Smith� and isActive flag is true and add Distributed computing to subjects.

db.student.updateOne({"name": "Smith","isActive": true}, {$push: {subjects: "Distributed computing"}})



// 8.Update the first document �isActive� to false.

db.student.updateOne({ name: "John"},{ $set : {isActive : false}})



// 9. Remove the first document created

db.student.deleteOne({name : "John"})
