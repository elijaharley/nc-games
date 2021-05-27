import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../Utils/api';
import { Card, Container } from 'react-bootstrap';

const CommentsByReviewId = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    api.getCommentsByReviewId().then((response) => {
      const commentsById = [];
      console.log(response.review_id);
    });
    setComments();
    setIsLoading(false);
  }, []);
  if (isLoading) return <p>Loading...</p>;
  return (
    <Container className='container-layout'>
      <div>
        {comments.map((comment) => {
          return comment.review_id;
        })}
      </div>
    </Container>
  );
};

export default CommentsByReviewId;
