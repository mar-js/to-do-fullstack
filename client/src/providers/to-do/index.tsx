import {
  useState,
  PropsWithChildren,
  useEffect
} from 'react'
import { ToDoModel } from 'contexts'
import { IToDo, IToDoModel } from 'interfaces'

export const ToDoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const youWillDoStorage = localStorage.getItem('youWillDo') || '[]'
  const [ youWillDo, setYouWillDo ] = useState(JSON.parse(youWillDoStorage) as IToDo[])

  const handleAddToDo = (toDo: IToDo) => {
    setYouWillDo(prev => ([ ...prev, toDo ]))
  }

  const handleEditToDo = (toDo: IToDo) => {
    setYouWillDo(prev => prev.map(tDo => tDo.id === toDo.id ? toDo : tDo))
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

  const getTitleToDo = (id: IToDo['id']) => {
    const TO_DO = getToDo(id)

    if (!TO_DO) return 'Not found'

    const { toDo } = TO_DO

    return toDo
  }

  useEffect(() => {
    localStorage.setItem('youWillDo', JSON.stringify(youWillDo))
  }, [ youWillDo ])

  const VALUE: IToDoModel = {
    youWillDo,
    handleAddToDo,
    handleEditToDo,
    handleDeleteToDo,
    handleDeleteFull,
    getToDo,
    getTitleToDo
  }

  return (
    <ToDoModel.Provider value={ VALUE }>
      { children }
    </ToDoModel.Provider>
  )
}
