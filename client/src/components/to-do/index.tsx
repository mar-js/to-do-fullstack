import { IToDo } from 'interfaces'

export const ToDo: React.FC<IToDo> = ({
  id,
  toDo
}) => (
  <li className="p-5 border">
    <h5 className="text-2xl mb-5">{ toDo }</h5>
    <div className="flex flex-col gap-2">
      <button className="text-white py-2 font-semibold bg-red-400 hover:bg-red-600">Delete</button>
      <button className="text-white py-2 font-semibold bg-gray-400 hover:bg-gray-600">View</button>
      <button className="text-white py-2 font-semibold bg-green-400 hover:bg-green-600">Edit</button>
    </div>
  </li>
)
