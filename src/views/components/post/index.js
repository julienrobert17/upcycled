import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import './index.css';

const Post = ({ postInfo }) => {
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
      <p className="cardTitle">{postInfo.title}</p>
      <img className="img" src={postInfo.img} alt={postInfo.title} />
      <div className="downLine">
        <div>
          <p className="votes">Votes: {votes}</p>
        </div>
        <div>
          <button
            className={hasVoted ? "btnv" : "btn"}
            onClick={handleVote}
          >
            <FontAwesomeIcon className={hasVoted ? "fa-regular" : "fa-solid"} icon={hasVoted ? faHeart : faHeartEmpty} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
