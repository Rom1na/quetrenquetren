import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TrenesProvider } from './componentes/TrenesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TrenesProvider>
      <App />
    </TrenesProvider>   
  </StrictMode>,
)
