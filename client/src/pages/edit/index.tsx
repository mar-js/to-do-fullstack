import type { FC } from 'react'
import { Section } from 'layouts'
import { Form } from 'components'
import { IEdit } from 'interfaces'

export const Edit: FC<IEdit> = ({ id }) => (
  <Section>
    <Form id={ Number(id) } isEdit />
  </Section>
)
