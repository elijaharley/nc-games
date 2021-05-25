import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import * as api from '../Utils/api';

const NavbarCategories = () => {
  const [categories, setCategories] = useState('');

  useEffect(() => {
    api.getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return categories.map((category) => {
    return (
      <Nav.Item>
        {category.slug}
        <Link to={category.slug}></Link>
      </Nav.Item>
    );
  });
};

export default NavbarCategories;
