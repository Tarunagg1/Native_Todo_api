const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'todouser'
    },
    title:{
        type:String,
        required:true
    },
    data:{
        type:String,
        required:true
    },
    isactive:{
        type:Boolean,
        default:true
    }
},{timestamp:true});


const todouserModal = mongoose.model('todomain',todoSchema);

module.exports = todouserModal;

