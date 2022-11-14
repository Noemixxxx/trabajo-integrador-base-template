
const Joi = require('joi')

const tourismSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(), 
    description: Joi.string().min(3).max(250).required(),
    
    imgUrl: Joi.array().items(Joi.string().required()).required(),

    location: Joi.object({
       
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),

       
    })
})

module.exports = { tourismSchema }
//luego todo esto se exporta para luego ser usados en los controladores 
//otra parte que es muy oarecido al esquema, es el modelo 