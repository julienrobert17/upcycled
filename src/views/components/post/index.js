import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Post = ({ postInfo, action}) => {
  const [votes, setVotes] = useState(postInfo.votes);
  const [hasVoted, setHasVoted] = useState(false);

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
      <img
        className="img"
        src={postInfo.img}
        alt={postInfo.title}
        onClick={action}
      />
      <div className="downLine">
        <div>
          <p className="votes">Votes: {votes}</p>
        </div>
        <div>
          <button
            className={hasVoted ? "btnv" : "btn"}
            onClick={handleVote}
          >
            <FontAwesomeIcon icon={hasVoted ? faChevronDown : faChevronUp} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
