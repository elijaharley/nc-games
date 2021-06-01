import React from 'react';
import * as api from './api';
import { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../context/user';

const Votes = ({ votes, review_id }) => {
  const [upVote, setUpVote] = useState(0);
  const { user } = useContext(UserContext);

  const incVotes = () => {
    setUpVote((votes) => votes + 1);
    api.patchReviewVotes(review_id, 1).catch(() => {
      setUpVote(0);
    });
  };

  const isDisabled = upVote > 0 || user === user.username;

  return (
    <div>
      <p>Votes: {votes + upVote}</p>
      <Button variant='info' onClick={incVotes} disabled={isDisabled}>
        Add Votes
      </Button>
    </div>
  );
};

export default Votes;
