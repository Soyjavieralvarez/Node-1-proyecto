const Teacher = require('./teacher.model');

const indexGet = async (req, res, next) => {
    try {
        const teachers = await Teacher.find();
        return res.status(200).json(teachers);
    }catch(error){
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try{
        const { id } = req.params;
        const found = await Teacher.findById();
        return res.status(200).js(found);

    } catch(error){
    return res.status(500).json(error.message)
    }
};

const createPost = async (req, res, next) => {
    try {
        console.log(req.body);

        const created = await teacherToBeCreated.save();
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
        console.log('fields en teacher', options);
        const edited = await Teacher.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);

    }
    catch(error) {
        return next(error);
    }
}

const deleteTeacher = async (req, res, next) => {
    try{
        const { id } = req.params;
        const deleted = await Teacher.deleteOne({ _id: id });
        if (deleted.deletedCount){
            return res.status(200).json("Elemento elminado con éxito");
        }else {
            return res.status(200).json("No se encuentra el elemento para eliminar");
        }
    }catch(error) {
        return res.status(error.status || 500).json(error.message);
    }
}

module.exports = {
    indexGet,
    createPost,
    getById,
    editPut,
    deleteTeacher,
};
