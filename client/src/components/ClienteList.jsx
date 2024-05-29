import {useEffect, useState} from 'react';
import {getAllCliente} from '../api/cliente.api';
import {ClienteCard} from '../components/ClienteCard';

export function ClienteList() {

    const [clientes, setCliente] = useState([]);

useEffect(() => {
    
    async function cargarCliente(){
        const res = await getAllCliente();
        setCliente(res.data);
        console.log(res);
    }
    cargarCliente();

}, []);

  return <div>
    {clientes.map(cliente=>(
        <ClienteCard key={cliente.id} cliente={cliente}/>
    ))}
  </div>;
  
}

