const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authcontroller = require('./controller/authcontroller');

const api = express();

api.use(bodyParser.json());
api.use(cors());
api.use('/auth',authcontroller);

api.listen(3000,()=>{
    console.log("Restfull started successfully......");
})