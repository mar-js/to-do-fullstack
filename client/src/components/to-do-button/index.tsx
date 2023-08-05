import { IToDoButton } from 'interfaces'

export const ToDoButton: React.FC<IToDoButton> = ({ color, children }) => (
  <button className={ `text-center w-full cursor-pointer text-md bg-${color}-400 p-2 text-white hover:bg-${color}-600` } onClick={ () => handleDeleteToDo(id) } type="button">{ children }</button>
)
