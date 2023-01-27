const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { auth } = require('../middlewares/authMiddleware');

const routes = require('../routes');

function config(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(auth);
    app.use(cors());
    app.use(cookieParser());
    app.use(routes);
}

module.exports = config;