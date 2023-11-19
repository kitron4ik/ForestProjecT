var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("forest");
database.dropDatabase()
database = client.db("forest");
const cats = database.collection("trees");
const result = await cats.insertOne({name:"Дуб"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()