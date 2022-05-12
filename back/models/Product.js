const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    producto: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    tamanio: {
        type: String,
        required: true,
    },
    precio: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    stock: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model("Product", productSchema);