const todomodal = require('../modal/todo');

exports.addtodo = async (req,res)=>{
    const {title,data} = req.body;
    if(!title || !data){
        return res.status(400).json({error:"All fields required"})           
    }
    try {
        const userid = req.user._id;
        const newtodo = new todomodal({userid,title,data});
        const resp = await newtodo.save();
        return res.status(201).json({message:"Todo added",resp})
    } catch (error) {
        return res.status(400).json({error:"Something went wrong"})        
    }
}

exports.gettodo = async (req,res)=>{
    try {
        const resp = await todomodal.find({userid:req.user._id});
        return res.status(201).json({message:"Yours todos",resp})
    } catch (error) {
        return res.status(400).json({error:"Something went wrong"})        
    }
}

exports.deletetodo = async (req,res)=>{
    try {
        const todoid = req.params.id;
        if(!todoid){
            return res.status(400).json({error:"Todo id required"})        
        }
        const resp = await todomodal.findOneAndDelete({userid:req.user._id,_id:todoid})
        return res.status(201).json({message:"todo deleted",deleted:resp})
    } catch (error) {
        return res.status(400).json({error:"Something went wrong"})        
    }
}

exports.updtetodo = async (req,res)=>{
    try {
        const todoid = req.params.id;
        if(!todoid){
            return res.status(400).json({error:"Todo id required"})        
        }
        const resp = await todomodal.findByIdAndUpdate({userid:req.user._id,_id:todoid},req.body)
        return res.status(201).json({message:"todo updated",updated:resp})
    } catch (error) {
        return res.status(400).json({error:"Something went wrong"})        
    }
}