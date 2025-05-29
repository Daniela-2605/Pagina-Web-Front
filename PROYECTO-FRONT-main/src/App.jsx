import './App.css';
import Form from './components/Form';
import Home from './components/home';
import UserHome from './components/UserHome';
import AdminHome from './components/AdminHome';
import ChangePassword from './components/ChangePassword';
import AddUser from './components/addUser';
import Admin from './components/admin'; // Importar el nuevo componente
import PaginaInstalacion from './components/paginaInstalacion';
import Mantenimiento from './components/mantenimiento';
import Fugas from './components/fugas';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { useState } from 'react';

function App() {
  // Estado para almacenar el usuario (user o admin) y el tipo de persona
  const [user, setUser] = useState(null);
  const [personaType, setPersonaType] = useState(''); // Nuevo estado para tipo de persona

  // Callback para actualizar el usuario y tipo de persona desde el formulariooo
  const handleLogin = (userType, personaType) => {
    setUser(userType);
    setPersonaType(personaType); // Almacena el tipo de persona seleccionado
  };

  return (  
    <BrowserRouter>
      <Routes>

<Route index element={<Home user={user} personaType={personaType}/>} />

<Route index element={<Form callback={handleLogin}/>}></Route> 

<Route path="/Form" element={<Form callback={handleLogin} />} />

<Route index element={<Form callback={handleLogin}/>}></Route>
{/* Se pasan tanto el usuario como el tipo de persona a UserHome */}
<Route path='/home' element={<Home user={user} personaType={personaType}/>} />
      
        <Route path='/userHome' element={<UserHome user={user} personaType={personaType}/>}></Route>
        {/* Solo se pasa el usuario a AdminHome */}
        <Route path='/adminHome' element={<AdminHome user={user}/>}></Route>
        {/* Nueva ruta para el cambio de contraseña */}
        <Route path='/changePassword' element={<ChangePassword user={user} />}></Route>
        {/* Nueva ruta para agregar usuario */}
        <Route path='/addUser' element={<AddUser />}></Route> {/* Añadir la nueva ruta */}
        {/* Nueva ruta para ingresar como admin */}
        <Route path='/admin' element={<Admin callback={handleLogin}/>}></Route> {/* Añadir la nueva ruta */}

        <Route path="/paginaInstalacion" element={<PaginaInstalacion />} />
        <Route path="/mantenimiento" element={<Mantenimiento/>} />
        <Route path="/fugas" element={<Fugas/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
