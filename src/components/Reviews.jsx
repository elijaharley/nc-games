import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
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
      <h2>Reviews</h2>
      {reviews.map((reviews) => {
        return (
          <h2 className='m-3' key={reviews.review_id}>
            <Card className='h-100 shadow-sm bg-white rounded'>
              <Card.Body className='d-flex flex-column'>
                <div className='d-flex mb-2 justify-content-between'>
                  <Card.Title className='mb-0 font-weight-bold'>
                    {reviews.title}
                  </Card.Title>
                </div>
                <Card.Text className='text-secondary'>
                  {reviews.owner}
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
