import { useState } from 'react';
import { login } from '../api/api'; 

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      const token = response.data.token;
      // Almacena el token en el almacenamiento local
      localStorage.setItem('token', token);
      // Redirige a la página principal
      window.location.href = '/trabajador'; // Redirige a la ruta principal de tu aplicación
    } catch (error) {
      setError('Error de inicio de sesión: ' + error.response.data.error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      {error && <p>{error}</p>}
    </div>
  );
}


