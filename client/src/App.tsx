import { Route, Switch } from 'wouter'
import {
  Edit,
  Home,
  View
} from 'pages'
import { Header } from 'layouts'
import { Title } from 'components'

export const App: React.FC = () => (
  <>
    <Header>
      <Title />
    </Header>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/to-do/:id">
        { ({ id }) => <View id={ id } /> }
      </Route>
      <Route path="/to-do/:id/edit">
        { ({ id }) => <Edit id={ id } /> }
      </Route>
    </Switch>
  </>
)
