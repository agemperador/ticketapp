const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const cors = require('cors')

const pathData = 'C:/Users/Agustin/Desktop/Ticketapp/ticketapp/data/data.json'


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


const Queue = require('../models/queue.model')




app.put('/queue', (req, res) => {

    console.log('Update');
});



module.exports = app;