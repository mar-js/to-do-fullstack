import { Link } from 'wouter'
import { IToDoButton } from 'interfaces'

export const ToDoButton: React.FC<IToDoButton> = ({
  url,
  classN,
  children,
  handleClick
}) => (
  <Link href={ url || '' }>
    <button className={ `text-center w-full cursor-pointer text-md p-2 text-white ${classN}` } onClick={ handleClick } type="button">{ `${children} To do` }</button>
  </Link>
)
