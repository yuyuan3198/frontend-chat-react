import React from 'react'
import { AuthProvider } from './AuthContext'

export const AppState = ({children}) => {
  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  );
}

