import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/user';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import Reviews from './components/Reviews';
import Users from './components/Users';
import ReviewsById from './components/ReviewsById';
import SingleCategory from './components/SingleCategory';
//import CommentsByReviewId from './components/CommentsByReviewId';
//import RequireLogin from './components/RequireLogin';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <UserProvider>
          {/* <RequireLogin> */}
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/reviews'>
            <Reviews />
          </Route>
          <Route exact path='/reviews/:review_id'>
            <ReviewsById />
          </Route>
          {/* <Route exact path='/reviews/:review_id/comments'>
            <CommentsByReviewId />
          </Route> */}
          <Route exact path='/categories'>
            <Categories />
          </Route>
          <Route exact path='/categories/:category'>
            <SingleCategory />
          </Route>
          <Route exact path='/users'>
            <Users />
          </Route>
          {/* </RequireLogin> */}
        </UserProvider>
      </Switch>
    </Router>
  );
}

export default App;
