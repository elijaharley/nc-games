import React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as api from '../api';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    api.getCategories().then((response) => {
      setCategories(response);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  return (
    <Container fluid className='container-layout justify-content-center'>
      <h2>Categories</h2>
      <CardGroup className='card-columns'>
        {categories.map((category) => {
          return (
            <div key={`${category.slug}`}>
              <Link to={`categories/${category.slug}`} className='link'>
                <div className='m-3'>
                  <Card className='h-100 shadow-sm bg-white rounded'>
                    <Card.Body className='d-flex flex-column'>
                      <div className='d-flex mb-2 justify-content-around'>
                        <Card.Title className='mb-0 font-weight-bold'>
                          {category.slug
                            .replaceAll('-', ' ')
                            .replace(
                              category.slug[0],
                              category.slug[0].toUpperCase()
                            )}
                        </Card.Title>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Link>
            </div>
          );
        })}
      </CardGroup>
    </Container>
  );
};

export default Categories;
