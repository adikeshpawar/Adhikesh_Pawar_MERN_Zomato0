const mongoose = require('mongoose');

// Define the Item schema
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true // URL to the image
    }
});
// Create the Item model
const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
