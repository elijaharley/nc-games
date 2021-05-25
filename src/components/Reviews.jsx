import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as api from '../Utils/api';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    api.getReviews().then((response) => {
      setReviews(response);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  return (
    <Container className='container-layout'>
      <Jumbotron>
        <h2>Reviews</h2>
      </Jumbotron>
      {reviews.map((reviews) => {
        return (
          <h2 className='m-3' key={reviews.review_id}>
            <Card id='card' className='h-100 shadow-sm bg-white rounded'>
              <Card.Img
                variant='top'
                src={reviews.review_img_url}
                alt={reviews.owner}
              />
              <Card.Body className='d-flex flex-column'>
                <div className='d-flex mb-2 justify-content-between'>
                  <Card.Title className='mb-0 font-weight-bold'>
                    {reviews.title}
                  </Card.Title>
                </div>
                <Card.Text className='text-secondary'>
                  {reviews.category}
                </Card.Text>
              </Card.Body>
            </Card>
          </h2>
        );
      })}
    </Container>
  );
};

export default Reviews;
