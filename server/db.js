// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri="mongodb://localhost:27017"

// const client = new MongoClient(uri, {
//     serverApi:{
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true
//     }
// });

// async function testConnection(){
//     try{
//         await client.connect();
//         await client.db("admin").command({ping: 1});
//         console.log("Pinged your deployment. You successfully connect to MongoDB!");
//     } finally {
//         await client.close();
//     }
// }
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://admin:admin@expenses.qiad3i8.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = class db {

  async testConnection() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Ping Successful");
      return true;
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
    return false;
  }

  async getCollection() {
    var result = {}
    try {
      await client.connect();
      var db = client.db("expenses");
      result = await db.collection("dailyExpenses").find().toArray()

    } finally {
      await client.close();
    }
    return result;
  }

  async addExpenseEntry(expense) {
    try {
      console.log(expense);
      await client.connect();
      var db = client.db("expenses");
      const result = await db.collection("dailyExpenses").insertOne(expense);
      console.log(`db action completed - ${result.acknowledged}`);
    } finally {
      await client.close();
    }
  }

  async cleanDailyExpCollection() {
    try {
      console.log("deleting All");
      await client.connect();
      var db = client.db("expenses");
      const result = await db.collection("dailyExpenses").deleteMany({});
      console.log(`db action completed - ${result.acknowledged}`);
    } finally {
      await client.close();
    }
  }
}
