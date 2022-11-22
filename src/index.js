import React from 'react';
import ReactDOM from 'react-dom/client';


import {MsalProvider} from '@azure/msal-react';
import msalInstance from './config/config';

import {AppState} from './context/AppState';
import { AppRouter } from './routes/AppRouter';
import {BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <MsalProvider instance={msalInstance}>
   
    <AppState>
      
      <AppRouter/>
      
    
    </AppState>
 {/*    
 <App/>  */}
 
  </MsalProvider>
  </BrowserRouter>
 
  
);


