const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const app = express ();
const path = require('path');

const port = 3000
const uri = "mongodb+srv://repaso:repaso@cluster01.psj55im.mongodb.net/?retryWrites=true&w=majority"

const userRoutes = require("./src/routers/routerUser")

//middleware
app.use('/api', userRoutes); 
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API")
})


// mongodb connection
mongoose.
    connect(uri)
    .then(() =>console.log("BD Connect"))
    .catch ((error) => console.error(error))


app.get ( '/', (req, res) =>{
res.send('Servidor funcionando');
});

app.listen(port, () => {
console.log('servidor escuchando en el puerto 3000');
});
