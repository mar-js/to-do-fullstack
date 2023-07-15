import { FormEvent } from 'react'
import { useToDo } from 'contexts'
import { IToDo } from 'interfaces'

export const Form: React.FC = () => {
  const { handleAddToDo } = useToDo()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const TARGET = e.target as HTMLFormElement
    const DATA = Object.fromEntries(new FormData(TARGET))
    const TO_DO = DATA as unknown as IToDo

    handleAddToDo({
      ...TO_DO,
      id: 111
    })
  }

  return (
    <form action="GET" className="w-full flex justify-center items-center flex-col mb-7" onSubmit={ handleSubmit }>
      <input type="text" placeholder="Eat" name="toDo" className="w-[60rem] p-4 text-xl border mb-5" />
      <button type="submit" className="bg-purple-500 text-white text-2xl px-5 py-2 rounded hover:bg-purple-800 hover:shadow-lg">Create</button>
    </form>
  )
}
