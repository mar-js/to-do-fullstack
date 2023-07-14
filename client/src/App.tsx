import { useToDo } from 'contexts'
import {
  Header,
  Main,
  Section
} from 'layouts'
import {
  Form,
  ListToDo,
  Title,
  ToDo
} from 'components'

export const App: React.FC = () => {
  const { youWillDo } = useToDo()

  return (
    <>
      <Header>
        <Title />
      </Header>
      <Main>
        <Form />
        <Section>
          <ListToDo>
            { youWillDo?.map(toDo => <ToDo key={ toDo.id } { ...toDo } />) }
          </ListToDo>
        </Section>
      </Main>
    </>
  )
}
