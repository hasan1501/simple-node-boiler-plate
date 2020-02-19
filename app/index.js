const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config()

const app = express();

// Add routers here
const accountRouter = require('./api/account');

// Add all the domains that you would like to whitelist
var whitelist = ['https://google.com']

app.use(cors({origin: whitelist, credentials: true}))

app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

app.use(bodyParser.json());

// Plug routers here
app.use('/accounts', accountRouter);

app.use(function (err, req, res, next) {
    let status_code = err.status_code || 500;

    res
        .status(status_code)
        .json({type: 'error', message: err.reason})
})

module.exports = app;