import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// TODO: Build redux template
// Install external dependecias, axios?
// Install Icons package
// Config tailwind
// Setup Firebase
// Write readme
// Linter
// Protects branches

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
