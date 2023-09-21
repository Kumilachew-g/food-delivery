import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFoodById } from '../redux/actions/foodActions';

function EditFood() {
  const { foodid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodById(foodid));
  }, [foodid]);

  return (
    <div>
      <h2>Edit Food</h2>
      <h2>Food Id = {foodid}</h2>
    </div>
  );
}

export default EditFood;
