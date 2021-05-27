import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as api from '../Utils/api';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Votes from '../Utils/Votes';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    api.getReviews(params.review_id).then((response) => {
      setReviews(response);
      setIsLoading(false);
    });
  }, [params.review_id]);
  if (isLoading) return <p>Loading...</p>;

  return (
    <Container className='container-layout'>
      {params.review_id ? (
        `Review #${params.review_id}`
      ) : (
        <Jumbotron>
          <h2>Reviews</h2>
        </Jumbotron>
      )}
      {reviews.map((reviews) => {
        return (
          <h2 className='m-3' key={reviews.review_id}>
            <Card id='card' className='h-100 shadow-sm bg-white rounded'>
              <Link to={`/reviews/${reviews.review_id}`}>
                <Card.Img
                  variant='top'
                  src={reviews.review_img_url}
                  alt={reviews.title}
                />
              </Link>
              <Card.Body className='d-flex flex-column'>
                <div className='d-flex mb-2 justify-content-between'>
                  <Link to={`/reviews/${reviews.review_id}`}>
                    <Card.Title className='mb-0 font-weight-bold'>
                      {reviews.title}
                    </Card.Title>
                  </Link>
                </div>
                <Card.Text className='text-secondary'>
                  {reviews.category}
                </Card.Text>
                <h5>
                  <Votes votes={reviews.votes} review_id={reviews.review_id} />
                </h5>
              </Card.Body>
            </Card>
          </h2>
        );
      })}
    </Container>
  );
};
export default Reviews;
