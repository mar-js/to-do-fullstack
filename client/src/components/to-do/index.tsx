import { IToDo } from 'interfaces'

export const ToDo: React.FC<IToDo> = ({ id, toDo }) => (
  <li>
    <h5>{ toDo }</h5>
    <a href={ `/${id}` }>View To do</a>
  </li>
)
