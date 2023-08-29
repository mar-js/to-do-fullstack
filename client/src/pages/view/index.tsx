import type { FC } from 'react'
import type { IView } from 'interfaces'
import { Section } from 'layouts'
import { useToDo } from 'contexts'
import { Text } from 'components'

export const View: FC<IView> = ({ id }) => {
  const { getToDo } = useToDo()
  const toDo = getToDo(Number(id))

  return (
    <Section>
      <Text>
        { toDo?.toDo }
      </Text>
    </Section>
  )
}
