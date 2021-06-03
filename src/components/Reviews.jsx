import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as api from '../Utils/api';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Votes from '../Utils/Votes';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const [sortOrder, setSortOrder] = useState('ASC');
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .getReviews({ sortOrder })
      .then((response) => {
        setReviews(response);
        setIsLoading(false);
      })
      .catch((err) => {
        return <h2>Error</h2>;
      });
  }, [sortOrder]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container fluid className='container-layout justify-content-center'>
      {params.review_id ? `Review #${params.review_id}` : <h2>Reviews</h2>}
      <h3>
        <Button
          variant='info'
          onClick={() => {
            setSortOrder('ASC');
            setReviews((reviews) => [...reviews].sort());
          }}
        >
          Sort Ascending
        </Button>
      </h3>

      <CardGroup className='card-columns'>
        {reviews.map((reviews) => {
          return (
            <h2 className='m-3' key={reviews.review_id}>
              <Card
                style={{ width: '18rem' }}
                id='card-columns'
                className='h-100 shadow-sm bg-white rounded'
              >
                <Link to={`/reviews/${reviews.review_id}`} className='link'>
                  <Card.Img
                    variant='top'
                    src={reviews.review_img_url}
                    alt={reviews.title}
                    className='img'
                  />
                </Link>
                <Card.Body className='d-flex flex-column'>
                  <div className='d-flex mb-2 justify-content-around'>
                    <Link to={`/reviews/${reviews.review_id}`}>
                      <Card.Title className='mb-0 font-weight-bold'>
                        {reviews.title}
                      </Card.Title>
                    </Link>
                  </div>
                  <Link to={`/categories/${reviews.category}`}>
                    <Card.Text className='text-secondary'>
                      {reviews.category
                        .replaceAll('-', ' ')
                        .replace(
                          reviews.category[0],
                          reviews.category[0].toUpperCase()
                        )}
                    </Card.Text>
                  </Link>
                  <h3>
                    <Votes
                      votes={reviews.votes}
                      review_id={reviews.review_id}
                    />
                  </h3>
                </Card.Body>
              </Card>
            </h2>
          );
        })}
      </CardGroup>
    </Container>
  );
};
export default Reviews;
