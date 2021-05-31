import React from 'react';
import * as api from './api';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const CommentAdder = ({ review_id }) => {
  const [comment, setComment] = useState('');

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          api.postComment(review_id, comment).then((postedComment) => {
            setComment((currentComments) => {
              return [postedComment, ...currentComments];
            });
          });
        }}
      >
        <label htmlFor='comment'>add comment</label>
        <input
          type='text'
          id='comment'
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          required
        />
        <input type='submit' value='submit' />
        <br></br>
      </form>
    </Container>
  );
};

export default CommentAdder;
