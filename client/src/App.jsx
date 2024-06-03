import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import { TrabajadorPage } from './pages/TrabajadorPage';
import { TrabajadorFormPage } from './pages/TrabajadorFormPage';
import {Navigation} from './components/Navigation'

function App() {
  return(
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/trabajador"/>} />
        
        
        <Route path="/trabajador" element={<TrabajadorPage/>} />  
        <Route path="/trabajador-create" element={<TrabajadorFormPage/>} />
        <Route path="/trabajador/:id" element={<TrabajadorFormPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;