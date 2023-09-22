import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodById } from '../redux/actions/foodActions';
import Loading from '../components/Loading';
import Error from '../components/Error';

function EditFood() {
  const { foodid } = useParams();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const getFoodByIdState = useSelector((state) => state.getFoodByIdReducer);
  const { loading, error, food } = getFoodByIdState;

  useEffect(() => {
    if (food) {
      if (food._id === foodid) {
        setName(food.name);
        setDescription(food.description);
        setCategory(food.category);
        setSmallPrice(food.prices[0]['small']);
        setMediumPrice(food.prices[0]['medium']);
        setLargePrice(food.prices[0]['large']);
        setImage(food.image);
      } else {
        dispatch(getFoodById(foodid));
      }
    } else {
      dispatch(getFoodById(foodid));
    }
  }, [food, dispatch, foodid]);

  function formHandler(e) {
    e.preventDefault();

    const updatedFood = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };

    console.log(updatedFood);
    // dispatch(addFood(food));
  }

  return (
    <div>
      <h2>Edit Food</h2>
      <h2>Food Id = {foodid}</h2>
      {loading && <Loading />}
      {error && <Error error='Something went wrong' />}

      <div className='text-start'>
        <form onSubmit={formHandler}>
          <input
            className='form-control'
            type='text'
            placeholder='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='small varient price'
            value={smallPrice}
            onChange={(e) => {
              setSmallPrice(e.target.value);
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='medium varient price'
            value={mediumPrice}
            onChange={(e) => {
              setMediumPrice(e.target.value);
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='large varient price'
            value={largePrice}
            onChange={(e) => {
              setLargePrice(e.target.value);
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='category'
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='description'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='image url'
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <button className='btn mt-3' type='submit'>
            Edit Food
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditFood;
