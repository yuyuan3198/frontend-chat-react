import React,{useState , useEffect ,useRef} from "react";
import socket from "./socket";
import axios from "axios";
import '../App.css';

const url = "http://localhost:4000/chat/add";

socket.on('connect',()=>{console.log("conectado");});
socket.on('disconnect',()=>{console.log("desconectado");});

const Chat = ({nombre})=>{
  const [mensaje , setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  
  useEffect(()=>{
        socket.on('mensajes',mensaje =>{
            setMensajes([...mensajes,mensaje]);
        })
        return () => {socket.off()}
  },[mensajes]) 



  const divRef = useRef(null);
  useEffect(()=>{
    divRef.current.scrollIntoView({behavior : 'smooth'})
  })

  const submit =(e) =>{
    e.preventDefault();

    socket.emit('mensaje', nombre, mensaje);
   

      //peticion para guardar los mensajes
      axios.post(url ,{
        nombre: nombre,
        msg : mensaje
  
      })
      
      setMensaje('');
  
}


    return (

        <div className="container" id="contenedor">
      <div className="row mt-3">

        <div className="col-md-6 offset-md-3 ">
          <div className="card">
              <div className="card-header">
                  <h4> Chateemos!</h4>
                </div>
                <div id="chat" className="card-body">
                    

               {mensajes.map((e,i) => <div key={i}> <div>{e.nombre}</div> <div className={`col-md-6 mt-2 bg-primary text-light border-primary rounded-1 `}>{e.mensaje}</div> </div>)}
               <div  ref={divRef}/>

                </div>
                <form id="form-mensaje" className="card-footer" onSubmit={submit}>
                  <div className="input-group">
                      <input type="text" id="mensaje" className="form-control" placeholder="Escriba su mensaje" value={mensaje} onChange={e =>setMensaje(e.target.value)}/>
                    <div className="input-group-append ms-2">
                     <button type="submit" className="btn btn-warning">Enviar  </button>
                    </div>
                  </div>
                    
                </form>
          </div>
          
      </div>

      </div>

        
    </div>

    )
}

export default Chat; 