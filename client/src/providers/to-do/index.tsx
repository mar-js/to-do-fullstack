import type { PropsWithChildren } from 'react'
import { ToDoModel } from 'contexts'

export const ToDoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const VALUE = {}

  return (
    <ToDoModel.Provider value={ VALUE }>
      { children }
    </ToDoModel.Provider>
  )
}
