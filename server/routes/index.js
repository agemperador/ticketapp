const express = require('express');

const app = express();

app.use(require('../controllers/sucursal.controller'))

//app.use(require('../controllers/ticketbook.controller'));





module.exports = app;