import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Task } from '@/types/Task'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])

  const addTask = (text: string): void => {
    const newTask: Task = {
      id: Date.now(),
      text,
      done: false,
    }

    tasks.value.push(newTask)
    saveTasks()
  }

  const toggleDone = (id: number): void => {
    const task = tasks.value.find((t) => t.id === id)
    if (task) task.done = !task.done
    saveTasks()
  }

  const removeTask = (id: number): void => {
    tasks.value = tasks.value.filter((t) => t.id !== id)
    saveTasks()
  }

  const saveTasks = (): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value))
  }

  const loadTasks = (): void => {
    const data = localStorage.getItem('tasks')
    if (data) tasks.value = JSON.parse(data)
  }

  return{
    tasks,
    addTask,
    toggleDone,
    removeTask,
    loadTasks
  }
})
