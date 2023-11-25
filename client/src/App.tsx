import { useToDo } from 'contexts'
import { ToDoProvider } from 'providers'
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
    <ToDoProvider>
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
    </ToDoProvider>
  )
}
