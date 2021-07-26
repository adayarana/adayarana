import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signup, login, getUserToken } from '../../redux/actions/action.creators';
import './Signup.scss';

function Signup() {
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
    } else if (user?.user) {
      dispatch(login(user.user));
    } else if (user?.token) {
      dispatch(getUserToken(user.token));
    }
  }, [formState, reset]);

  const onSubmit = (data, event) => {
    event.preventDefault();
    const newUser = {
      ...data
    };
    dispatch(signup(newUser));
  };
  return (
    !user.token ? (
      <div className="signup-container">
        <h3 className="signup-container__title">Create an account</h3>
        <form className="signup-container__form" onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit">Sign Up</button>
        </form>
        <small>
          Already have an account?
          <Link className="signup-container__link" to="/log">Log In</Link>
        </small>
      </div>
    ) : (
      <Redirect to="/portfolio" />
    )
  );
}

export default Signup;
