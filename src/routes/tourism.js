
const express = require('express');
const res = require('express/lib/response');
const { getTourism, getTourismById, createTourism, updateTourism, deleteTourism } = require('../controllers/tourism.controller');
const router = express.Router();
//tenemos el 
router.get('/tourism',getTourism );//tenemos el router.get, se utilizara en la ruta "estash tourism" y tenemos un controlador que es el get tourism.
router.get('/tourism/:id', getTourismById ); // en este get desimos que tourism "estash:id" la direccion resive un metodo get y hace uso del controlador "getTourismById"
router.post('/tourism', createTourism )
router.patch('/tourism/:id', updateTourism )
router.delete('/tourism/:id', deleteTourism )
 
 
module.exports = router;
// exportamos el router para luego asignales las configuraciones principales del app.js
