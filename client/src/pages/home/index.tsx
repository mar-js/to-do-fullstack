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

export const Home: React.FC = () => {
  const {
    youWillDo,
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
            { youWillDo?.map(toDo => <ToDo key={ toDo.id } { ...toDo } />) }
          </ListToDo>
        </Section>
      </Main>
    </>
  )
}
