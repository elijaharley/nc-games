import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import Reviews from './components/Reviews';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/reviews'>
          <Reviews />
        </Route>
        <Route exact path='/categories'>
          <Categories />
        </Route>
        <Route exact path='/users'>
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
