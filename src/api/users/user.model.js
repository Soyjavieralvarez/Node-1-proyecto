const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required:[true, 'Debes introducir un email'],
            unique:true,
        },

        password: {
            type: String,
            required: [true, 'Debes introducir una contraseña']
        },

        name: {
            type:String,
            required:true,
        },
    },
    {
        timestamps:true,
    });

    const User = mongoose.model("users", userSchema);

    module.exports = User;

    //!--¿PUEDE SER QUE ME FALTE ENLAZAR CON SERVER.USE(EXPRESS.JSON());
    //!EN INDEX.JS EN LA LÍNEA 25. ¡EN EFECTO!