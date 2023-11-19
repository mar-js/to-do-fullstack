import type { PropsWithChildren } from 'react'

export const Section: React.FC<PropsWithChildren> = ({ children }) => (
  <section className="w-full h-full p-4">
    { children }
  </section>
)
