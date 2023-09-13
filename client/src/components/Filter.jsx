import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Filter() {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState('');
  const [category, setCategory] = useState('all');
  return (
    <div className='container'>
      <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
        <div className='col-md-3'>
          <input
            type='text'
            className='form-control w-100'
            placeholder='search foods'
          />
        </div>
        <div className='col-md-3'>
          <select className='form-control w-100 mt-2'>
            <option value='all'>All</option>
            <option value='yetsom'>Yetsom</option>
            <option value='yefsik'>Yefsik</option>
          </select>
        </div>
        <div className='col-md-3'>
          <button className='btn w-100 mt-2'>FILTER</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
