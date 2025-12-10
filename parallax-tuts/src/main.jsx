import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
// 🚨 ADD THIS IMPORT

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    {/* 🚨 WRAP THE APP IN THE PROVIDER */}
    
      <App/>
  </StrictMode>,
)