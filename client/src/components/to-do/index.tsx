import { Link } from 'wouter'
import { IToDo } from 'interfaces'

export const ToDo: React.FC<IToDo> = ({
  id,
  toDo,
  handleDeleteToDo
}) => (
  <li className="p-5 border">
    <h5 className="text-lg mb-5">{ toDo }</h5>
    <div className="flex flex-col gap-2">
      <button className="bg-red-400 text-white w-full p-2" onClick={ () => handleDeleteToDo(id) } type="button">Delete To do</button>
      <Link href={ `/${id}` }>
        <button className="inline-block text-center w-full cursor-pointer text-sm bg-gray-400 p-2 text-white hover:bg-gray-600">View To do</button>
      </Link>
      <Link href={ `/edit/${id}` }>
        <button className="inline-block text-center w-full cursor-pointer text-sm bg-green-400 p-2 text-white hover:bg-green-600">Edit To do</button>
      </Link>
    </div>
  </li>
)
