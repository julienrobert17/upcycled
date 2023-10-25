import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import './index.css';

const Post = ({ postInfo, action}) => {
  const [votes, setVotes] = useState(postInfo.votes);
  const [hasVoted, setHasVoted] = useState(undefined); 

  const handleVote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
    } else {
      setVotes(votes - 1);
      setHasVoted(false);
    }
  };

  return (
    <div className="card">
      <div className='center'>
        <img className="img" src={postInfo.img} alt={postInfo.title} onClick={action}/>
      </div>
      <div className="downLine">
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p className="votes center">{votes}</p>

          <button
            className={hasVoted ? "btnv center" : "btn center"}
            onClick={handleVote}
             style={{marginRight: "10px", marginTop: "-5px"}}
          >
            <FontAwesomeIcon className={hasVoted ? "fa-regular" : "fa-solid"} icon={hasVoted ? faHeart : faHeartEmpty} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
