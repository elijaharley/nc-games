import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Nav justify variant='info' defaultActiveKey='/home'>
      <Nav.Item>
        <Nav.Link href='/' className='nav'>
          Reviews
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/categories' className='nav'>
          Categories
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/users' className='nav'>
          Users
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
