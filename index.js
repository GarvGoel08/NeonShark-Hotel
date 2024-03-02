const express = require('express')
const app = express()
require("dotenv").config();
const cors = require('cors');
const {connectToDatabase} = require("./db");
const port = process.env.PORT || 5000
connectToDatabase(); 
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

app.use('/auth', require('./Routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
