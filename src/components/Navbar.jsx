import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
// import { useEffect, useState } from 'react';
// import * as api from '../Utils/api';

const Navbar = () => {
  return (
    <Container className='container-layout'>
      <Nav justify variant='info' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/categories'>Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/reviews'>Reviews</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/users'>Users</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     api.getCategories().then((categoriesFromApi) => {
//       setCategories(categoriesFromApi);
//     }, []);
//   });
//   console.log('inside navbar');
//   return <h1>navbar</h1>;

//   //INFINITE LOOP re-rendering
//   categories.map((category) => {
//     return (
//       <Nav.Item>
//         {category.slug}
//         {console.log(category.slug)}
//         <Link to='/categories/${category.slug}'>{category.slug}</Link>
//       </Nav.Item>
//     );
//   });
// };

export default Navbar;
