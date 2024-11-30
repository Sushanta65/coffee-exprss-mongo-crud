const express = require('express')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 5400;

const app = express();

app.use(cors())
app.use(express.json())




app.listen(port, (req, res) => {
  console.log(`App is running at : ${port}`);
})