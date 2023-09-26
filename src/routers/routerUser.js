const express = require('express');
const userSchema = require ("../models/user.js")

const router = express.Router();


//ruta para crear un usario lista
router.post('/users', (req, res) =>{
    const user = userSchema(req.body);
    user
        .save()
        .than((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

module.exports = router;