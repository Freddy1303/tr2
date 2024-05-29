import axios from 'axios';

const clienteApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tr2/api/v1/tr2/'
})

//MOSTRAR
export const getAllCliente = () => clienteApi.get('/');
//OBTENER DATOS
export const obtenerCliente = (id) => clienteApi.get('/' + id + '/');
//CREAR
export const crearCliente = (cliente) => clienteApi.post('/', cliente);
//ELIMINAR
export const eliminarCliente = (id) => clienteApi.delete('/' + id);
//ACTUALIZAR
export const actualizarCliente = (id, cliente) => clienteApi.put('/' + id + '/', cliente);