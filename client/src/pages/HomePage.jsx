import React, { useEffect } from 'react';
import food from '../data/foodData';
import Food from '../components/Food';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFood } from '../redux/actions/foodActions';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);
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
