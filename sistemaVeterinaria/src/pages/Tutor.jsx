import React, { useEffect, useState } from 'react';
import axios from 'axios';

const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
  fontFamily: 'Arial, sans-serif',
  marginTop: '20px'
};

const thStyle = {
  background: '#e2efda',
  color: '#215732',
  border: '1px solid #b7b7b7',
  padding: '8px',
  fontWeight: 'bold'
};

const tdStyle = {
  border: '1px solid #b7b7b7',
  padding: '8px',
  background: '#fff'
};

const rowHover = {
  background: '#f2f2f2'
};

const Tutor = () => {
  const [tutores, setTutores] = useState([]);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/tutores')
      .then(response => setTutores(response.data))
      .catch(error => console.error('Error al obtener tutores:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Tutores</h2>
      <div style={{overflowX: 'auto'}}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Nombre</th>
              <th style={thStyle}>Apellido</th>
              <th style={thStyle}>DNI</th>
              <th style={thStyle}>Teléfono</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Dirección</th>
            </tr>
          </thead>
          <tbody>
            {tutores.map((tutor, idx) => (
              <tr
                key={tutor.id_tutor}
                style={hoveredRow === idx ? rowHover : {}}
                onMouseEnter={() => setHoveredRow(idx)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={tdStyle}>{tutor.id_tutor}</td>
                <td style={tdStyle}>{tutor.nombre}</td>
                <td style={tdStyle}>{tutor.apellido}</td>
                <td style={tdStyle}>{tutor.dni}</td>
                <td style={tdStyle}>{tutor.telefono}</td>
                <td style={tdStyle}>{tutor.email}</td>
                <td style={tdStyle}>{tutor.direccion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tutor;
