import React from 'react';
import './index.css';
import { useAuth } from '../../../AuthContext';

const Header = ({ userName, showDeconnect }) => {

  const { logout } = useAuth();

  function logoutUser() {
    logout();
    window.location.href = '/home';
  }

  return (
    <header className="header">
      <div className="logo">Upcycled Couture</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Accueil</a></li>
          <li className="nav-item"><a href="/creer-mon-design">Créer mon design</a></li>
          <li className="nav-item"><a href="/faire-un-don">Faites un dons</a></li>
          {
          userName ? 
            (
              <li className="nav-item custom-li"><a href="/profile">{userName}</a></li>
            ) : 
            showDeconnect ? 
              (
                <li onClick={logoutUser} className="nav-item custom-li"><a>Déconnexion</a></li>
              ) : 
              (
                <li className="nav-item"><a href="/Login">Connexion</a></li>
              )
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
