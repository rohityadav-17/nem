const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const adminModel = new mongoose.model("admin",adminSchema);

module.exports = adminModel


