const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()


const app = express()
const port = process.env.PORT || 5300;

//middleware
app.use(cors())
app.use(express.json())


const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    await client.connect();




    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");

  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('app is running')
})



//Server listen
app.listen(port, (req, res) => {
  console.log(`Your app is running at port ${port}`)
})