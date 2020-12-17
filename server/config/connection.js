const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const cors = require('cors')
const mongoose = require('mongoose')

const pathData = 'C:/Users/Agustin/Desktop/Ticketapp/ticketapp/data/data.json'


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


module.exports = app;