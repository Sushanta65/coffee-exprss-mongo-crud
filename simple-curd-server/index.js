const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const port = process.env.PORT || 5400;

const app = express();

app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.uksn0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
  
    await client.connect();


    app.get('/', (req, res) => {
      res.send('App is runngin.')
    })
    
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");

  } finally {
    
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, (req, res) => {
  console.log(`App is running at : ${port}`);
})