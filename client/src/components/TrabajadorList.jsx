// TrabajadorList.jsx
import { useEffect, useState } from 'react';
import { getAllTrabajador } from '../api/api';
import { TrabajadorCard } from '../components/TrabajadorCard';
import '../styles/TrabajadorList.css';

export function TrabajadorList() {
  const [trabajadores, setTrabajadores] = useState([]);

  useEffect(() => {
    async function cargarTrabajadores() {
      try {
        const response = await getAllTrabajador();
        setTrabajadores(response.data); // Actualiza el estado con los datos recibidos
      } catch (error) {
        console.error('Error al cargar los trabajadores:', error);
      }
    }
    cargarTrabajadores();
  }, []);

  return (
    <div className="trabajador-list-container">
      <h2>Lista de Trabajadores</h2>
      <table className="trabajador-list-table">
        <thead>
          <tr>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {trabajadores.map(trabajador => (
            <TrabajadorCard key={trabajador.id} trabajador={trabajador} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
