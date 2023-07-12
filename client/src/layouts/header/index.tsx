import type { PropsWithChildren } from 'react'

export const Header: React.FC<PropsWithChildren> = ({ children }) => (
  <header>
    { children }
  </header>
)
