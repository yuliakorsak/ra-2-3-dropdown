import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dropdown from './Dropdown.jsx'
import '../css/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dropdown />
  </StrictMode>,
)
