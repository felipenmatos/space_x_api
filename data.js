const dotenv = require("dotenv");
dotenv.config();
const MONGO_CNSTRING = process.env.MONGO_CNSTRING;
const { MongoClient } = require("mongodb");
const dbName = "myProject";
const client = new MongoClient(MONGO_CNSTRING);

var dados = [];

async function main() {
  await client.connect();
  const db = client.db(dbName);
  const testCollection = db.collection("testcollection");
  const findResult = await testCollection.find({}).toArray();
  return findResult;
}

main().then((res) => dados.push(res));

module.exports = dados;
