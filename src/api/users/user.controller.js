const User = require('./User.model');

const registerPost = (req, res, next) => {
    try {
        return res.status(200).json('Register funcionando de nuevo');
    }catch(error){
        return next(error);
    }
};

const loginPost = (req, res, next) => {
    try {
        return res.status(200).json('Login funcionando de nuevo');
    }catch(error){
        return next(error);
    }
};

module.exports = {
   registerPost,
   loginPost,
};