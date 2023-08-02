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
      <div className='flex-container'>
        <div className='w-100'>
          <p>Variants</p>
        </div>
        <div className='w-100'>
          <p>Prices</p>
        </div>
      </div>
    </div>
  );
}

export default Food;
