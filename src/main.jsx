import { createRoot } from 'react-dom/client'
import React from 'react';
import { UserProvider } from './contexts/UserContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <UserProvider>
        <App />
    </UserProvider>
)
