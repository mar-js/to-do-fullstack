import { Route } from 'wouter'
import { Home } from 'pages'
import { Header } from 'layouts'
import { Title } from 'components'

export const App: React.FC = () => {
  return (
    <>
      <Header>
        <Title />
      </Header>
      <Route path="/">
        <Home />
      </Route>
    </>
  )
}
