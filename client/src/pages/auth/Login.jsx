import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-start'>
          <h2 className='text-center m-2' style={{ fontSize: '35px' }}>
            Login
          </h2>
          <div>
            <input
              required
              type='text'
              placeholder='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type='text'
              placeholder='password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login} className='btn mt-3'>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
