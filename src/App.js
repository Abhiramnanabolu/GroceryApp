import {Route, Switch,BrowserRouter} from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import ProtectedRoute from "./Components/ProtectedRoute"
import AddAddress from './Components/AddAddress'
import CategoryProducts from './Components/CategoryProducts'
import Profile from './Components/Profile'
import Cart from './Components/Cart'


const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/address" component={AddAddress} />
    <ProtectedRoute exact path="/category/:category" component={CategoryProducts} />
    <ProtectedRoute exact path="/profile" component={Profile} />
    <ProtectedRoute exact path="/cart" component={Cart} />
  </Switch>
  </BrowserRouter>
)
export default App