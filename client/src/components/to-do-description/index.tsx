import { Link } from 'wouter'
import { IToDoDescription } from 'interfaces'

export const ToDoDescription: React.FC<IToDoDescription> = ({ title }) => (
  <article className="w-full h-auto flex flex-col justify-center items-center mt-24">
    <Link href="/">
      <b className="cursor-pointer text-md text-gray-500">Back</b>
    </Link>
    <h2 className="text-2xl text-gray-800 my-2">{ title }</h2>
  </article>
)
