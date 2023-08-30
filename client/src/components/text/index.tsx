import type { FC, PropsWithChildren } from 'react'

export const Text: FC<PropsWithChildren> = ({ children }) => (
  <p className="text-2xl text-gray-400 mt-5">{ children }</p>
)
