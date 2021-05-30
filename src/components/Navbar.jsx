import React from 'react';
import { Container, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Container fluid className='container-layout'>
      <Nav justify variant='info' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link href='/' className='nav'>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/categories' className='nav'>
            Categories
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/reviews' className='nav'>
            Reviews
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/users' className='nav'>
            Users
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Navbar;
