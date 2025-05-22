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

// Endpoint para obtener todos los tutores
app.get('/api/tutores', (req, res) => {
  db.query('SELECT * FROM tutores', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log('Servidor backend corriendo en puerto 3001');
});