import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as api from '../Utils/api';
import { Link } from 'react-router-dom';

const ReviewsById = () => {
  const [reviews, setReviews] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const singleReview = [];
  useEffect(() => {
    api.getReviews().then((response) => {
      response.filter((obj) => {
        if (obj.review_id === +params.review_id) {
          singleReview.push(obj);
        }
      });
      setReviews(singleReview);
      setIsLoading(false);
    });
  }, [params]);
  if (isLoading) return <p>Loading...</p>;
  return (
    <Container className='container-layout'>
      <Jumbotron>
        <h2>Reviews By ID</h2>
      </Jumbotron>
      <div>
        {reviews.map((review) => {
          return (
            <Card
              id='card'
              key={`${review.review_id}`}
              className='h-100 shadow-sm bg-white rounded'
            >
              <Link to={`/categories/${params.review_id}`}></Link>
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
          );
        })}
      </div>
    </Container>
  );
};

export default ReviewsById;
