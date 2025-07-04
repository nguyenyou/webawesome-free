import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '../../../packages/webawesome/dist/styles/themes/default.css'
import '../../../packages/webawesome/dist/styles/webawesome.css'
import '../../../packages/webawesome/dist/webawesome.loader.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
