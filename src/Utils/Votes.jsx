import React from 'react';
import * as api from './api';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';

const Votes = ({ votes, review_id }) => {
  const [upVote, setUpVote] = useState(0);

  const incVotes = () => {
    setUpVote((votes) => votes + 1);
    api.patchReviewVotes(review_id, 1).catch(() => {
      setUpVote(0);
    });
  };

  return (
    <div>
      <p>Votes: {votes + upVote}</p>
      <Badge variant='info' onClick={incVotes}>
        Add Votes
      </Badge>
    </div>
  );
};

export default Votes;
