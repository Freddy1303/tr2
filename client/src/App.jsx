import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { ClientePage } from './pages/ClientePage';
import { ClienteFormPage } from './pages/ClienteFormPage';
import {Navigation} from './components/Navigation'

function App() {
  return(
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/cliente"/>} />
        <Route path="/cliente" element={<ClientePage/>} />  
        <Route path="/cliente-create" element={<ClienteFormPage/>} />
        <Route path="/cliente/:id" element={<ClienteFormPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;