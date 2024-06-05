import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/tr2/api/v1/';

const api = axios.create({
    baseURL: baseURL
});

// Log any error responses
api.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error.response);
        return Promise.reject(error);
    }
);

export const getAllURLs = async () => {
    try {
        const response = await axios.get(baseURL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las URL de Django:', error);
        throw error;
    }
};

export const getAllCargo = () => api.get('cargos/');
export const obtenerCargo = (id) => api.get('cargos/' + id + '/');
export const crearCargo = (cargo) => api.post('cargos/', cargo);
export const eliminarCargo = (id) => api.delete('cargos/' + id);
export const actualizarCargo = (id, cargo) => api.put('cargos/' + id + '/', cargo);

export const getAllTrabajador = () => api.get('trabajadores/');
export const obtenerTrabajador = (id) => api.get('trabajadores/' + id + '/');
export const crearTrabajador = (trabajador) => api.post('trabajadores/', trabajador);
export const eliminarTrabajador = (id) => api.delete('trabajadores/' + id);
export const actualizarTrabajador = (id, trabajador) => api.put('trabajadores/' + id + '/', trabajador);
