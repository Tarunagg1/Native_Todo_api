const jwt = require('jsonwebtoken');
const registerModal = require('../modal/user');

const validatetoken = async (req, res, next) => {
    try {
        // console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];
        // console.log(token);
        const userinfo = jwt.verify(token, process.env.LOGIN_SECRET);
        // console.log(userinfo);
        if (!userinfo) {
            return res.status(500).json({ errors: [{ message: "Token not provided", status: false }] });
        }
        const isuserexist = await registerModal.findById(userinfo._id);
        if(isuserexist){
            req.user = userinfo;
            next();
        }else{
            return res.status(500).json({ errors: [{ message: "Logout and Login again", status: false, errs: error }] });
        }
    } catch (error) {
        return res.status(500).json({ errors: [{ message: "Token is expire or invalid", status: false, errs: error }] });
    }
}

module.exports = validatetoken;