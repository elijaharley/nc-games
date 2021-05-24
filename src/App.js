import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Nav />
        <Switch>
          <Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
