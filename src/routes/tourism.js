const express = require('express');
const res = require('express/lib/response');
const { getTourism, getTourismById, createTourism, updateTourism, deleteTourism } = require('../controllers/tourism.controller');
const router = express.Router();
//COMPLETE the router
router.get('/tourism',getTourism );
router.get('/tourism/:id', getTourismById );
router.post('/tourism', createTourism )
router.patch('/tourism/:id', updateTourism )
router.delete('/tourism/:id', deleteTourism )

 
module.exports = router;
