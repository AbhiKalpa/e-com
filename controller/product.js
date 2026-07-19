const product = require('../models/product');

const createProduct = async(req,res)=>{
    try {
        const {title,description,price,image,category,stockCount} = req.body;
        const newProduct = new product({title,description,price,image,category,stockCount});
        await newProduct.save();
        return res.status(201).json({message : "product created successfully ",product :newProduct})
    } catch (error) {
        return res.status(500).json({message :"something went wrong",error : error.message});
    }
}



module.exports = {
    createProduct,
};