const express = require('express');

const db = require('./src/utils/db');

db.connectDB();

const PORT = 3000;

const server = express ();

const router = express.Router();

server.use(express.json());



router.get("/", (request, result) => {
    console.log(result)

    return result.status(200).json('El servidor está funcionando perfectamente');
})

router.get("/movies/:nombrePelicula",(req, res) => {
    const nombrePelicula = req.params.nombrePelicula;

    return res.status(200).json(`Película que quieres ver: ${nombrePelicula}`)

});
    

router.get("/students", (req, res) => {
    const students = ['Marcos', 'Gabriel', 'Joan', 'Marcelo', 'Marta'];

    return res.status(200).json(students);
});

router.post("/mascotas", (req, res) =>{
console.log(req.body);

return res.status(200).json('POST a mascotas')

});




server.use('/', router);



server.listen(PORT, () => {
    console.log('Servidor ejecutando a máximo rendimiento en http://localhost:' + PORT);
});




/** 
 * .gitignore
 * - package.json
 * -index.js
 * -/src
 *   -/api
 *    -/teachers (aquí creamos un CRUD para profesores. ej: Santi, Juan, Roberto, etc...) --En plural--
 *      teacher.model.js --En singular--
 *      teacher.routes.js --En singular--
 *      teacher.controller.js --En singular--
 * 
 * -/users (los usuarios de nuestra web seremos nosotros mismos, accederéis a la APP.) --En plural--
 *      user.model.js --En singular--
 *      user.routes.js --En singular--
 *      user.controller.js --En singular--
 * 
 * -/course-blocks (JS, Node, React, etc...) --En plural--
 *      courseBlock.model.js --En singular--
 *      courseBlock.routes.js --En singular--
 *      courseBlock.controller.js --En singular--
 * 
 * -/course-sessions (Día 20/enero una clase de (bloque clases)) --En plural--
 *      courseSession.model.js --En singular--
 *      courseSession.routes.js --En singular--
 *      courseSession.controller.js --En singular--
 * 
 *    -/utils
 *     -db.js
 * 
 * (INDEX ROUTES)
 * 
 *                                                          ---RUTA PRINCIPAL DEL SERVIDOR---
 * / (/GET)
 * 
 * /status (GET)                                            - Nos devuelve un texto, si lo recibimos quiere decir que el servidor está funcionando/levantado.
 * 
 * (TEACHERS ROUTES)
 * 
 * /teachers (GET)                                         - Nos devuelve TODOS los elementos
 * /teachers/id-del-elemento (GET)                         - Nos devuelve un elemento por ID
 * /teachers/create (POST)                                 - Crea un elemento
 * /teachers/edit/id-del-elemento (EDIT)                   - Edita un elemento
 * /teachers/delete/id-del-elemento (DELETE)               - Elimina un elemento
 * 
 * (COURSE-BLOCKS ROUTES)
 * 
 * /course-blocks (GET)                                    - Nos devuelve TODOS los elementos
 * /course-blocks/id-del-elemento (GET)                    - Nos devuelve un elemento por ID
 * /course-blocks/create (POST)                            - Crea un elemento
 * /course-blocks/edit/id-del-elemento (EDIT)              - Edita un elemento
 * /course-blocks/delete/id-del-elemento (DELETE)          - Elimina un elemento
 * 
 * (COURSE-SESSIONS ROUTES)
 * 
 * /course-sessions (GET)                                  - Nos devuelve TODOS los elementos
 * /course-sessions/id-del-elemento (GET)                  - Nos devuelve un elemento por ID
 * /course-sessions/create (POST)                          - Crea un elemento
 * /course-sessions/edit/id-del-elemento (EDIT)            - Edita un elemento
 * /course-sessions/delete/id-del-elemento (DELETE)        - Elimina un elemento
 * 
 * (USERS ROUTES)
 * 
 * /register (POST)                                        - Recibimos al usuario
 * /login (POST)                                           - Recibe usuario y email para loguearnos en nuestro servidor
 * /check-session (GET)                                    - GET que nos devolverá si tenemos usuario logueado (Front primera carga)
 * /logout (POST)                                          - Desconecta al usuario de la sesión
 * 
 * 
 * 
 */


