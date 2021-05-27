import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../Utils/api';
import { Button, Card, Container, Jumbotron } from 'react-bootstrap';

const CommentsByReviewId = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    api.getCommentsByReviewId(params.review_id).then((response) => {
      setComments(response);
      console.log(response);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading...</p>;

  return (
    <Container className='container-layout'>
      <Jumbotron>
        <h2>Comments for Review #{`${params.review_id}`}</h2>
      </Jumbotron>
      {comments.map((comment) => {
        return (
          <h2 className='m-3' key={comment.comment_id}>
            <Card id='card' className='h-100 shadow-sm bg-white rounded'>
              <Card.Body className='d-flex flex-column'>
                <div className='d-flex mb-2 justify-content-between'>
                  <Card.Title className='mb-0 font-weight-bold'>
                    {comment.title}
                    <p>{comment.author}</p>
                    <p>{comment.created_at}</p> {/*TODO - sort formatting*/}
                  </Card.Title>
                </div>
                <Card.Text className='text-secondary'>{comment.body}</Card.Text>
                <p>
                  {' '}
                  Votes {`${comment.votes}`} <Button>Add Votes</Button>
                </p>
              </Card.Body>
            </Card>
          </h2>
        );
      })}
      <p>
        <Button>Add Comment</Button>
      </p>
    </Container>
  );
};

export default CommentsByReviewId;
