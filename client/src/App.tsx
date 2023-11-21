import {
  Header,
  Main,
  Section
} from 'layouts'
import {
  Form,
  ListToDo,
  Title
} from 'components'

export const App: React.FC = () => (
  <>
    <Header>
      <Title />
    </Header>
    <Main>
      <Form />
      <Section>
        <ListToDo>
          ..
        </ListToDo>
      </Section>
    </Main>
  </>
)
