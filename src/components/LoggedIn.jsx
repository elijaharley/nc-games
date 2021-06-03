import React from 'react';
import UserContext from '../context/user';
import { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import Login from './Login';

const LoggedIn = () => {
  const userObj = useContext(UserContext);
  let user = '';
  if (userObj.loggedIn === true) {
    user = userObj.user.username;
  } else {
    <Login />;
  }

  return <Navbar>Logged in as {`${user}`}</Navbar>;
};

export default LoggedIn;
