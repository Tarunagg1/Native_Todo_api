const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isactive:{
        type:Boolean,
        default:true
    }
},{timestamp:true});


const todouserModal = mongoose.model('todouser',userSchema);

module.exports = todouserModal;

