import React from 'react';
import * as api from './api';
import { useState } from 'react';

const Votes = ({ votes, review_id }) => {
  const [upVote, setUpVote] = useState(votes);

  const incVotes = () => {
    setUpVote((currVotes) => currVotes + 1);
    api.patchReviewVotes(review_id, 1).catch(() => {
      setUpVote(0);
    });
  };

  return (
    <div>
      <p>Votes: {votes + upVote}</p>
      <button onClick={incVotes}>Add Votes</button>
    </div>
  );
};

export default Votes;
