import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'

const theme = createTheme({typography : {fontFamily: "Roboto, serif", allVariants:{color:"white"}}});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <Router>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Router>
    </AuthProvider>
  </React.StrictMode>,
)
