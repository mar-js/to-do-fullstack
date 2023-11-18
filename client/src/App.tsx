import { Header, Main } from 'layouts'
import { Form, Title } from 'components'

export const App: React.FC = () => (
  <>
    <Header>
      <Title />
    </Header>
    <Main>
      <Form />
    </Main>
  </>
)
