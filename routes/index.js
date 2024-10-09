const routes = require('express').Router();
const path = require('path');

// Ruta para renderizar la vista EJS
routes.get('/', (req, res) => {
    res.render('index'); // Cambia a res.render() para usar EJS
});

module.exports = routes;
