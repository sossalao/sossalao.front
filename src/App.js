import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard'
import Employes from './pages/Employes'
import Procedures from './pages/Procedures'
import Products from './pages/Products'
import Commission from './pages/Commission'
import './global.css'

const App = () => (


  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <RoutesPrivate path="/" exact component={Home} />
        <RoutesPrivate path="/Dashboard" exact component={Dashboard} />
        <RoutesPrivate path="/Employes" exact component={Employes} />
        <RoutesPrivate path="/Procedures" exact component={Procedures} />
        <RoutesPrivate path="/Products" exact component={Products} />
        <RoutesPrivate path="/Commission" exact component={Commission} />
      </Switch>
    </StoreProvider>
  </Router>

)

export default App;