import React from 'react';
import food from '../data/foodData';
import Food from '../components/Food';

function HomePage() {
  return (
    <div>
      <div className='row'>
        {food.map((food, i) => {
          return (
            <div className='col-md-4' key={i}>
              <div>
                <Food food={food} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
