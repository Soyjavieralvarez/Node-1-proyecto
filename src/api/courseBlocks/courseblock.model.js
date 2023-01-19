const mongoose = require('mongoose');

const courseBlockSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            // required : [true, 'Debes especificar un nombre para el bloque']
        },

        description: {
            type:String,
        },

        /**
         * Aquí guardaremos una ID, que haga referencia a un elementro creado
         * En otra colección (o modelo), pero guardaremos únicamente la ID.
         */
        teacher: {
            type: mongoose.Types.ObjectId,
            ref: "teachers",

        },

        secondTeacher: {
            type: mongoose.Types.ObjectId,
            ref: "teachers",
        },
        
        //Nº de horas que tendrá el módulo
        duration: {
            type: Number,
        },

        content:{
            type: String,
        },

    }
    ,{
        timestamps: true,

    }
    );

/** 
*Cuando creamos una colección de base de datos con palabras
*Compuestas, suele usarse de guiones bajos.
*/
const CourseBlock = mongoose.model('course_blocks', courseBlockSchema);

module.exports = CourseBlock;

