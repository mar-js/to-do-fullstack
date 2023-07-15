import { useState, type PropsWithChildren } from 'react'
import { ToDoModel } from 'contexts'
import { IToDo, IToDoModel } from 'interfaces'

export const ToDoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ youWillDo, setYouWillDo ] = useState([] as IToDo[])

  const handleAddToDo = (toDo: IToDo) => {
    setYouWillDo(prev => ([ ...prev, toDo ]))
  }

  const handleDeleteToDo = (id: IToDo['id']) => {
    setYouWillDo(prev => ([ ...prev, ...prev.filter(toDo => toDo.id !== id) ]))
  }

  const VALUE: IToDoModel = {
    youWillDo,
    handleAddToDo,
    handleDeleteToDo
  }

  return (
    <ToDoModel.Provider value={ VALUE }>
      { children }
    </ToDoModel.Provider>
  )
}
