import { useContext } from 'react';
import UserContext from '../context/user.js';
import Login from './Login';

function RequireLogin({ children }) {
  const { loggedIn } = useContext(UserContext);

  return loggedIn ? children : <Login />;
}

export default RequireLogin;
