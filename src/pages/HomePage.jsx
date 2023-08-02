import React from 'react';
import food from '../data/foodData';

function HomePage() {
  return (
    <div>
      <h1>{food.length}</h1>
    </div>
  );
}

export default HomePage;
