const express = require('express');

const app = express();

app.use(require('../controllers/ticketbook.controller'));

app.use(require('../controllers/users.controller'))

module.exports = app;