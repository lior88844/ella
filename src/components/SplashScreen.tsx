import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'

interface SplashScreenProps {
  onFinish: () => void
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
      setTimeout(onFinish, 500) // Wait for fade out animation
    }, 3000) // Show splash for 3 seconds

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className={`splash-screen ${!isAnimating ? 'fade-out' : ''}`}>
      <img src={logo} alt="Logo" className="splash-logo" />
    </div>
  )
}
