import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Category } from '../types/types'
import { storage } from '../utils/storage'
import homePageImage from '../assets/images/home-page.png'
import { FaHome } from 'react-icons/fa'
import { FaTree } from 'react-icons/fa'

export const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const baseUrl = import.meta.env.BASE_URL

  const handleCategorySelect = (category: Category) => {
    storage.setCategory(category)
    navigate(baseUrl ? `${baseUrl}wheel` : '/wheel')
  }

  return (
    <div className="home-page">
      <img src={homePageImage} alt="Logo" className="home-page-image" />
      <div className="home-page-title">איפה בא לי לשחק?</div>
      <div className="button-container">
        <button
          className="category-button inside"
          onClick={() => handleCategorySelect('inside')}
        >
          <FaHome className="inside-icon home-page-icon" />
          בבית
        </button>
        <button
          className="category-button outside"
          onClick={() => handleCategorySelect('outside')}
        >
          <FaTree className="outside-icon home-page-icon" />
          בחוץ
        </button>
      </div>
    </div>
  )
}
