import { ToDoButton } from 'components'
import { IToDo } from 'interfaces'

export const ToDo: React.FC<IToDo> = ({
  id,
  toDo,
  handleDeleteToDo
}) => (
  <li className="p-5 border">
    <h5 className="text-2xl mb-5">{ toDo }</h5>
    <div className="flex flex-col gap-2">
      <ToDoButton color="red" handleClick={ () => handleDeleteToDo(id) }>Delete</ToDoButton>
      <ToDoButton color="gray" url={ `/${id}` }>View</ToDoButton>
      <ToDoButton color="green" url={ `/edit/${id}` }>Edi</ToDoButton>
    </div>
  </li>
)
