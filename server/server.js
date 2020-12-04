require('./config/config');
const express = require('express');
const app = express();
const path = require('path')
const index = require('./routes/index.js');
const mongoose = require('mongoose')

app.use(index);


app.use(express.static(path.resolve(__dirname, '../public')));

console.log(path.resolve(__dirname, '../public'));



mongoose.connect('mongodb+srv://stormit:LMwQxtYUpv7cvD3w@cluster0-n6xvx.mongodb.net/Ticketapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err, client) => {

    if (err) throw err;
    console.log('Base de datos online');
});

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto: ', process.env.PORT);
});