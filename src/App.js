
import './App.css';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'
import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProtectedRoute'

const App = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/products" component={Product} />
      <ProtectedRoute exact path="/products/:id" component={ProductDetails} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />

    </Switch>

  </BrowserRouter>

)

export default App;
