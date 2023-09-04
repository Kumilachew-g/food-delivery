import React, { useEffect } from 'react';
import Food from '../components/Food';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFood } from '../redux/actions/foodActions';
import Loading from '../components/Loading';

function HomePage() {
  const dispatch = useDispatch();
  const foodsState = useSelector((state) => state.getAllFoodsReducer);
  const { foods, loading, error } = foodsState;

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);
  return (
    <div>
      <div className='row justify-content-center'>
        {loading ? (
          <Loading />
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
