import { createContext, useContext } from 'react'
import { IToDoModel } from 'interfaces'

export const ToDoModel = createContext({} as IToDoModel)
export const useToDo = () => useContext(ToDoModel)
