const express = require('express');
const controller = require('./teacher.controller')
const router = express.Router();

// ruta: /teachers/
router.get('/', controller.indexGet);

//ruta: teachers
router.get('/:id', controller.getById);
// ruta : /teachers/create
router.post('/create', controller.createPost);

//ruta: /teachers/id/{id}
router.put('/edit/:id', controller.editPut)

//ruta : /teacher/delete

router.delete('/delete/:id', controller.deleteTeacher)

module.exports = router;

