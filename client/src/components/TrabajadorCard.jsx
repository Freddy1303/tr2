import { useNavigate } from 'react-router-dom';
import '../styles/TrabajadorCard.css';

export function TrabajadorCard({ trabajador }) {
  const navegar = useNavigate();

  return (
    <tr onClick={() => navegar('/trabajador/' + trabajador.id)} className="trabajador-card">
      <td>{trabajador.dni}</td>
      <td>{trabajador.nombre}</td>
      <td>{trabajador.edad}</td>
      <td>{trabajador.direccion}</td>
      <td>{trabajador.telefono}</td>
      <td>{trabajador.cargo_nombre}</td> 
    </tr>
  );
}
