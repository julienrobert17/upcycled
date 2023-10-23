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
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4500,
};

const Home = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const [designs, setDesigns] = useState([]);
  const [sortedDesigns, setSortedDesigns] = useState([]);
  const [userName, setUserName] = useState("");
  

  const initialDesigns = [
    { id: 1, title: 'Design 1', votes: 1250, img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=2610&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 2, title: 'Design 1', votes: 1440, img:'https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?auto=format&fit=crop&q=80&w=2576&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 3, title: 'Design 1', votes: 1520, img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=2610&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 4, title: 'Design 1', votes: 1370, img:'https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?auto=format&fit=crop&q=80&w=2576&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 5, title: 'Design 1', votes: 1550, img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=2610&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 6, title: 'Design 1', votes: 870, img:'https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?auto=format&fit=crop&q=80&w=2576&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 7, title: 'Design 1', votes: 658, img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=2610&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 8, title: 'Design 1', votes: 423, img:'https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?auto=format&fit=crop&q=80&w=2576&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 9, title: 'Design 1', votes: 208, img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=2610&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 10, title: 'Design 1', votes: 180, img:'https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?auto=format&fit=crop&q=80&w=2576&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
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

  return (
      <div className='home'>
        <Header userName={userName}/>
        <p className='title'>{userName}</p>
        <p className='title'>Les designs les plus populaires :</p>
        <Slider {...settings}>
          {sortedDesigns?.map((design) => (
            <div key={design.id}>
              <Post postInfo={design} />
            </div>
          ))}
        </Slider>
        <p className='title'>Les designs les plus recents :</p>
        <div className='postRecent'>
          {designs?.map((design) => (
            <Post key={design.id} postInfo={design} />
          ))}
        </div>
      </div>   
  );
};

export default Home;
