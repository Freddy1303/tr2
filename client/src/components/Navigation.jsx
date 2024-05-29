import {Link} from 'react-router-dom';

export function Navigation() {
  return (
    <div>  
        <Link to="/cliente">
            <h1>Navigation</h1>
        </Link>
        <Link to="/cliente-create">Create Cliente</Link>
    </div>
  )
}

