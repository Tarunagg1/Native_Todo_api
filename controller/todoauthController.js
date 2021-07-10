const userModel = require('../modal/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const registerController = async (req,res) => {
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({error:"All fields required"})
    }
    try {
        const isemailExists = await userModel.findOne({email});
        if(isemailExists){
            return res.status(400).json({error:"Email allready exists"})        
        }
        const hashpass = await bcrypt.hash(password,10);

        const newuser = new userModel({
            name,email,password:hashpass
        });
        const resp = await newuser.save();
        if(resp){
            return res.status(201).json({message:"user registration successfully"});   
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:"Something went wrong",er:error})        
    }
}

const loginController = async (req,res) => {
    const {email,password} = req.body;
    try {
        const isemailexist = await userModel.findOne({email});
        if(isemailexist){
            if(isemailexist.isactive){
                const ispassvalid = await bcrypt.compare(password,isemailexist.password);
                if(ispassvalid){
                    const data = {
                        _id:isemailexist._id,
                        name:isemailexist.name,
                        email:isemailexist.email
                    }
                    const token = jwt.sign(data,'ojuiguysdc6sf2d+6vd+6f2vdf+6g2d6',{expiresIn:'7d'})
                    return res.status(200).json({message:"login success",token});  
                }else{
                    return res.status(400).json({error:"Invalid password"});  
                }
            }else{
                return res.status(400).json({error:"Your account is  not active"});  
            }
        }else{
            return res.status(400).json({error:"Email id not exists"})        
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:"Something went wrong",er:error})        
    }
}


module.exports = {
    registerController,
    loginController
}