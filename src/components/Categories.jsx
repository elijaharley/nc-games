import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as api from '../Utils/api';
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
    <Container className='container-layout'>
      <Jumbotron>
        <h2>Categories</h2>
      </Jumbotron>
      {categories.map((category) => {
        return (
          <Link to={category.slug}>
            <h2 className='m-3' key={category.slug}>
              <Card className='h-100 shadow-sm bg-white rounded'>
                <Card.Body className='d-flex flex-column'>
                  <div className='d-flex mb-2 justify-content-between'>
                    <Card.Title className='mb-0 font-weight-bold'>
                      {category.slug}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </h2>
          </Link>
        );
      })}
    </Container>
  );
};

export default Categories;
