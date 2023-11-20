import type { PropsWithChildren } from 'react'

export const ListToDo: React.FC<PropsWithChildren> = ({ children }) => (
  <ul className="list-none flex flex-col justify-center items-start">
    { children }
  </ul>
)
