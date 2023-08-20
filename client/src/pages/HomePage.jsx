import React, { useEffect } from 'react';
import Food from '../components/Food';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFood } from '../redux/actions/foodActions';

function HomePage() {
  const dispatch = useDispatch();
  const foodsstate = useSelector((state) => state.getAllFoodsReducer);
  const { foods, loading, error } = foodsstate;

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);
  return (
    <div>
      <div className='row justify-content-center'>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          foods.map((food, i) => {
            return (
              <div className='col-md-3 m-3' key={i}>
                <div>
                  <Food food={food} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default HomePage;
