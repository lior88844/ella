import React from 'react'
import { Task } from '../types/types'

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
          <button className="modal-button go-home" onClick={onGoHome}>
            דף הבית
          </button>
        </div>
      </div>
    </div>
  )
}
