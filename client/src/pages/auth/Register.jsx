import React from 'react';

function Register() {
  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-start'>
          <h2 className='text-center m-2' style={{ fontSize: '35px' }}>
            Register
          </h2>
          <div>
            <input
              required
              type='text'
              placeholder='name'
              className='form-control'
            />
            <input
              required
              type='text'
              placeholder='email'
              className='form-control'
            />
            <input
              type='text'
              placeholder='password'
              className='form-control'
            />
            <input
              type='text'
              placeholder='confirm password'
              className='form-control'
            />
            <button className='btn mt-3'>REGISTER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
