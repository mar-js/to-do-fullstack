import { ToDoButton } from 'components'
import { IToDo } from 'interfaces'

export const ToDo: React.FC<IToDo> = ({
  id,
  toDo
}) => (
  <li className="p-5 border">
    <h5 className="text-2xl mb-5">{ toDo }</h5>
    <div className="flex flex-col gap-2">
      { /* NOT FUNCA DELETE  */ }
      <ToDoButton classN="bg-red-400 hover:bg-red-600">Delete</ToDoButton>
      <ToDoButton classN="bg-gray-400 hover:bg-gray-600" url={ `/${id}` }>View</ToDoButton>
      <ToDoButton classN="bg-green-400 hover:bg-green-600" url={ `/edit/${id}` }>Edit</ToDoButton>
    </div>
  </li>
)
