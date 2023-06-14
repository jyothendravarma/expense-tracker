const { MongoClient, ServerApiVersion } = require('mongodb');
const uri="mongodb+srv://admin:admin@selftrack.tb2ud.azure.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

async function testConnection(){
    try{
        await client.connect();
        await client.db("admin").command({ping: 1});
        console.log("Pinged your deployment. You successfully connect to MongoDB!");
    } finally {
        await client.close();
    }
}

async function addExpensentry() {
    try{
        await client.connect();
        var db = client.db("expenses");
        db.createCollection("dailyExpenses", function(err, res){
            if(err) throw err;

            console.log("CollectionCreated!. res - " + res);
        })
    } finally {
        await client.close();
    }
}