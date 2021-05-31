import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../Utils/api';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import Votes from '../Utils/Votes';
import CommentAdder from '../Utils/CommentAdder';
import Timestamp from '../Utils/Timestamp';

const CommentsByReviewId = () => {
  const [comments, setComments] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    api.getCommentsByReviewId(params.review_id).then((response) => {
      setComments(response);
      setIsLoading(false);
    });
  }, [params.review_id]);
  if (isLoading) return <p>Loading...</p>;

  return (
    <Container fluid className='container-layout'>
      <Jumbotron>
        <h2>Comments for Review #{`${params.review_id}`}</h2>
      </Jumbotron>
      <h3>
        <CommentAdder review_id={params.review_id} />
      </h3>
      {comments.map(
        (comment) => {
          return (
            <h2 className='m-3' key={comment.comment_id}>
              <Card id='card' className='h-100 shadow-sm bg-white rounded'>
                <Card.Body className='d-flex flex-column'>
                  <div className='d-flex mb-2 justify-content-between'>
                    <Card.Title className='mb-0 font-weight-bold'>
                      {comment.title}
                      <p>{comment.author}</p>
                      <Timestamp created_at={comment.created_at} />
                    </Card.Title>
                  </div>
                  <Card.Text className='text-secondary'>
                    {comment.body}
                  </Card.Text>
                  <h3>
                    <Votes
                      votes={comment.votes}
                      review_id={comment.review_id}
                    />
                  </h3>
                </Card.Body>
              </Card>
            </h2>
          );
        }
        //}
      )}
    </Container>
  );
};

export default CommentsByReviewId;
