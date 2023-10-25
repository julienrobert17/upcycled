import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Header, Post } from '../../components';
import './index.css' 

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4500,
};

const Home = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const [designs, setDesigns] = useState([]);
  const [sortedDesigns, setSortedDesigns] = useState([]);
  const [userName, setUserName] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectImg, setselectImg] = useState(false);

  const initialDesigns = [
    { id: 1, title: 'Design de William', votes: 1250, img:'https://i.etsystatic.com/15318220/r/il/9f8f1c/3579247112/il_1588xN.3579247112_bx7e.jpg'},
    { id: 2, title: 'Design de Alexis', votes: 1440, img:'https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?auto=format&fit=crop&q=80&w=2576&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 3, title: 'Design 1', votes: 1520, img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=2610&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 4, title: 'Design 1', votes: 1370, img:'https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?auto=format&fit=crop&q=80&w=2576&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 5, title: 'Design 1', votes: 1550, img:'https://i.etsystatic.com/15318220/r/il/9f8f1c/3579247112/il_1588xN.3579247112_bx7e.jpg'},
    { id: 6, title: 'Design 1', votes: 870, img:'https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?auto=format&fit=crop&q=80&w=2576&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 7, title: 'Design 1', votes: 658, img:'https://i.etsystatic.com/15318220/r/il/9f8f1c/3579247112/il_1588xN.3579247112_bx7e.jpg'},
    { id: 8, title: 'Design 1', votes: 423, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EIWM-QUGKvjwN5YrCD5Oimq85O11SDXl6oQNbz-I0gD3B_AbZvvrS4sOpOJnLRpISc4&usqp=CAU'},
    { id: 9, title: 'Design 1', votes: 208, img:'https://i.pinimg.com/236x/96/51/cd/9651cdf9b2ba35533efadd87ecac6f2c.jpg'},
    { id: 10, title: 'Design 1', votes: 180, img:'https://i.pinimg.com/236x/1e/ce/7d/1ece7d4cd027b2a44b1088ccc9cab48d.jpg'},
    ];

  useEffect(() => {
    setDesigns(initialDesigns);
    const sortedDesigns = [...initialDesigns].sort((a, b) => b.votes - a.votes);
    setSortedDesigns(sortedDesigns);
    const nameFromParams = searchParams.get('userName');
    const defaultUserName = '';
    const name = nameFromParams || defaultUserName;
    setUserName(name);
  }, []);


  const handleImageClick = (img) => {
    setselectImg(img)
    console.log(selectImg)
    setShowImageModal(true);
  };

  const handleCloseModal = () => {
    setShowImageModal(false);
  };

  return (
      <div className='home'>
        
        <div id="SellerPromotion-react-component-c87431eb-2cd5-4181-a270-2aeab46d6db2">
          <div class="hero-block">
            <div class="hero-block__background">
              <div class="web_ui__Image__image web_ui__Image__cover web_ui__Image__scaled">
                <img src="https://static.vinted.com/assets/seller-promotion/gender_test/c/banner-wide-96cebf41372b8de2d64b7e609f0fb2d3c3084f8df0f861fa8b3782231e5c31f8.jpg" alt="" class="web_ui__Image__content"></img>
              </div>
              <div class="hero-block__overlay">
              </div>
            </div>
            <div class="container">
              <div class="hero-block__wrapper">
                <div class="web_ui__Card__card">
                  <div class="u-ui-padding-x2-large">
                    <h1 class="seller-promotion__content-title">Prêts à faire du tri dans vos placards ?</h1>
                    <div class="web_ui__Spacer__x2-large web_ui__Spacer__horizontal"></div>
                    <a style={{backgroundColor: '#488467'}} role="button" href="/member/signup?ref_url=%2Fitems%2Fnew" class="web_ui__Button__button web_ui__Button__filled web_ui__Button__default web_ui__Button__primary web_ui__Button__truncated">
                      <span class="web_ui__Button__content">
                        <span class="web_ui__Button__label">Vends maintenant</span>
                      </span></a>
                      <div class="web_ui__Spacer__medium web_ui__Spacer__horizontal"></div>
                      <a href="/how_it_works">
                        <h3 style={{color: '#488467'}} class="web_ui__Text__text web_ui__Text__subtitle web_ui__Text__left web_ui__Text__clickable" role="link" tabindex="0">Découvrir comment ça marche</h3>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Header userName={userName}/>
        <p className='title'>Les designs les plus populaires :</p>
        <Slider {...settings}>
          {sortedDesigns?.map((design) => (
            <div key={design.id} >
              <Post postInfo={design} action={() => handleImageClick(design.img)}/>
            </div>
          ))}
        </Slider>
        <p className='title'>Les designs les plus recents :</p>
        <div className='postRecent'>
          {designs?.map((design) => (
            <Post key={design.id} postInfo={design} />
          ))}
        </div>
        {showImageModal && (
          <div className="image-modal" onClick={handleCloseModal}>
            <div className="modal-content">
              <img
                src={selectImg}
                className="modal-image"
              />
            </div>
          </div>
       )}
      </div>   
  );
};

export default Home;
