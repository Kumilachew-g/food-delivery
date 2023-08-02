/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Food({ food }) {
  return (
    <div>
      <h1>{food.name}</h1>
      <img
        src={food.image}
        className='img-fluid'
        style={{ height: '200px', width: '200px' }}
      />
    </div>
  );
}

export default Food;
