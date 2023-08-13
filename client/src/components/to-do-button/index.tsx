import { Link } from 'wouter'
import { IToDoButton } from 'interfaces'

export const ToDoButton: React.FC<IToDoButton> = ({
  url,
  color,
  children,
  handleClick
}) => (
  <Link href={ url || '' }>
    <button className={ `text-center w-full cursor-pointer text-md bg-${color}-400 p-2 text-white hover:bg-${color}-600` } onClick={ handleClick } type="button">{ `${children} To do` }</button>
  </Link>
)
