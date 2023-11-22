import { IToDo } from 'interfaces'

export const ToDo: React.FC<IToDo> = ({ id, toDo }) => (
  <li className="p-5 border">
    <h5 className="text-lg mb-5">{ toDo }</h5>
    <a href={ `/${id}` } className="inline-block text-center w-full cursor-pointer text-sm bg-gray-400 p-2 text-white rounded hover:bg-gray-600">View To do</a>
  </li>
)
