var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    _id: Number,
    name: String,
    price: String,
    stock: Number,
    offers: Boolean,
    category: Number,
    image: String,
    description: String
});

module.exports=mongoose.model('Product',ProductSchema);