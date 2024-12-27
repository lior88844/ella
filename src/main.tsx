import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { HomePage } from './components/HomePage'
import WheelPage from './components/WheelPage'
import { SplashScreen } from './components/SplashScreen'
import './styles/main.scss'

// Get the base URL from Vite's environment variables
const baseUrl = import.meta.env.BASE_URL

const App = () => {
  const [showSplash, setShowSplash] = useState(true)

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />
  }

  return (
    <Router basename={baseUrl}>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wheel" element={<WheelPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
