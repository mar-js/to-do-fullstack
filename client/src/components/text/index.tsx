import type { FC, PropsWithChildren } from 'react'

export const Text: FC<PropsWithChildren> = ({ children }) => (
  <p className="text-4xl text-gray-500 mt-5">{ children }</p>
)
