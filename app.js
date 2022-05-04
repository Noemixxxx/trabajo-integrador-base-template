const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const Router = require('./src/routes/tourism');
const app = express();
const config = require('config');
const mongoose = require('mongoose');
const mongoConnectionString = (config.get('database.mongodb.connectionString'))
const cors = require("cors")

mongoose.connect(mongoConnectionString, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => console.log('connected to MONGODB')).catch((err) => {throw(err)})

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//complete with your resource
app.use('/', Router);


module.exports = app;

