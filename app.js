const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require ("mongoose")
const app = express ();
const path = require('path');

const port = process.env.port || 3000

mongoose.
    connect(process.env.MONGODB_URI)
    .then(() =>console.log("BD Connect"))
    .catch ((error) => console.error(error))


app.get ( '/', (req, res) =>{
res.send('Servidor funcionando');
});

app.listen(port, () => {
console.log('servidor escuchando en el puerto 3000');
});
