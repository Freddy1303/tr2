import { Link } from 'react-router-dom';
import '../styles/Navigation.css'; 

export function Navigation() {
  return (
    <div className="navigation-container">  
        <h1 className="navigation-title">
          <Link to="/trabajador">Navigation</Link>
        </h1>
        
        <div className="navigation-links">
          <Link to="/trabajador-create">Crear Trabajador</Link>
          
        </div>
    </div>
  )
}
