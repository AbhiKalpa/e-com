const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title :{
        type :String,
        required :true,
        trim :true
    }, 
    description :{
        type : String,
        required : true
    }, 
    price :{
        type : Number,
        rquired : true
    }, 
    image:{
        type : String,
        required : true
    }, 
    category :{
        type : String,
        required : true
    },
    stockCount:{
        type : Number,
        required : true
    }
},{timestamps :true});


const product = mongoose.model('product',productSchema);

module.exports = product;