import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFood } from '../redux/actions/foodActions';

function AddFood() {
  const [name, setName] = useState('');
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  function formHandler(e) {
    e.preventDefault();

    const food = {
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

    console.log(food);
    dispatch(addFood(food));
  }
  return (
    <div>
      <div className='text-start'>
        <h2>Add food</h2>
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
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFood;
