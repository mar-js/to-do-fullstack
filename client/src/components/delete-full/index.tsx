import { IDeleteFull } from 'interfaces'

export const DeleteFull: React.FC<IDeleteFull> = ({ handleDeleteFull }) => (
  <button className="outline outline-red-700 p-3 text-xl text-red-700 hover:bg-red-700 hover:text-white hover:outline-none mx-4 my-8" onClick={ handleDeleteFull } type="button">Delete All</button>
)
