import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import App from '../App';
import { LogginComponents } from '../componentes/LogginComponents';
import { Welcome } from '../componentes/Welcome';


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="form"/>}/>
        <Route path="login" element={<LogginComponents/>}/>
        <Route path='home' element ={<Welcome/>}/>
        <Route path='form' element={<App/>}/>
    </Routes>
  );
}
