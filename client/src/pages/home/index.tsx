import { useToDo } from 'contexts'
import { Main, Section } from 'layouts'
import {
  DeleteFull,
  Form,
  ListToDo,
  ToDo
} from 'components'

export const Home: React.FC = () => {
  const {
    youWillDo,
    handleDeleteToDo,
    handleDeleteFull
  } = useToDo()

  return (
    <Main>
      <Form />
      { youWillDo.length > 10 && <DeleteFull handleDeleteFull={ handleDeleteFull } /> }
      <Section>
        <ListToDo>
          { youWillDo?.map(toDo => <ToDo key={ toDo.id } { ...toDo } handleDeleteToDo={ handleDeleteToDo } />) }
        </ListToDo>
      </Section>
    </Main>
  )
}
