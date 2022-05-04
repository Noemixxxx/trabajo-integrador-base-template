
const Joi = require('joi');
const Tourism = require('../models/Tourism.model');
const { tourismSchema } = require('./schemas/tourism.schema');


const getTourism = async (req, res) => {
    try {
        const tourism = await Tourism.find({})
        res.status(200).json(tourism)    
    } catch (err) {
        res.status(500).json({
            code: 'Internal server error',
            message: 'The server has encountered a situation that it does not know how to handle.',
            severity: 'LOW'
        })
    }
};

const getTourismById = async (req, res) => {
    try {
        const tourism = await Tourism.findById(req.params.id)
        res.status(200).json(tourism)
    } catch (err) {
        res.status(500).json({
            code: 'Internal server error',
            message: err.details[0].message,
            severity: 'LOW'
        })
    }
}

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
        //Arreglar bug al ingresar un ID no existente.
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