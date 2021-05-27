import React from 'react';
import * as api from './api';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const CommentAdder = ({ review_id }) => {
  const [comment, setComment] = useState(0);
  <form
    onSubmit={(e) => {
      e.preventDefault();
      api.postComment(review_id, comment).then((postedComment) => {
        setComment((currentComments) => {
          return [postedComment, ...currentComments];
        });
      });
    }}
  />;
  return (
    <Container>
      <label htmlFor='comment'>Comment</label>
      <input
        type='text'
        id='comment'
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        required
      />
    </Container>
  );
};

export default CommentAdder;
