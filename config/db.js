const mongoose = require('mongoose');
// console.log(process.env.MONGODB_KEY);
mongoose.connect('mongodb+srv://tarun:fileshare@cluster0.capdh.mongodb.net/todo?retryWrites=true&w=majority',{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true})
.then(() => {
    console.log('connection extablist');
})
.catch((err)=>{
    console.log("connection error",err)
})



