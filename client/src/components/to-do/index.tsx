import { IToDo } from 'interfaces'
import { Link } from 'wouter'

export const ToDo: React.FC<IToDo> = ({
  id,
  toDo,
  handleDeleteToDo
}) => (
  <li className="p-5 border">
    <h5 className="text-2xl mb-5">{ toDo }</h5>
    <div className="flex flex-col gap-2">
      <button className="text-white py-2 font-semibold bg-red-400 hover:bg-red-600" onClick={ () => handleDeleteToDo(id) }>Delete</button>
      <Link href={ `/to-do/${id}` }>
        <button className="text-white py-2 font-semibold bg-gray-400 hover:bg-gray-600">View</button>
      </Link>
      <Link href={ `/to-do/${id}/edit` }>
        <button className="text-white py-2 font-semibold bg-green-400 hover:bg-green-600">Edit</button>
      </Link>
    </div>
  </li>
)
