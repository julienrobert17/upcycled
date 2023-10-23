import React from 'react';
import { Header } from '../../components'; 
import './index.css';

const Profile = () => {
  const userData = {
    username: 'Hugo',
    email: 'hugo@example.com',
    avatar: 'https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?auto=format&fit=crop&q=80&w=2576&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  const votedPosts = [
    {
      id: 1,
      title: 'Design 1',
      votes: 1250,
      img: 'https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?auto=format&fit=crop&q=80&w=2576&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      title: 'Design 2',
      votes: 1440,
      img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=2610&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'Design 3',
      votes: 2250,
      img: 'https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?auto=format&fit=crop&q=80&w=2576&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      title: 'Design 4',
      votes: 3440,
      img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=2610&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const donationHistory = [
    {
      id: 1,
      itemName: ['Pull', '2x T-shirt', 'Veste'],
      date: '01/10/2023',
    },
    {
      id: 2,
      itemName: ['3x T-shirt', 'Pull', 'Veste'],
      date: '02/15/2023',
    },
  ];
  

  return (
    <div>
      <Header />
      <div className="profile-container">
        <div className='left-wrapper'>
          <div className="profile-info">
            <img src={userData.avatar} alt="Avatar" className="avatar" />
            <h2>{userData.username}</h2>
            <p>Email: {userData.email}</p>
          </div>
          <div className="donation-history">
            <h3>Historique des Dons</h3>
            <ul>
              {donationHistory.map((donation) => (
                <li key={donation.id}>
                  {donation.date}:
                  <ul>
                    {donation.itemName.map((item, index) => (
                      <li className="vetement" key={index}> - {item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
        </div>
        </div>
        <div className="voted-posts">
          <h3>Posts Votés</h3>
          <div className='postGallery'>
            {votedPosts.map((post) => (
              <div className='profilePost'>
                <div className='profilePostLeft'></div>
                <img src={post.img} alt={post.title} className="postImg"/>
                <div className='profilePostRight'>
                  <p>{post.title}</p>
                  <p>Votes: {post.votes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
