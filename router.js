const express = require('express');
const app = express();

const helloNode = require('./routes/helloNode');

app.use('/', helloNode);

module.exports = app;
