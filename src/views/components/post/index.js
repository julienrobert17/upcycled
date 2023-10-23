import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Post = ({ postInfo }) => {
  const [votes, setVotes] = useState(postInfo.votes);
  const [hasVoted, setHasVoted] = useState(false); // Ajout d'un état pour suivre si l'utilisateur a déjà voté pour ce post

  const handleVote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true); // Marquer le post comme voté
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
            disabled={hasVoted} // Désactive le bouton si l'utilisateur a déjà voté
          >
            <FontAwesomeIcon  icon={hasVoted ? faCheck : faChevronUp} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
