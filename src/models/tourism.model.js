// el modelo se crea como un espesi de esquema pero este solamente tiene las estructuras
// que debe de tener el objeto al momento de la peticion de crear o de actualizar
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// este modelo en este caso va a tener por ejemplo el campo (name) sera un tipo string y requerido y asi cn cada uno de los otros
const TourismSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: Array,
        required: true
    },
    location: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    
    }

})

const Tourism = mongoose.model('Tourism', TourismSchema)
module.exports = Tourism
// la diferencia que tiene el modelo y el esquema, el esquema son con mas reglas, se encargan de 
// filtrar (ejemplo: campo nombre tenga una longitud maximo y una minima) cosa que con el modelo
// no  tiene esos parametros y el esquema se usa para comparra estos objetos al momentos de hacer peticiones
// en cambio el modelo solo es la forma que debe tener.