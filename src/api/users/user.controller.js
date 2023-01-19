const User = require('./user.model');

const indexGet = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    }catch(error){
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try{
        const { id } = req.params;
        const found = await User.findById(id);
        return res.status(200).js(found);
    } catch (error) {
    return res.status(error.status).json(error.message);
    }
};

const getByName = async (req, res, next) =>{
    try{
        const { name } = req.params;
        const found = await User.find({name: name});
        return res.status(200).json(found);
    }catch (error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {
    console.log(req.body);
    try {
        console.log(req.body);
        const userToBeCreated = new User(req.body);
        console.log(userToBeCreated)
        const created = await userToBeCreated.save();

        return res.status(201).json(created)
    }catch(error) {
        return next(error);
    };
}

const editPut = async(req, res, next) => {
    try {
        const { id } = req.params;
        const fields = {...req.body};
        const options = { new: true};
        console.log('fields en user', options);
        const edited = await user.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);

    }
    catch(error) {
        return next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try{
        const { id } = req.params;
        const deleted = await User.deleteOne({ _id: id });
        if (deleted.deletedCount){
            return res.status(200).json("Elemento elminado con éxito");
        }else {
            return res.status(200).json("No se encuentra el elemento para eliminar");
        }
    }catch(error) {
        return next(error);
}
};

module.exports = {
    indexGet,
    createPost,
    getById,
    editPut,
    deleteUser,
    getByName,
};