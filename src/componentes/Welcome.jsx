import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'



export const Welcome = () => {
 

    const {signOut,user}=useContext(AuthContext);
    console.log(user);
  return (
    <div>
    <h1>esta autenticado</h1>
    <h2>bienvenido : {user?.displayName}</h2>
    <p>su rol es : {user?.jobTitle}</p>
    <p> mail : {user?.mail}</p>
    <button className='btn btn-primary' onClick={signOut}>cerrar sesion</button>
  
    </div>
  )
    
}
