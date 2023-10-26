import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Footer, Header } from '../../components';
import { useAuth } from '../../../AuthContext';
import './index.css' 

const Dons = () => {
  
  const { userName, login } = useAuth();

  const [articles, setArticles] = useState({
    articleNumber: '',
    poids: '',
  });

  const handleSubmit = async (e) => {
    alert("Merci pour votre don !!")
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticles({ ...articles, [name]: value });
  };

  useEffect(() => {

    const nameFromParams = userName;
    const defaultUserName = '';
    const name = nameFromParams || defaultUserName;
  }, []);

  return (
      <div className='home'>
        <Header userName={userName}/>

        <div className='home'>
          <div style={{marginTop: 80}}>

            <div className="pageTitle">
              <div className="pageTitleText">
                <p className="title">Commencez à donner.</p>
                <p className="title"> C'est très simple.</p>
              </div>
            </div>

            <div>
              <form className='formStyle center' onSubmit={handleSubmit}>
                
                <div className="dons-container">
                  <div className='fieldsHolder'>
                    <label className='label' htmlFor="articleNumber">Nombre d'article :</label>
                    <input
                      type="text"
                      id="articleNumber"
                      name="articleNumber"
                      value={articles.articleNumber}
                      onChange={handleInputChange}
                      required
                      style={{width: '250px'}}/>

                  </div>
                  <div className='fieldsHolder'>
                    <label className='label' htmlFor="poids">Poids :</label>
                    <input
                      type="text"
                      id="poids"
                      name="poids"
                      placeholder='en gramme'
                      value={articles.poids}
                      onChange={handleInputChange}
                      required
                      style={{width: '250px'}}
                    />
                  </div>

                  <p style={{fontSize: 10}}>Seul les articles composés à 100% de polyester sont acceptés.</p>
                </div>

                <button style={{width: 200, marginTop: 50}} className='center' type="submit">Donnez maintenant !</button>
              </form>
            </div>

          </div>
        </div>

        <Footer/>
      </div>   
  );
};

export default Dons;
