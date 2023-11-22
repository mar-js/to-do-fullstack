import type { PropsWithChildren } from 'react'

export const ListToDo: React.FC<PropsWithChildren> = ({ children }) => (
  <ul className="list-none grid grid-cols-auto gap-6">
    { children }
  </ul>
)
