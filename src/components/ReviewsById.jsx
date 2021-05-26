import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react';

const ReviewsById = () => {
  const params = useParams();
  console.log('in reviewsbyid', params);
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default ReviewsById;
