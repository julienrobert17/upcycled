import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Header, Footer } from '../../components';
import { useAuth } from '../../../AuthContext';
import './index.css' 

const Design = () => {
  const { userName } = useAuth();

  const [articles, setArticles] = useState({
    articleNumber: '',
    plan: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('articleNumber', articles.articleNumber);
    formData.append('plan', articles.plan);

    alert("Merci pour votre don !!")
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'plan') {
      setArticles({ ...articles, [name]: files[0] });
    } else {
      setArticles({ ...articles, [name]: value });
    }
  };

  useEffect(() => {
  }, []);

  return (
    <div className='home'>
      <Header userName={userName}/>
      <div className='home'>
        <div style={{marginTop: 80}}>
          <div className="pageTitle">
            <div className="pageTitleText">
              <p className="title">Commencez à designer.</p>
              <p className="title"> Libérez votre créativité.</p>
            </div>
          </div>
          <div>
            <form className='formStyle center' onSubmit={handleSubmit}>
              <div className="dons-container">
                <div className='fieldsHolder'>
                  <label className='label' htmlFor="articleNumber">Nom de la création :</label>
                  <input
                    type="text"
                    id="articleNumber"
                    name="articleNumber"
                    value={articles.articleNumber}
                    onChange={handleInputChange}
                    required
                    style={{width: '250px'}}
                  />
                </div>
                <div className='fieldsHolder'>
                  <label className='label' htmlFor="plan">Votre création :</label>
                  <input
                    type="file"
                    id="plan"
                    name="plan"
                    accept="image/*"
                    onChange={handleInputChange}
                    required
                    style={{width: '250px'}}
                  />
                </div>
                <p style={{fontSize: 10}}>Vos propositions seront vérifiées puis soumis à la communauté</p>
              </div>
              <button style={{width: 200, marginTop: 50}} className='center' type="submit">Lancez vous !</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Design;
