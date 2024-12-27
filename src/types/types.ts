export type Category = 'inside' | 'outside'

export interface Task {
  id: string
  name: string
  audioPath: string
  category: Category
  icon: string // Emoji or icon component name
}

export interface WheelSection {
  id: string
  rotation: number
  task: Task
}
