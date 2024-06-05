// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TrabajadorPage } from './pages/TrabajadorPage';
import { TrabajadorFormPage } from './pages/TrabajadorFormPage';
import { Navigation } from './components/Navigation';
import LoginPage from './pages/LoginForm'; // Importa el componente de inicio de sesión

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige a la página de inicio de sesión */}
                <Route path="/login" element={<LoginPage />} /> {/* Ruta para la página de inicio de sesión */}
                <Route path="/trabajador" element={<TrabajadorPage />} />
                <Route path="/trabajador-create" element={<TrabajadorFormPage />} />
                <Route path="/trabajador/:id" element={<TrabajadorFormPage />} />
            </Routes>
        </Router>
    );
}

export default App;
