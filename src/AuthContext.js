import React, { createContext, useContext, useEffect, useState } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(''); 

  useEffect(() => {
    let userName = reactLocalStorage.get('userName');

    if(userName) {
      setUserName(userName);
      setIsLoggedIn(true);
    }
  }, [])

  const login = (username) => {
    setUserName(username);
    reactLocalStorage.set('userName', username);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    reactLocalStorage.remove('userName');
    setUserName('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
