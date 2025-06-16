// Mongoclient 
//here MongoClient Class will be imported from the mongodb and for mongodb interaction 
import { MongoClient } from "mongodb" ;
//npm run dev

const url = "mongodb+srv://salmanshaikh:n72L9oN54khi0vBJ@cluster0.oqtuyuo.mongodb.net/";

const client = new MongoClient(url);

await client.connect();
console.log("connected to db");

const coursedb = client.db("classes");

const courseCollection = coursedb.collection("students");

async function insert() {
    const 
    
}

// async function insert(){
//      const savedSt = await courseCollection.insertOne ({
//         name : "Pravin" ,age : 58 ,at : "ItShaala"
//      });
//      console.log("student savedd", savedSt)
// }

// insert();

// async function main(){
//     await client.connect();//connection establishment
//     console.log("Connected to DB")

//     const db = client.db("course_selling"); //data base selection 

//     const courseCollection = db.collection("courses")//collection selection 

//     //read

//     const course = await courseCollection.find().toArray();//toarray will be use to retun the output in array format 
//     console.log(course);

//     db.listCollection


// }
// main();
