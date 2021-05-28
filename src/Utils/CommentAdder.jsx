import React from 'react';
import * as api from './api';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const CommentAdder = ({ currentComments }) => {
  const [comment, setComment] = useState('');
  <form
    onSubmit={(e) => {
      e.preventDefault();
      api
        .postComment(currentComments.review_id, comment)
        .then((postedComment) => {
          setComment((postedComment) => {
            console.log([postedComment, ...currentComments]);
            return [postedComment, ...currentComments];
          });
        });
    }}
  />;
  return (
    <Container>
      <form>
        <label htmlFor='comment'>add comment</label>
        <input
          type='text'
          id='comment'
          submit='button'
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          required
        />
        <input type='submit' value='submit' />
      </form>
    </Container>
  );
};

export default CommentAdder;
