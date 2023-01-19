const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

//ruta: /users/
router.get('/', controller.indexGet);

//ruta: /users/ {id}
router.get('/:id', controller.getById)

//ruta: /users/name
router.get("/getbyname/:name", controller.getByName)

//ruta: /users/create
router.post('/create', controller.createPost);

//ruta: /users/id/{id}
router.put('/edit/:id', controller.editPut);

//ruta : /user/delete
router.delete('/delete/:id', controller.deleteUser)

module.exports = router;