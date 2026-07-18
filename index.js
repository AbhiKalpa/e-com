const express = require('express');

const app = express();
const {connectDb} = require('./connect')

PORT = 4000;

connectDb('mongodb://127.0.0.1:27017/e-comerce');

const userRout = require('./router/user');

app.use('/',userRout);



app.listen(PORT,()=>console.log(`server is running on ${PORT}`));