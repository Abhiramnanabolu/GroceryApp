import {Route, Switch, Redirect,BrowserRouter} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import ProtectedRoute from "./Components/ProtectedRoute"
import AddAddress from './Components/AddAddress'
import CategoryProducts from './Components/CategoryProducts'

const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/address" component={AddAddress} />
    <ProtectedRoute exact path="/category/:category" component={CategoryProducts} />
  </Switch>
  </BrowserRouter>
)
export default App