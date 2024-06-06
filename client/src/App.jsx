import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { TrabajadorPage } from './pages/TrabajadorPage';
import { TrabajadorFormPage } from './pages/TrabajadorFormPage';
import { Navigation } from './components/Navigation';
import { LoginPage } from './pages/LoginPage';

function App() {
    return (
        <Router>
            <Main />
        </Router>
    );
}

function Main() {
    const location = useLocation();
    const showNavigation = location.pathname !== '/login';

    return (
        <div>
            {showNavigation && <Navigation />}
            <Routes>
                <Route path="/" element={<Navigate to="/trabajador" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/trabajador" element={<TrabajadorPage />} />
                <Route path="/trabajador-create" element={<TrabajadorFormPage />} />
                <Route path="/trabajador/:id" element={<TrabajadorFormPage />} />
            </Routes>
        </div>
    );
}

export default App;
