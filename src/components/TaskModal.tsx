import React, { useRef } from 'react'
import { Task } from '../types/types'
import { useNavigate } from 'react-router-dom'
import { FaVolumeUp } from 'react-icons/fa'

interface TaskModalProps {
  task: Task
  onSpinAgain: () => void
  onGoHome: () => void
}

export const TaskModal: React.FC<TaskModalProps> = ({
  task,
  onSpinAgain,
  onGoHome,
}) => {
  const navigate = useNavigate()
  const baseUrl = import.meta.env.BASE_URL
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleGoHome = () => {
    onGoHome()
    navigate(baseUrl || '/')
  }

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    const audio = new Audio(task.audioPath)
    audioRef.current = audio

    audio.addEventListener('error', (e) => {
      console.error('Error loading audio:', e)
    })

    audio.play().catch((error) => {
      console.error('Error playing audio:', error)
    })
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>הפעילות שלך</h2>
        <div className="task-content">
          <span className="task-icon">{task.icon}</span>
          <p>{task.name}</p>
          <button
            onClick={playAudio}
            className="audio-button"
            aria-label="Play audio"
          >
            <FaVolumeUp className="volume-icon" />
          </button>
        </div>
        <div className="modal-buttons">
          <button className="modal-button spin-again" onClick={onSpinAgain}>
            סיבוב נוסף
          </button>
          <button className="modal-button go-home" onClick={handleGoHome}>
            דף הבית
          </button>
        </div>
      </div>
    </div>
  )
}
