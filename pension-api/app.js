// Set up express app
//=========================================================
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// set up app
const app = express();
// log requests to console
app.use(logger('dev'));

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes for API
//=========================================================
require('./api/routes')(app);
<<<<<<< HEAD
app.get('*', (req, res) => res.status(200).send({
    message: "Pension API running",
=======
app.get('*', (req, res) => res.status(400).send({
    message: "Bad request.",
>>>>>>> front-end
}));

module.exports = app;
