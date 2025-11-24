const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    author:{
        type: String,
        required:true
    },
    year:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    barcode:{
        type:String,
        required:true
    }
})

const adminTbl = mongoose.model("admin",adminSchema)
module.exports = adminTbl;