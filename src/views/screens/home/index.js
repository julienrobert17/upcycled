import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Header, Post, Footer } from '../../components';
import './index.css' 
import { useAuth } from '../../../AuthContext';

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

  const { userName } = useAuth();

  const searchParams = new URLSearchParams(window.location.search);
  const [designs, setDesigns] = useState([]);
  const [sortedDesigns, setSortedDesigns] = useState([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectImg, setselectImg] = useState(false);

  const initialDesigns = [
    { id: 1, title: 'Design de William', votes: 1250, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5SldMpN-qWp4iYDXZdNP1fF_uQlSqjS1B5VdsbOhtG1v6YuIdltRkW871bzrmYdObyw&usqp=CAU'},
    { id: 2, title: 'Design de Alexis', votes: 1440, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOBGUkwcmfN4vJIBXRPZLMNJxQeC00YKj1ybIAVccCV8IE3IxKiD4jYQZ-TuknncXz5Vw&usqp=CAU'},
    { id: 3, title: 'Design 1', votes: 1520, img:'https://i.pinimg.com/originals/ed/54/29/ed542951dc73e2ef71e1e08777565802.jpg'},
    { id: 4, title: 'Design 1', votes: 1370, img:'https://img01.ztat.net/article/spp-media-p1/af9e11e14c5144288f97eb0d767dcd4f/cecbdc9f6d1a4d98a7955357ac821d0d.jpg?imwidth=1800&filter=packshot'},
    { id: 5, title: 'Design 1', votes: 1550, img:'https://i.pinimg.com/236x/69/54/bf/6954bf3d923fd43acd31df70fb094387.jpg'},
    { id: 6, title: 'Design 1', votes: 870, img:'https://i.pinimg.com/736x/30/21/1c/30211c269678c44504a1855996042a37.jpg'},
    { id: 7, title: 'Design 1', votes: 658, img:'https://i.pinimg.com/236x/86/6a/d7/866ad709a0cde2dcde755687d25c423f.jpg'},
    { id: 8, title: 'Design 1', votes: 423, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EIWM-QUGKvjwN5YrCD5Oimq85O11SDXl6oQNbz-I0gD3B_AbZvvrS4sOpOJnLRpISc4&usqp=CAU'},
    { id: 9, title: 'Design 1', votes: 208, img:'https://i.pinimg.com/236x/96/51/cd/9651cdf9b2ba35533efadd87ecac6f2c.jpg'},
    { id: 10, title: 'Design 1', votes: 180, img:'https://i.pinimg.com/236x/1e/ce/7d/1ece7d4cd027b2a44b1088ccc9cab48d.jpg'},
    ];

  useEffect(() => {
    setDesigns(initialDesigns);
    const sortedDesigns = [...initialDesigns].sort((a, b) => b.votes - a.votes);
    setSortedDesigns(sortedDesigns);

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
                    <a style={{backgroundColor: '#488467'}} role="button" href="/faire-un-don" class="web_ui__Button__button web_ui__Button__filled web_ui__Button__default web_ui__Button__primary web_ui__Button__truncated">
                      <span class="web_ui__Button__content">
                        <span class="web_ui__Button__label">Donnez maintenant</span>
                      </span></a>
                      <div class="web_ui__Spacer__medium web_ui__Spacer__horizontal"></div>
                      <a href="/instruction">
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
            <Post key={design.id} postInfo={design} action={() => handleImageClick(design.img)}/>
          ))}
        </div>

        <div style={{display: "flex", maxHeight: '500px', marginTop: '100px'}}>
          <div class="VLdlV">
            <ul>
              <li class="dMNCl">
                <h2 class="DyIbk">1</h2>
                
                <h4 class="azhe1">THE BEST DESIGNS</h4>
                <p class="bCi-8">Vote for multiple designs in one place.</p>
                <p class="bCi-8">Find the best way to make your old clothes hyper stylish and get the opinion of the whole community.</p>
              </li>

              <li class="dMNCl">
                <h2 class="DyIbk">2</h2>
                <h4 class="azhe1">THE HOTTEST PRODUCTS</h4>
                <p class="bCi-8">See what’s new and what’s trending.</p>
                <p class="bCi-8">Hit the heart to receive alerts on the latest drops from your favourite designers.</p>
              </li>

              <li class="dMNCl">
                <h2 class="DyIbk">3</h2>
                <h4 class="azhe1">THE FAIREST PRICES</h4>
                <p class="bCi-8">Buy quality products, Made In France, at the right price throughout the production chain. </p>
                <p class="bCi-8">UPC members are notified when an item goes on sale.</p>
              </li>
            </ul>
          </div>
          
          <div style={{width: '300px'}} class="FHEnn">
            <a href="/Login/">
              <div class="_5yJ8t">
                <p class="TEZra">Sign Up For Smarter Shopping</p>
                <span class="KE3Ku">Join
                  
                </span>
              </div>
            </a>
          </div>
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
       <Footer />
      </div>   
  );
};

export default Home;
