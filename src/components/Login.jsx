import React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../context/user';

function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>username:</label>
      <input
        type='text'
        id='username'
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input type='submit' value='submit' />
    </form>
  );
}

export default Login;
