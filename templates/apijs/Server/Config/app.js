// modules for express server
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Database modules
const mongoose = require('mongoose');
const db = require('./db');

mongoose.connect(db.localURI);

// DB Connection Events
mongoose.connection.on('connected', () =>{
    console.log('Connected to MongoDB');
});

mongoose.connection.on('disconnected', () =>{
    console.log('Disconnected from MongoDB');
});

const indexRouter = require('../Routes/index');

let app = express();

// middleware modules
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/', indexRouter);

module.exports = app;
