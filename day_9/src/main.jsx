import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ImageRotator from './ImageRotator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ImageRotator/>
  </StrictMode>,
)
