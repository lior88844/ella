import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Task } from '../types/types'
import { tasks } from '../data/tasks'
import { storage } from '../utils/storage'
import { TaskModal } from './TaskModal'
import bcgHome from '../assets/images/bcg-home.png'
import bcgOutside from '../assets/images/bcg-outside.png'

const COLORS = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#96CEB4',
  '#FFEEAD',
  '#D4A5A5',
  '#9B59B6',
  '#3498DB',
  '#E67E22',
  '#1ABC9C',
]

// Get the base URL from Vite's environment variables

export const WheelPage: React.FC = () => {
  const navigate = useNavigate()
  const [spinning, setSpinning] = useState(false)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [rotation, setRotation] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>()
  const startTimeRef = useRef<number>()
  const targetRotationRef = useRef(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const category = storage.getCategory()
  const filteredTasks = tasks.filter((task) => task.category === category)
  const backgroundImage = category === 'inside' ? bcgHome : bcgOutside

  const drawWheel = (currentRotation: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 2.2

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw outer yellow border
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius + 10, 0, 2 * Math.PI)
    ctx.fillStyle = '#FFD700' // Golden yellow
    ctx.fill()

    // Draw sectors
    const sectionAngle = (2 * Math.PI) / filteredTasks.length
    filteredTasks.forEach((task, index) => {
      const startAngle = index * sectionAngle + currentRotation
      const endAngle = startAngle + sectionAngle

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.closePath()

      ctx.fillStyle = COLORS[index % COLORS.length]
      ctx.fill()
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 2
      ctx.stroke()

      // Add task icon
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(startAngle + sectionAngle / 2)
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = '#ffffff'
      ctx.font = '24px Arial'
      ctx.fillText(task.icon, radius * 0.7, 0)
      ctx.restore()
    })

    // Draw center circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.1, 0, 2 * Math.PI)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2
    ctx.stroke()
  }

  const getSelectedTaskIndex = (finalRotation: number) => {
    const sectionAngle = (2 * Math.PI) / filteredTasks.length
    const normalizedRotation =
      (((finalRotation + Math.PI / 2) % (2 * Math.PI)) + 2 * Math.PI) %
      (2 * Math.PI)

    const selectedIndex =
      (filteredTasks.length - Math.floor(normalizedRotation / sectionAngle)) %
      filteredTasks.length

    return selectedIndex
  }

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp
    }

    const elapsed = timestamp - startTimeRef.current
    const duration = 5000 // 5 seconds spin

    if (elapsed < duration) {
      const progress = elapsed / duration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentRotation =
        rotation + (targetRotationRef.current - rotation) * easeOut
      setRotation(currentRotation)
      drawWheel(currentRotation)
      requestRef.current = requestAnimationFrame(animate)
    } else {
      const finalRotation = targetRotationRef.current
      setRotation(finalRotation)
      drawWheel(finalRotation)
      setSpinning(false)

      const selectedIndex = getSelectedTaskIndex(finalRotation)
      const task = filteredTasks[selectedIndex - 1]

      setTimeout(() => {
        setSelectedTask(task)
      }, 600)
    }
  }

  const spinWheel = () => {
    if (spinning) return

    setSpinning(true)
    setSelectedTask(null)
    startTimeRef.current = undefined

    // Ensure we spin at least 8 full rotations plus a random amount
    const spinCount = 8 + Math.random() * 5
    const randomAngle = Math.random() * (2 * Math.PI)
    targetRotationRef.current = rotation + spinCount * 2 * Math.PI + randomAngle

    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const size = Math.min(window.innerWidth * 0.9, 480)
      canvas.width = size
      canvas.height = size
      drawWheel(rotation)
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  // Clean up audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handleSpinAgain = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setSelectedTask(null)
  }

  const handleGoHome = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    navigate('/')
  }

  return (
    <div
      className="wheel-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <button className="back-button" onClick={handleGoHome}>
        חזור ←
      </button>

      <h1>{category === 'inside' ? 'פעילויות בבית' : 'פעילויות בחוץ'}</h1>

      <div className="arrow"></div>
      <canvas
        ref={canvasRef}
        style={{ margin: '-1.5rem auto 2rem', display: 'block' }}
      />

      <button className="spin-button" onClick={spinWheel} disabled={spinning}>
        {spinning ? 'מסתובב' : 'סובב את הגלגל'}
      </button>

      {selectedTask && (
        <TaskModal
          task={selectedTask}
          onSpinAgain={handleSpinAgain}
          onGoHome={handleGoHome}
        />
      )}
    </div>
  )
}

export default WheelPage
