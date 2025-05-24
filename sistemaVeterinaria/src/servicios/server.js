const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'ndt782a2',
  database: 'veterinaria'
});

// Verificar conexión
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});



// Empleados
app.get('/api/empleados', (req, res) => {
  db.query('SELECT * FROM empleados', (err, results) => {
    if (err) return res.status(500).json({
      error: err
    });
    res.json(results);
  });
});

// Historial clínico
app.get('/api/historial_clinico', (req, res) => {
  db.query('SELECT * FROM historial_clinico', (err, results) => {
    if (err) return res.status(500).json({
      error: err
    });
    res.json(results);
  });
});

// Mascotas
app.get('/api/mascotas', (req, res) => {
  db.query('SELECT * FROM mascotas', (err, results) => {
    if (err) return res.status(500).json({
      error: err
    });
    res.json(results);
  });
});

// Turnos
app.get('/api/turnos', (req, res) => {
  db.query('SELECT * FROM turnos', (err, results) => {
    if (err) return res.status(500).json({
      error: err
    });
    res.json(results);
  });
});

// Tutores
app.get('/api/tutores', (req, res) => {
  db.query('SELECT * FROM tutores', (err, results) => {
    if (err) return res.status(500).json({
      error: err
    });
    res.json(results);
  });
});

// Vacunas
app.get('/api/vacunas', (req, res) => {
  db.query('SELECT * FROM vacunas', (err, results) => {
    if (err) return res.status(500).json({
      error: err
    });
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log('Servidor backend corriendo en puerto 3001');
});