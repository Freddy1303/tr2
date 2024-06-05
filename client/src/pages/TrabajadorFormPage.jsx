import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { crearTrabajador, eliminarTrabajador, actualizarTrabajador, obtenerTrabajador, getAllCargo } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/TrabajadorFormPage.css';

export function TrabajadorFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [cargos, setCargos] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function cargarCargos() {
            const res = await getAllCargo();
            setCargos(res.data);
        }
        cargarCargos();
    }, []);

    useEffect(() => {
        async function cargarTrabajador() {
            if (params.id) {
                const res = await obtenerTrabajador(params.id);
                setValue('dni', res.data.dni);
                setValue('nombre', res.data.nombre);
                setValue('edad', res.data.edad);
                setValue('direccion', res.data.direccion);
                setValue('telefono', res.data.telefono);
                setValue('cargo', res.data.cargo.id);  // Asegúrate de que 'res.data.cargo.id' sea el ID del cargo
            }
        }
        cargarTrabajador();
    }, [params.id, setValue]);

    const onSubmit = handleSubmit(async data => {
        const payload = {
            ...data,
            cargo: data.cargo  // Asegúrate de que 'data.cargo' sea el ID del cargo
        };

        console.log("Payload:", payload);  // Para depuración

        try {
            if (params.id) {
                await actualizarTrabajador(params.id, payload);
            } else {
                await crearTrabajador(payload);
            }
            navigate('/trabajador');
        } catch (error) {
            console.error("Error al enviar el formulario:", error.response.data);
        }
    });

    return (
        <div className="form-container">
            <form onSubmit={onSubmit} className="trabajador-form">
                <label htmlFor="dni">DNI</label>
                <input type="text" id="dni" placeholder="DNI" {...register("dni", { required: true })} />
                {errors.dni && <span className="error-message">El DNI es necesario!!!</span>}

                <label htmlFor="nombre">NOMBRE</label>
                <input type="text" id="nombre" placeholder="NOMBRE" {...register("nombre", { required: true })} />
                {errors.nombre && <span className="error-message">El NOMBRE es necesario!!!</span>}

                <label htmlFor="edad">EDAD</label>
                <input type="number" id="edad" placeholder="EDAD" {...register("edad", { required: true })} />
                {errors.edad && <span className="error-message">La EDAD es necesaria!!!</span>}

                <label htmlFor="direccion">DIRECCIÓN</label>
                <input type="text" id="direccion" placeholder="DIRECCIÓN" {...register("direccion", { required: true })} />
                {errors.direccion && <span className="error-message">La DIRECCIÓN es necesaria!!!</span>}

                <label htmlFor="telefono">TELÉFONO</label>
                <input type="text" id="telefono" placeholder="TELÉFONO" {...register("telefono", { required: true })} />
                {errors.telefono && <span className="error-message">El TELÉFONO es necesario!!!</span>}

                <label htmlFor="cargo">CARGO</label>
                <select id="cargo" {...register("cargo", { required: true })}>
                    {cargos.map(cargo => (
                        <option key={cargo.id} value={cargo.id}>{cargo.nombre}</option>
                    ))}
                </select>
                {errors.cargo && <span className="error-message">El CARGO es necesario!!!</span>}

                <button type="submit" className="submit-button">GUARDAR</button>
                {params.id && (
                    <button type="button" className="delete-button" onClick={async () => {
                        const aceptado = window.confirm('Estas seguro?');
                        if (aceptado) {
                            await eliminarTrabajador(params.id);
                            navigate('/trabajador');
                        }
                    }}>ELIMINAR</button>
                )}
            </form>
        </div>
    );
}