const express = require('express');
const path = require('path');

const app = express();

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configuración del puerto
app.set('PORT', process.env.PORT || 3000);

// Configuración de la vista EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Asegúrate de establecer EJS como motor de plantillas

// Ruta para la API (no es común usar la URL completa aquí)
app.get('/api', (req, res) => {
    res.json({ message: 'Respuesta desde la API' });
});

// Usar las rutas definidas en routes/index.js
app.use('/', require('./routes/index'));

// Iniciar el servidor
app.listen(app.get('PORT'), () => {
    console.log(`Server listening at Port ${app.get('PORT')}`);
});
