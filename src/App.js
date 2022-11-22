
import './App.css';

import socket from './componentes/socket';  
import "bootstrap/dist/css/bootstrap.min.css";
import React ,{useState} from 'react';
import Chat from './componentes/Chat';




function App() {
 const [nombre , setNombre  ] = useState("");
 const [correo , setCorreo] = useState("");
 const [registrado , setRegistrado] = useState(false);

 const registrar =(e)=>{
  e.preventDefault();
  if(nombre && correo !== ""){
    setRegistrado(true);
    socket.emit('conectado',console.log("hola desde el cliente")) 
  }else {
    alert("Por favor llene todos los campos")
  }
 }

  return (
    <div className="App body">
      <nav className="navbar navbar-light bg-warning">
        <a  className = "navbar-brand mx-auto" href="/">Yuyuan's chat</a>
    </nav>
      {
        !registrado &&
          <div className="card col-md-4 mt-5 mx-auto ">
          <form onSubmit={registrar}>
            <label className='mb-1 mx-1'>Ingrese su nombre</label>
            <input className='form-control mb-1' value={nombre} onChange={e => setNombre(e.target.value)}></input>
    
            <label className='mb-1 mx-1'> Ingrese su correo</label>
            <input className='form-control' type ="email" value={correo} onChange={e => setCorreo(e.target.value)}></input>
            <div className='boton'>
            <button className='btn btn-warning mt-2 mb-2'> Ingresar </button>
            </div>
            
          </form>
    
          </div>
      }

      {
        registrado &&

        <Chat nombre={nombre}/>
      }  
    </div>
  );
}

export default App;
