import type { PropsWithChildren } from 'react'

export const Main: React.FC<PropsWithChildren> = ({ children }) => (
  <main className="w-full h-auto">
    { children }
  </main>
)
