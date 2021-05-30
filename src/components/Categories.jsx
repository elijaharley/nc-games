import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Container, Jumbotron, Row } from 'react-bootstrap';
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
    <Container fluid className='container-layout'>
      <Row xs={1} md={3} lg={6}></Row>
      <Jumbotron>
        <h2>Categories</h2>
      </Jumbotron>
      {categories.map((category) => {
        return (
          <div key={`${category.slug}`}>
            <Link to={`categories/${category.slug}`}>
              <div className='m-3'>
                <Card className='h-100 shadow-sm bg-white rounded'>
                  <Card.Body className='d-flex flex-column'>
                    <div className='d-flex mb-2 justify-content-between'>
                      <Card.Title className='mb-0 font-weight-bold'>
                        {category.slug}
                      </Card.Title>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          </div>
        );
      })}
    </Container>
  );
};

export default Categories;
