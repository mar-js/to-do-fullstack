import { Link } from 'wouter'
import { IToDoDescription } from 'interfaces'

export const ToDoDescription: React.FC<IToDoDescription> = ({ title }) => (
  <article className="w-4/6 h-auto flex flex-col justify-center align-start mt-14 mx-auto">
    <Link href="/">
      <span className="w-24 cursor-pointer text-center text-xl bg-gray-500 text-white py-2 hover:bg-gray-600">Back</span>
    </Link>
    <h2 className="text-3xl text-center text-gray-800 my-2">{ title }</h2>
  </article>
)
