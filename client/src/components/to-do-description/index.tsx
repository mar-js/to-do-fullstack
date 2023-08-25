import { IToDoDescription } from 'interfaces'

export const ToDoDescription: React.FC<IToDoDescription> = ({ title }) => (
  <article className="w-4/6 h-auto flex flex-col justify-center align-start mt-14 mx-auto">
    <h2 className="text-3xl text-center text-gray-800 my-2">{ title }</h2>
  </article>
)
