const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    images:String,
    name:String,
    price:Number,
    discount:{
        type:Number,
        default:0,      //Agar discount nahi hai to 0 hi hoga
    },
    bgcolor:String,
    panelcolor:String,
    textcolor:String,
});

module.exports=mongoose.model("product",productSchema);