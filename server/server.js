const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.PUBLIC_URL);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/router')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.' + process.env.MAIL_SERVICE + process.env.EX,
}));

console.log('process.env.EX2', process.env.EX2)
console.log('process.env.EX2', process.env.EX)

module.exports = app;
