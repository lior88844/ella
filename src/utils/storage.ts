import { Category } from '../types/types'

export const StorageKeys = {
  SELECTED_CATEGORY: 'selectedCategory',
} as const

export const storage = {
  setCategory(category: Category) {
    localStorage.setItem(StorageKeys.SELECTED_CATEGORY, category)
  },

  getCategory(): Category | null {
    return localStorage.getItem(
      StorageKeys.SELECTED_CATEGORY
    ) as Category | null
  },

  clear() {
    localStorage.clear()
  },
}
