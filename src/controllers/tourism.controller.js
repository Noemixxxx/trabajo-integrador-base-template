const Joi = require('joi');
const Tourism = require('../models/Tourism.model');
const { tourismSchema } = require('./schemas/tourism.schema');
// los controladores son los encargados de crear los metodos, los cuales van hacer las peticiones

// const getTourism 
const getTourism = async (req, res) => { // se encarga en obtener todos los hospedajes va a recibir solo una respuesta que es el "res"
    try { //el try se encarga en hacer las peticiones
        const tourism = await Tourism.find({}) //modelo tourism y ese modelo tiene una funcions .find(que nos devuelve un objeto)
        res.status(200).json(tourism) // lo guardamos en una variable tourism y luego lo tenemos que devolver en una respuesta 
    } catch (err) { // en caso contrario el catch error va a dar la devolucion si algo falla.
        res.status(500).json({ // con estatus 500 y algun msj
            code: 'Internal server error',
            message: 'The server has encountered a situation that it does not know how to handle.',
            severity: 'LOW'
        })
    }
};
//luego tenemos otro metodo que es getTourismByID, que este*
const getTourismById = async (req, res) => { // aparte de tener una respuesta tambien tiene una request que es una solicitud, dentro de esta solicitud nosotros podemos enviar parametros
    try { // al momento de hacer el try  utilizamos tambien el modelo "tourism"
        const tourism = await Tourism.findById(req.params.id) //"tourism" va a tener un metodo se llama findById y le pasamos por parametro el aidi que estamos recibiendo 
        res.status(200).json(tourism)//  una variable "tourism" va a devolver el elemento que encuentre y lo damo cm respuesta un status 200 al objeto encontrado 
    } catch (err) {
        res.status(500).json({
            code: 'Internal server error',
            message: err.details[0].message,
            severity: 'LOW'
        })
    }
}
//y para el resto de los parametros es todo casi igual 
const createTourism = async (req, res) => { 
    const data = req.body 
    try { 
        Joi.assert(data, tourismSchema) 
        const tourism = new Tourism(data)
        await tourism.save() 
        res.status(200).json({
            code: 'OK',
            message: 'Successful request'
        })
    } catch (err) { 
        res.status(400).json({  
            code: 'bad_request',
            message: err.details[0].message,
            severity: 'LOW'
        })
    }
}

const updateTourism = async (req, res) => {
    const data = req.body
    try {
        Joi.assert(data, tourismSchema)
        await Tourism.findByIdAndUpdate(req.params.id, data)
        res.status(200).json({
            code: 'OK',
            message: 'Tourism updated successfully'
        })
    } catch (err) {
        res.status(400).json({
            code: 'bad_request',
            message: err.details[0].message,
            severity: 'LOW'
        })
    }
}   

const deleteTourism = async (req, res) => {
    try {
    
        await Tourism.findByIdAndDelete(req.params.id)
        res.status(200).json({
            code: 'OK',
            message: 'Tourism deleted successfully'
        })
    } catch (err) {
        res.status(500).json({
            code: 'Internal server error',
            message: err.details[0].message,
            severity: 'LOW'
        })
    }
}


module.exports = {getTourism, getTourismById, createTourism, updateTourism, deleteTourism};

//por ultimo exportamos todo estos metodos que creamos en los controladores para ser utilizado luego en las rutas.