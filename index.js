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


