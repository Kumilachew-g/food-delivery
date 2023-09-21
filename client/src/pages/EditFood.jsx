import React from 'react';
import { useParams } from 'react-router-dom';

function EditFood() {
  const { foodid } = useParams();
  return (
    <div>
      <h2>Edit Food</h2>
      <h2>Food Id = {foodid}</h2>
    </div>
  );
}

export default EditFood;
