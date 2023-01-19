const express = require("express"); //Express para levantar el servidor

const cors = require("cors"); //Las cors sirven para permitir o denegar que se pueda acceder al servidor desde x sitios

const db = require("./src/utils/db"); //Importar db

db.connectDB(); //Utilizo la función que me conecta con la base de datos de nuestro archivo db

//All Routes imports
const indexRoutes = require("./src/api/index/index.routes");
const teachersRoutes = require("./src/api/teachers/teacher.routes");
const usersRoutes = require('./src/api/users/user.routes');
const User = require("./src/api/users/user.model");
const Teacher = require("./src/api/teachers/teacher.model");

//Declaramos el puerto en el que se levantará nuestro servidor
const PORT = 3000;

//Ejecutamos nuestro express() para tener acceso al server y poder hacer ciertas cosas sobre él.
const server = express ();

//Para que admita peticiones de otro servidor, front o app.
server.use(cors());

//Transformar el contenido o cuerpo de las peticiones POST (req.body)
//Convierte cuando enviamos un post con json al servidor
server.use(express.json(Teacher)); 
server.use(express.json(User)); //!PARA ENLAZAR CON USER.MODEL.JS

//Convierte cuando mandamos un form o formdata al servidor

server.use(express.urlencoded({ extended: true}));

//Configuración de todas las rutas de nuestro servidor. 
server.use('/teachers', teachersRoutes);
server.use("/", indexRoutes);

// USUARIOS/ESTUDIANTES
server.use("/users", usersRoutes);

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


