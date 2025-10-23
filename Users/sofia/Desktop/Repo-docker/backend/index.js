// Este es tu archivo /backend/index.js

const express = require('express');
const app = express();
const PORT = 3001; // El puerto en el que correrá el backend

// Una ruta de prueba
app.get('/api', (req, res) => {
    res.json({ message: 'Hola desde el servidor backend!' });
});

app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});