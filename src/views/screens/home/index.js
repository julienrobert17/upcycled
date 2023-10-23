import React, { useState, useEffect } from 'react';
import { Post } from '../../components';
import './index.css' 

const Home = () => {
  const [designs, setDesigns] = useState([]);

  const initialDesigns = [
    { id: 1, title: 'Design 1', votes: 10, img:'https://c8.alamy.com/compfr/h403cy/fashion-design-abonnements-brouillons-still-life-la-mode-la-mode-du-design-de-l-occupation-design-de-mode-designer-designer-createur-de-mode-designer-de-mode-ebauche-dessin-de-mode-d-abonnement-de-vetements-de-croquis-de-plans-de-croquis-de-la-creativite-fantasia-ladies-fashions-de-planification-de-collecte-de-la-creation-de-la-mode-des-notes-des-echantillons-de-substances-h403cy.jpg'},
    { id: 2, title: 'Design 2', votes: 1, img:'https://c8.alamy.com/compfr/h403cy/fashion-design-abonnements-brouillons-still-life-la-mode-la-mode-du-design-de-l-occupation-design-de-mode-designer-designer-createur-de-mode-designer-de-mode-ebauche-dessin-de-mode-d-abonnement-de-vetements-de-croquis-de-plans-de-croquis-de-la-creativite-fantasia-ladies-fashions-de-planification-de-collecte-de-la-creation-de-la-mode-des-notes-des-echantillons-de-substances-h403cy.jpg'},
    { id: 3, title: 'Design 3', votes: 8, img:'https://c8.alamy.com/compfr/h403cy/fashion-design-abonnements-brouillons-still-life-la-mode-la-mode-du-design-de-l-occupation-design-de-mode-designer-designer-createur-de-mode-designer-de-mode-ebauche-dessin-de-mode-d-abonnement-de-vetements-de-croquis-de-plans-de-croquis-de-la-creativite-fantasia-ladies-fashions-de-planification-de-collecte-de-la-creation-de-la-mode-des-notes-des-echantillons-de-substances-h403cy.jpg'},
    { id: 3, title: 'Design 3', votes: 8, img:'https://c8.alamy.com/compfr/h403cy/fashion-design-abonnements-brouillons-still-life-la-mode-la-mode-du-design-de-l-occupation-design-de-mode-designer-designer-createur-de-mode-designer-de-mode-ebauche-dessin-de-mode-d-abonnement-de-vetements-de-croquis-de-plans-de-croquis-de-la-creativite-fantasia-ladies-fashions-de-planification-de-collecte-de-la-creation-de-la-mode-des-notes-des-echantillons-de-substances-h403cy.jpg'},
    { id: 3, title: 'Design 3', votes: 8, img:'https://c8.alamy.com/compfr/h403cy/fashion-design-abonnements-brouillons-still-life-la-mode-la-mode-du-design-de-l-occupation-design-de-mode-designer-designer-createur-de-mode-designer-de-mode-ebauche-dessin-de-mode-d-abonnement-de-vetements-de-croquis-de-plans-de-croquis-de-la-creativite-fantasia-ladies-fashions-de-planification-de-collecte-de-la-creation-de-la-mode-des-notes-des-echantillons-de-substances-h403cy.jpg'},
    { id: 3, title: 'Design 3', votes: 8, img:'https://c8.alamy.com/compfr/h403cy/fashion-design-abonnements-brouillons-still-life-la-mode-la-mode-du-design-de-l-occupation-design-de-mode-designer-designer-createur-de-mode-designer-de-mode-ebauche-dessin-de-mode-d-abonnement-de-vetements-de-croquis-de-plans-de-croquis-de-la-creativite-fantasia-ladies-fashions-de-planification-de-collecte-de-la-creation-de-la-mode-des-notes-des-echantillons-de-substances-h403cy.jpg'},
    { id: 3, title: 'Design 3', votes: 8, img:'https://c8.alamy.com/compfr/h403cy/fashion-design-abonnements-brouillons-still-life-la-mode-la-mode-du-design-de-l-occupation-design-de-mode-designer-designer-createur-de-mode-designer-de-mode-ebauche-dessin-de-mode-d-abonnement-de-vetements-de-croquis-de-plans-de-croquis-de-la-creativite-fantasia-ladies-fashions-de-planification-de-collecte-de-la-creation-de-la-mode-des-notes-des-echantillons-de-substances-h403cy.jpg'},
    { id: 3, title: 'Design 3', votes: 8, img:'https://c8.alamy.com/compfr/h403cy/fashion-design-abonnements-brouillons-still-life-la-mode-la-mode-du-design-de-l-occupation-design-de-mode-designer-designer-createur-de-mode-designer-de-mode-ebauche-dessin-de-mode-d-abonnement-de-vetements-de-croquis-de-plans-de-croquis-de-la-creativite-fantasia-ladies-fashions-de-planification-de-collecte-de-la-creation-de-la-mode-des-notes-des-echantillons-de-substances-h403cy.jpg'},
    { id: 3, title: 'Design 3', votes: 8, img:'https://c8.alamy.com/compfr/h403cy/fashion-design-abonnements-brouillons-still-life-la-mode-la-mode-du-design-de-l-occupation-design-de-mode-designer-designer-createur-de-mode-designer-de-mode-ebauche-dessin-de-mode-d-abonnement-de-vetements-de-croquis-de-plans-de-croquis-de-la-creativite-fantasia-ladies-fashions-de-planification-de-collecte-de-la-creation-de-la-mode-des-notes-des-echantillons-de-substances-h403cy.jpg'},
    { id: 3, title: 'Design 3', votes: 8, img:'https://c8.alamy.com/compfr/h403cy/fashion-design-abonnements-brouillons-still-life-la-mode-la-mode-du-design-de-l-occupation-design-de-mode-designer-designer-createur-de-mode-designer-de-mode-ebauche-dessin-de-mode-d-abonnement-de-vetements-de-croquis-de-plans-de-croquis-de-la-creativite-fantasia-ladies-fashions-de-planification-de-collecte-de-la-creation-de-la-mode-des-notes-des-echantillons-de-substances-h403cy.jpg'},
    { id: 3, title: 'Design 3', votes: 8, img:'https://c8.alamy.com/compfr/h403cy/fashion-design-abonnements-brouillons-still-life-la-mode-la-mode-du-design-de-l-occupation-design-de-mode-designer-designer-createur-de-mode-designer-de-mode-ebauche-dessin-de-mode-d-abonnement-de-vetements-de-croquis-de-plans-de-croquis-de-la-creativite-fantasia-ladies-fashions-de-planification-de-collecte-de-la-creation-de-la-mode-des-notes-des-echantillons-de-substances-h403cy.jpg'}
  ];

  useEffect(() => {
    setDesigns(initialDesigns);
  }, []);

  return (
    <div className='home'>
      <p>Populaires :</p>
      <div className='postCarrousel'>
       {designs?.map((design) => (
          <Post postInfo={design}/>
        ))}
      </div>
      <p>Recents :</p>
      <div className='postRecent'>
      {designs?.map((design) => (
          <Post postInfo={design}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
