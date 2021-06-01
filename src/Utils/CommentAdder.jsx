import React from 'react';
import * as api from './api';
import { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import UserContext from '../context/user';
import Login from '../components/Login';

const CommentAdder = ({ review_id }) => {
  const [comment, setComment] = useState('');
  const userObj = useContext(UserContext);
  let author = '';
  if (userObj.loggedIn === true) {
    author = userObj.user;
  } else {
    <Login />;
  }

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          api.postComment(review_id, author, comment).then((postedComment) => {
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
