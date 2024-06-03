import {Link} from 'react-router-dom';

export function Navigation() {
  return (
    <div>  
        <Link to="/trabajador">
            <h1>Navigation</h1>
        </Link>
        
        <Link to="/trabajador-create">Crear Trabajador</Link>
    </div>
  )
}

