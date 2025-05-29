import './styles/Form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "./imagenes/Log.png"
import promocion from "./imagenes/promocion.jpg"
import fondo from "./imagenes/fondo.jpg"

function Form({ callback }) {
    const [correo, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const goTo = useNavigate();

    const validateUser = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://back-alpha-two.vercel.app/v1/signos/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo, password }),
            });

            const data = await response.json();
            if (response.ok) {
                callback(data._id, data.role);
                data.role === 'user' ? goTo('/home') : goTo('/adminHome');
            } else {
                alert(data.message || 'Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al intentar iniciar sesión:', error);
            alert('Hubo un problema con el servidor. Intenta de nuevo más tarde.');
        }
    };

    
    const handleAddUserClick = () => {
        goTo('/addUser');
    };

    
    return (

        <div className='container2'>
            
            

            <div className="container">
                
            <div className="container3"></div>

            {/*<img src={logo} alt='Logo' className="logo" /> */} 
            
                <div className="form-container">
                    <form onSubmit={validateUser}>
                        <h1 id="txtBienvenida">Bienvenidos a InstagasLC</h1>
                        <h4 className="txt">correo electronico</h4>
                        <input type="text" className="entry" onChange={(e) => setUsername(e.target.value)} required /><br />
                        <h4 className="txt">Contraseña</h4>
                        <input type="password" className="entry" onChange={(e) => setPassword(e.target.value)} required /><br />
                        <input type="submit" value="Ingresar" id="btnEnviar" />
                        <button type="button" id="btnAddUser" onClick={handleAddUserClick}>Crear Nuevo Usuario</button>
                    </form>
                </div>
        
                
            </div>


        </div>
        
    );
}

export default Form;
