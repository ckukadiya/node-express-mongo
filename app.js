const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');

require('dotenv').config();
const config = require('./config');
const connection = connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

function importDir() {
    const modulesPath = __dirname + '/src/modules/';
    const folders = fs.readdirSync(modulesPath).filter(file => fs.lstatSync(modulesPath + file).isDirectory());
    folders.forEach((folder) => {
        const filePath = modulesPath + folder;
        fs.readdirSync(filePath).forEach((file) => {
            if (file.match('index.js') !== null) {
                const name = file.replace('.js', '');
                require(filePath + '/' + name)(app);
            }
        })
    });
}

function connect() {
    const options = {keepAlive: 1, useNewUrlParser: true, useUnifiedTopology: true};
    mongoose.connect(config.db, options);
    return mongoose.connection;
}

connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', importDir);

module.exports = app;
