import React from 'react'
import { Task } from '../types/types'
import { useNavigate } from 'react-router-dom'

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

  const handleGoHome = () => {
    onGoHome()
    navigate(baseUrl || '/')
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>הפעילות שלך</h2>
        <div className="task-content">
          <span className="task-icon">{task.icon}</span>
          <p>{task.name}</p>
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
