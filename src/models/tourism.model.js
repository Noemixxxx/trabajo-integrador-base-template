const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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