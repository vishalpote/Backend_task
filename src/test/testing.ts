import { MongoClient, Db, Collection } from "mongodb";
// import config from '../config/index'

const url = "mongodb://localhost";
const databaseName = "CRUD";
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    console.log("Connected successfully to Database " + databaseName);

    const database: Db = client.db(databaseName);
    const collection: Collection = database.collection("users");

    // Insertion function
    async function insertDocument(data: any) {
      const insertResult = await collection.insertOne(data);
      console.log(`Inserted : ${insertResult.insertedId}`);
    }

    // Update function
    async function updateDocument(filter: any, updateData: any) {
      const updateResult = await collection.updateOne(filter, { $set: updateData });
      console.log(`Updated :  ${updateResult.modifiedCount}`);
    }

    // Deletion function
    async function deleteDocument(filter: any) {
      const deleteResult = await collection.deleteOne(filter);
      console.log(`Deleted : ${deleteResult.deletedCount}`);
    }

    // Insert a user into the database
    // await insertDocument({ name: 'John Doe', email: 'john@example.com',age:23 });

    // update the user information in the database
    // await updateDocument({ name: "karan chavan" }, { name: "karan amar chavan", email: "karan@example.com", age: 25 });

    // Delete a user from the database
     await deleteDocument({ name: 'vishal pote' });
  } catch (err) {
    console.log(err.message);
  }
}
main();
