import { Link } from 'wouter'
import { IToDo } from 'interfaces'
import { ToDoButton } from 'components'

export const ToDo: React.FC<IToDo> = ({
  id,
  toDo,
  handleDeleteToDo
}) => (
  <li className="p-5 border">
    <h5 className="text-2xl mb-5">{ toDo }</h5>
    <div className="flex flex-col gap-2">
      <ToDoButton color="red" handleClick={ () => handleDeleteToDo(id) }>Delete</ToDoButton>
      <Link href={ `/${id}` }>
        <ToDoButton color="gray">View</ToDoButton>
      </Link>
      <Link href={ `/edit/${id}` }>
        <ToDoButton color="green">Edi</ToDoButton>
      </Link>
    </div>
  </li>
)
