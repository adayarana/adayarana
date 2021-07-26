import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, getUserToken, logout } from '../../redux/actions/action.creators';
import './Log.scss';

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const {
    register,
    reset,
    handleSubmit,
    formState
  } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    } else if (user?.token) {
      dispatch(getUserToken(user.token));
    }
  }, [formState, reset]);

  const onSubmit = (data, event) => {
    event.preventDefault();
    const newUser = {
      ...data
    };
    dispatch(login(newUser));
  };
  return (
    !user.token ? (
      <div className="login-container">
        <h3 className="login-container__title">Log In</h3>
        <form className="login-container__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">
            <p>Email:</p>
            <input
              id="email"
              data-testid="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
              {...register('email', {
                required: 'Email is required'
              })}
              type="email"
            />
            <p className="error-message">
              {formState.errors?.email?.message}
            </p>
          </label>
          <label htmlFor="password">
            <p>Password:</p>
            <input
              id="password"
              data-testid="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="off"
              {...register('password', {
                required: { value: true, message: 'Password is required' },
                minLength: { value: 6, message: 'The password must contain at least six character' }
              })}
              type="password"
            />
            <p className="error-message">
              {formState.errors?.password?.message}
            </p>
          </label>
          <br />
          <button type="submit">Log In</button>
        </form>
        <small>
          Dont have an account?
          <Link className="login-container__link" to="/signup">Sign Up</Link>
        </small>
      </div>
    ) : (
      <div className="login-container">
        <button type="button" onClick={() => { dispatch(logout()); }}>Log Out</button>
      </div>
    )
  );
}

export default Login;
