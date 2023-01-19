const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Debes poner el nombre del estudiante'],
        },

        speciality: {
            type:[String],
            enum: ['Front-end', 'Back-end', 'Full-Stack'],
        },

        contactEmail: {
            type: String,
            required:true,
            unique:true,
        },

        age: {
            type: String,
        },

        city: {
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