import type { FC, FormEvent } from 'react'
import { navigate } from 'wouter/use-location'
import { useToDo } from 'contexts'
import { IForm, IToDo } from 'interfaces'

export const Form: FC<IForm> = ({ id, isEdit }) => {
  const {
    handleAddToDo,
    handleEditToDo,
    getToDo
  } = useToDo()
  const ID = Number(id)
  const TO_DO = getToDo(ID)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const TARGET = e.target as HTMLFormElement
    const DATA = Object.fromEntries(new FormData(TARGET))
    const TO_DO = DATA as unknown as IToDo

    if (isEdit) {
      handleEditToDo({
        ...TO_DO,
        id: ID
      })

      navigate('/')
    } else {
      handleAddToDo({
        ...TO_DO,
        id: Number(new Date())
      })
    }
  }

  return (
    <form action={ isEdit ? 'PUT' : 'GET' } className="w-full flex justify-center items-center flex-col mb-7" onSubmit={ handleSubmit }>
      <input type="text" placeholder={ isEdit ? TO_DO?.toDo : 'Eat' } name="toDo" className="w-[60rem] p-4 text-xl border mb-5" required />
      <button type="submit" className="bg-purple-500 text-white text-2xl px-5 py-2 rounded hover:bg-purple-800 hover:shadow-lg">{ isEdit ? 'Edit' : 'Create' }</button>
    </form>
  )
}
