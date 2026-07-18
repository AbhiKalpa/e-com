const mongoose = require('mongoose');
const user = require('./models/user');

async function connectDb(url){
    mongoose.connect(url)
};

module.exports = {
    connectDb,
}