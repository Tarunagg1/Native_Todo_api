const mongoose = require('mongoose');
console.log(process.env.MONGODB_KEY);
mongoose.connect(process.env.MONGODB_KEY,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true})
.then(() => {
    console.log('connection extablist');
})
.catch((err)=>{
    console.log("connection error",err)
})



