const mongoose = require('mongoose');
const user = require('./models/user');
const product = require('./models/product');

async function connectDb(url){
    mongoose.connect(url)
};

module.exports = {
    connectDb,
}