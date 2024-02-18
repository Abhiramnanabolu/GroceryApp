import {Route, Switch, Redirect,BrowserRouter} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import ProtectedRoute from "./Components/ProtectedRoute"
import AddAddress from './Components/AddAddress'

const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/address" component={AddAddress} />
  </Switch>
  </BrowserRouter>
)
export default App