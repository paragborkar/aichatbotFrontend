import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router} from 'react-router-dom'

const theme = createTheme({typography : {fontFamily: "Roboto, serif", allVariants:{color:"white"}}});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Router>
  </React.StrictMode>,
)
