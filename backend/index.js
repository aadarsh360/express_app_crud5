const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const port = 3000;
const userRoute = require('./routes/userRoute');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const mysql = require("mysql2");

app.get('/', (req, res)=>{
    res.send("Hello World!!!");
})

app.use('/', userRoute);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})