import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../../components';
import { useAuth } from '../../../AuthContext';
import './index.css';

const Login = () => {
  const { isLoggedIn, login, userName } = useAuth();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hardcodedCredentials = {
      email: 'admin@admin',
      password: 'admin',
    };

    if (
      loginData.email === hardcodedCredentials.email &&
      loginData.password === hardcodedCredentials.password
    ) {
      login('Hugo');
      window.location.href = '/home?userName=Hugo';
    } else {
      setError('Adresse e-mail ou mot de passe incorrect.');
    }
  };

  useEffect(() => {
    console.log(isLoggedIn); 
    console.log(userName); 
  }, [isLoggedIn]);

  return (
    <div>
      <Header />
      <div className="login-container">
        {isLoggedIn ? (
          <p>Bienvenue, {userName}!</p>
        ) : (
          <div>
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit}>
              <div className='fieldsHolder'>
                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleInputChange}
                  required
                  style={{width: '250px'}}
                />
              </div>
              <div className='fieldsHolder'>
                <label htmlFor="password">Mot de passe :</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  required
                  style={{width: '250px'}}
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit">Se connecter</button>
            </form>
          </div>
        )}
      </div>
      <div className='bottom'><Footer /></div>
    </div>
  );
};

export default Login;
