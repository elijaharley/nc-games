import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as api from '../Utils/api';

const Users = () => {
  const [users, setUsers] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    api.getUsers().then((response) => {
      setUsers(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container className='container-layout'>
      <Jumbotron variant='dark'>
        <h2>Users</h2>
      </Jumbotron>
      {users.map((user) => {
        return (
          <h2 className='m-3' key={user.username}>
            <Card className='h-100 shadow-sm bg-white rounded'>
              <Card.Img
                variant='top'
                src={user.avatar_url}
                alt={user.username}
              />
              <Card.Body className='d-flex flex-column'>
                <div className='d-flex mb-2 justify-content-between'>
                  <Card.Title className='mb-0 font-weight-bold'>
                    {user.username}
                  </Card.Title>
                </div>
                <Card.Text className='text-secondary'>{user.name}</Card.Text>
              </Card.Body>
            </Card>
          </h2>
        );
      })}
    </Container>
  );
};

export default Users;
