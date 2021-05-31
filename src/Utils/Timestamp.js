import React from 'react';

const Timestamp = ({ created_at }) => {
  const year = created_at.slice(0, 4);
  const month = created_at.slice(5, 7);
  const day = created_at.slice(8, 10);
  const hour = created_at.slice(11, 13);
  const minutes = created_at.slice(14, 16);
  return <p>{`Posted at ${hour}:${minutes} on ${day}.${month}.${year}`}</p>;
};

export default Timestamp;
