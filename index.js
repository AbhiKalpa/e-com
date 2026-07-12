const express = require("express");

const app = express();
app.set('view engine',"ejs");

const mongoose = require("mongoose");
const { Schema } = mongoose;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// mongodb connection ------------------
mongoose.connect("mongodb://127.0.0.1:27017/e_com")
    .then(() => console.log("connected!"))
    .catch(err => console.error(err));



// Schema ------------------
const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: [true, "must select the category"],
        enum: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books']
    },

    sku: {
        type: String,
        trim: true,
        default: 'N/A'

    },

    price: {
        type: Number,
        required: [true, "price must be enterd"],
        min: [0, "negative is not acceptable"]
    },

    quantity: {
        type: Number,
        required: true,
        min: [0, "dont go out of stock"],
        get: v => Math.round(v),
        set: v => Math.round(v)
    },

    description: {
        type: String,
        required: true,
        default: ''
    },

    productImage: {
        type: String,
    }
}, {
    timestaps: true
});

const product = mongoose.model("product", productSchema);
mongoose.exports = product;

// middlewares ------------------------
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next()
});



// Restful apis ----------
app.get("/", (req, res) => {
    res.send("hello from home page");
});


app.get("/product_form",(req,res)=>{
    res.render('product_form');
})



app.post('/submit-product', async (req, res) => {
    const { productName, category, sku, price, quantity, description, productImage } = req.body;
    const result = await product.create({
        productName,
        category,
        sku,
        price,
        quantity,
        description,
        productImage

    })
    console.log(result);
    return res.status(201).json({msg : "succed !"})
})


app.listen(3000, () => {
    console.log("server is running on post 3000")
});