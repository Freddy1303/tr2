import { useEffect, useState } from 'react';
import { getAllTrabajador } from '../api/api';
import { TrabajadorCard } from '../components/TrabajadorCard';
import '../styles/TrabajadorList.css';

export function TrabajadorList() {
  const [trabajadores, setTrabajadores] = useState([]);
  const [error, setError] = useState(null);
  const [filtroActivo, setFiltroActivo] = useState(false);
  const [filtroInactivo, setFiltroInactivo] = useState(false);

  useEffect(() => {
    async function cargarTrabajadores() {
      try {
        const response = await getAllTrabajador();
        setTrabajadores(response.data); // Actualiza el estado con los datos recibidos
      } catch (error) {
        console.error('Error al cargar los trabajadores:', error);
        setError('Error al cargar los trabajadores. Por favor, inténtalo de nuevo más tarde.');
      }
    }
    cargarTrabajadores();
  }, []);

  // Filtrar trabajadores activos si el filtro está activo
  const trabajadoresFiltrados = trabajadores.filter(trabajador => {
    if (filtroActivo && filtroInactivo) {
      return true; // Si ambos filtros están activos, no se aplica ningún filtro
    } else if (filtroActivo) {
      return trabajador.estado;
    } else if (filtroInactivo) {
      return !trabajador.estado;
    } else {
      return true; // Si ningún filtro está activo, se muestran todos los trabajadores
    }
  });

  return (
    <div className="trabajador-list-container">
      <h2>Lista de Trabajadores</h2>
      <div className="filtros-container">
        <div className="filtro-activo">
          <input
            type="checkbox"
            checked={filtroActivo}
            onChange={() => setFiltroActivo(!filtroActivo)}
          />
          <label>Mostrar solo activos</label>
        </div>
        <div className="filtro-inactivo">
          <input
            type="checkbox"
            checked={filtroInactivo}
            onChange={() => setFiltroInactivo(!filtroInactivo)}
          />
          <label>Mostrar solo inactivos</label>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
      {!error && (
        <table className="trabajador-list-table">
          <thead>
            <tr>
              <th>DNI</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Cargo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {trabajadoresFiltrados.map(trabajador => (
              <TrabajadorCard key={trabajador.id} trabajador={trabajador} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
