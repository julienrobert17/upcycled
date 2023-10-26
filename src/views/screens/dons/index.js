import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Header } from '../../components';
import { useAuth } from '../../../AuthContext';
import './index.css' 

const Dons = () => {
  
  const { isLoggedIn, login, userName } = useAuth();

  useEffect(() => {

    const nameFromParams = userName;
    const defaultUserName = '';
    const name = nameFromParams || defaultUserName;
  }, []);

  return (
      <div className='home'>
        <Header userName={userName}/>

        <p>hellooo</p>

      </div>   
  );
};

export default Dons;
