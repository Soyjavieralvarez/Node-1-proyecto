const express = require('express');
const controller = require('./teacher.controller')
const router = express.Router();

// ruta: /teachers/
router.get('/', controller.indexGet);
// ruta : /teachers/create
router.post('/create', controller.createPost);

module.exports = router;

