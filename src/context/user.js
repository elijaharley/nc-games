import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const loggedIn = !!user.username;

  return (
    <UserContext.Provider value={{ user, setUser, loggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
