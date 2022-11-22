import {  useContext ,useEffect} from "react"
import React from 'react'
import { Welcome } from "./Welcome"
import { AuthContext } from "../context/AuthContext"
import GraphClient from "../config/GraphClient"
import { LogginComponents } from "./LogginComponents"


export const LogginAzure = () => {
 

 const {logged,singIn,singOut}=useContext(AuthContext);
 const getUser = async ()=>{
    const userInfo = await GraphClient.getUSer();
 }
 useEffect(() => {
   getUser();
 },[])
 
  return (

    <div>
        {logged
        ?<Welcome/>
        : <LogginComponents/>
    }
      
    </div>
  )
  
}

