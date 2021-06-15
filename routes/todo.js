const { registerController,loginController } = require('../controller/todoauthController');
const { addtodo,deletetodo,updtetodo,gettodo,gettodobyid } = require('../controller/todoController');
const validatetoken = require('../middleware/validateToken');

const Router = require('express').Router();



Router.get('/',(req,res)=>{
    return res.send("ijuhyg")
})

Router.post('/register',registerController)
Router.post('/login',loginController)

Router.post('/todo',validatetoken,addtodo);
Router.get('/todo',validatetoken,gettodo);

Router.get('/todo/:id',validatetoken,gettodobyid)

Router.delete('/todo/:id',validatetoken,deletetodo)
Router.put('/todo/:id',validatetoken,updtetodo)



module.exports = Router;