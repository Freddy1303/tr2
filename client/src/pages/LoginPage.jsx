import { useState } from 'react';
import { login } from '../api/api';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Por favor, ingrese un usuario y contraseña válidos');
      return;
    }

    setLoading(true);
    try {
      const response = await login(username, password);
      console.log('Response from login:', response);
      if (response && response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/trabajador');
      } else {
        setError('Error de inicio de sesión: respuesta inválida');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      setError('Error de inicio de sesión: ' + error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
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
        {loading && <p className="loading-message">Cargando...</p>}
      </div>
    </div>
  );
}
