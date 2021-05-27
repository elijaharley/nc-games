import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as api from '../Utils/api';
import { Link } from 'react-router-dom';

const SingleCategory = () => {
  const [reviews, setReviews] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    api.getReviews().then((response) => {
      const reviewsByCategory = [];
      response.filter((obj) => {
        if (obj.category === params.category) {
          reviewsByCategory.push(obj);
        }
        return null;
      });
      setReviews(reviewsByCategory);
      setIsLoading(false);
    });
  }, [params.category]);
  if (isLoading) return <p>Loading...</p>;
  return (
    <Container className='container-layout'>
      <Jumbotron>
        <h2>{`${params.category}`} games</h2>
      </Jumbotron>

      {reviews.map((review) => {
        return (
          <Link to={`/reviews/${review.review_id}`}>
            <h2 className='m-3' key={`${review.review_id}`}>
              <Card className='h-100 shadow-sm bg-white rounded'>
                <Card.Img
                  variant='top'
                  src={review.review_img_url}
                  alt={review.title}
                />
                <Card.Body className='d-flex flex-column'>
                  <div className='d-flex mb-2 justify-content-between'>
                    <Card.Title className='mb-0 font-weight-bold'>
                      {review.title}
                    </Card.Title>
                  </div>
                  <Card.Text className='text-secondary'>
                    {review.category}
                  </Card.Text>
                </Card.Body>
              </Card>
            </h2>
          </Link>
        );
      })}
    </Container>
  );
};
export default SingleCategory;
