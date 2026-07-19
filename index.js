const express = require('express');

const app = express();

const {connectDb} = require('./connect')
const userRout = require('./router/user');
const productRout = require('./router/product');
PORT = 4000;

connectDb('mongodb://127.0.0.1:27017/e-comerce');

app.use (express.json())


app.use('/',userRout);

app.use('/',productRout)



app.listen(PORT,()=>console.log(`server is running on ${PORT}`));