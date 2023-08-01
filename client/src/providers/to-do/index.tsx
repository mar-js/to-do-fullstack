import { useState, type PropsWithChildren } from 'react'
import { ToDoModel } from 'contexts'
import { IToDo, IToDoModel } from 'interfaces'

export const ToDoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ youWillDo, setYouWillDo ] = useState([] as IToDo[])

  const handleAddToDo = (toDo: IToDo) => {
    setYouWillDo(prev => ([ ...prev, toDo ]))
  }

  const handleDeleteToDo = (id: IToDo['id']) => {
    setYouWillDo(prev => prev.filter(toDo => toDo.id !== id))
  }

  const handleDeleteFull = () => {
    const CONFIRM = confirm('Are you sure you want to delete everything?')

    if (!CONFIRM) return null

    return setYouWillDo([])
  }

  const getToDo = (id: IToDo['id']) => {
    return youWillDo.find(toDo => toDo.id === id && toDo)
  }

  const VALUE: IToDoModel = {
    youWillDo,
    handleAddToDo,
    handleDeleteToDo,
    handleDeleteFull,
    getToDo
  }

  return (
    <ToDoModel.Provider value={ VALUE }>
      { children }
    </ToDoModel.Provider>
  )
}
