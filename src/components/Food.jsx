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
          <select>
            {food.variants.map((variant) => {
              return (
                <option value={variant} key={variant}>
                  {variant}
                </option>
              );
            })}
          </select>
        </div>
        <div className='w-100'>
          <p>Quantity</p>
          <select>
            {[...Array(10).keys()].map((x, i) => {
              return (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Food;
