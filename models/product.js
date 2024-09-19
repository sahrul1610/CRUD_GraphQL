const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: String,
    price: String,
    stock: String
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;