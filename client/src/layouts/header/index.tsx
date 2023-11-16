import type { PropsWithChildren } from 'react'

export const Header: React.FC<PropsWithChildren> = ({ children }) => (
  <header className="m-auto pt-10 text-center underline">
    { children }
  </header>
)
