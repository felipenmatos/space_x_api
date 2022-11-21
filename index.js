const express = require("express");

const app = express();

app.use(express.json());

app.listen(8000);

const dotenv = require("dotenv");
dotenv.config();

const MONGO_CNSTRING = process.env.MONGO_CNSTRING;

const { MongoClient } = require("mongodb");

// Database Name
const dbName = "myProject";

const client = new MongoClient(MONGO_CNSTRING);

client.connect(async function (err) {
  const db = client.db(dbName);
  const testCollection = db.collection("testcollection");
  await testCollection.insertOne({
    test: true,
  });
  client.close();

  const findResult = await testCollection.find({}).toArray();
  return findResult;
});
