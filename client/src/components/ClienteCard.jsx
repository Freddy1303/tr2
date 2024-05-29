import {useNavigate} from 'react-router-dom';

export function ClienteCard({cliente}) {

  const navegar = useNavigate()

  return (
    <div style={{background: "blue"}}
      onClick={() => {
        navegar('/cliente/' + cliente.id)
      }}
    >
        <h1>{cliente.dni}</h1>
        <p>{cliente.nombre}</p>
        <p>{cliente.direccion}</p>
        <p>{cliente.telefono}</p>
        <p>{cliente.estado}</p>
        <hr />
    </div>
  );
}
