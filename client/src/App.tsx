import { useToDo } from 'contexts'
import {
  Header,
  Main,
  Section
} from 'layouts'
import {
  DeleteFull,
  Form,
  ListToDo,
  Title,
  ToDo
} from 'components'

export const App: React.FC = () => {
  const {
    youWillDo,
    handleDeleteToDo,
    handleDeleteFull
  } = useToDo()

  return (
    <>
      <Header>
        <Title />
      </Header>
      <Main>
        <Form />
        { youWillDo.length > 10 && <DeleteFull handleDeleteFull={ handleDeleteFull } /> }
        <Section>
          <ListToDo>
            { youWillDo?.map(toDo => <ToDo key={ toDo.id } { ...toDo } handleDeleteToDo={ handleDeleteToDo } />) }
          </ListToDo>
        </Section>
      </Main>
    </>
  )
}
