import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/";
// const url = "mongodb+srv://salmanshaikh:n72L9oN54khi0vBJ@cluster0.oqtuyuo.mongodb.net/";

const client = new MongoClient(url);

// const { MongoClient } = require('mongodb');
// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);

async function crudExample() {
  try {
    await client.connect();
    const db = client.db("demoDB");
    const users = db.collection("users");

    // Insert
    await users.insertOne({ name: "John", age: 26 });

    // Read
    const john = await users.findOne({ name: "John" });
    console.log("Found:", john);

    // Update
    await users.updateOne({ name: "John" }, { $set: { age: 27 } });

    // Delete
    await users.deleteOne({ name: "John" });

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

crudExample();
