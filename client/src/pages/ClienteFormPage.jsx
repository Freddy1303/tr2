import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {crearCliente, eliminarCliente, actualizarCliente, obtenerCliente} from '../api/cliente.api';
import {useNavigate, useParams} from 'react-router-dom';

export function ClienteFormPage() {

    const {register, handleSubmit, formState:{errors}, setValue} = useForm();

    const navegar = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {     
        if(params.id){
            await actualizarCliente(params.id, data)
        }else{
            await crearCliente(data);            
        } 
        navegar('/cliente');    
    });

    useEffect(() => {
        async function cargarCliente(){
            if (params.id) {
                const res = await obtenerCliente(params.id)
                setValue('dni', res.data.dni)
                setValue('nombre', res.data.nombre)
                setValue('direccion', res.data.direccion)
                setValue('telefono', res.data.telefono)
                setValue('estado', res.data.estado)
            }
        }
        cargarCliente()
    }, []);

    return (
      <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="DNI" {...register("dni", {required: true})} />
            {errors.dni && <span>El DNI es necesario!!!</span>}
            <input type="text" placeholder="NOMBRE" {...register("nombre", {required: true})} />
            {errors.nombre && <span>El NOMBRE es necesario!!!</span>}
            <input type="text" placeholder="DIRECCION" {...register("direccion", {required: true})} />
            {errors.direccion && <span>La DIRECCION es necesaria!!!</span>}
            <input type="text" placeholder="TELEFONO" {...register("telefono", {required: true})} />
            {errors.telefono && <span>El TELEFONO es necesario!!!</span>}
            <input type="text" placeholder="ESTADO" {...register("estado", {required: true})} />   
            {errors.estado && <span>El ESTADO es necesario!!!</span>} 
            
            <button>GUARDAR</button>
        </form>

        {
            params.id && <button onClick={async () =>{  
                const aceptado = window.confirm('Estas seguro?')
                if(aceptado){
                    await eliminarCliente(params.id);
                    navegar('/cliente');
                }
            }}>ELIMINAR</button>
        }      

      </div>
    );
}
  
  
  