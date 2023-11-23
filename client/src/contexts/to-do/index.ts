import { createContext, useContext } from 'react'

export const ToDoModel = createContext({})
export const useToDo = () => useContext(ToDoModel)
