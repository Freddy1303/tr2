import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulando el inicio de sesión exitoso
        console.log('Iniciando sesión con:', { username, password });
        
        // Aquí puedes enviar la solicitud de inicio de sesión al backend
        // Si el inicio de sesión es exitoso, redirige al usuario a la página de trabajador
        navigate('/trabajador');
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default LoginPage;
