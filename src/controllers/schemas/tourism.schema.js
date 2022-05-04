const Joi = require('joi')

const tourismSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(250).required(),
    
    imgUrl: Joi.array().items(Joi.string().required()).required(),

    location: Joi.object({
        //Cuando le envio un string lo toma como numeros, ver video de Marcos, ahi explica porque pasa
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),

       
    })
})

module.exports = { tourismSchema }