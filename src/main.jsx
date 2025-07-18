
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'


// Use it inside your MainApp component
createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
