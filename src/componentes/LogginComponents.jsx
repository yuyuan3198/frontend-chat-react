
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'



export const LogginComponents = () => {
    const {singIn}=useContext(AuthContext)
  return (
    <div>
        <button 
        className="btn btn-primary"
        onClick={singIn}
        >ingresar</button>
    </div>
  )
}
