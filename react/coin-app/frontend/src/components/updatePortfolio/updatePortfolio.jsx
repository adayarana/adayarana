import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  updateTransaction
} from '../../redux/actions/action.creators';
import './updatePortfolio.scss';

function updatePortfolio({ currentTransaction }) {
  const dispatch = useDispatch();
  const initialFormState = {
    type: '',
    coin: '',
    price: '',
    quantity: '',
    spent: ''
  };

  const {
    register,
    reset,
    handleSubmit,
    formState
  } = useForm({
    defaultValues: currentTransaction
  });

  const onSubmit = (data, event) => {
    event.preventDefault();
    const newTransaction = {
      ...data
    };
    dispatch(updateTransaction(newTransaction.id, newTransaction));
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(initialFormState);
    }
  }, [formState, reset]);
  return (
    <div className="portfolio-container__form">
      <h3 className="form__title">Update Transaction</h3>
      <hr />
      <form className="form__group" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="type">
          <p>Type:</p>
          <select
            id="type"
            name="type"
            placeholder="Type"
            autoComplete="off"
            {...register('type', {
              required: 'Type is required'
            })}
            type="text"
          >
            <option value="">Select...</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
          <p className="error-message">
            {formState.errors?.type?.message}
          </p>
        </label>
        <label htmlFor="coin">
          <p>Coin:</p>
          <input
            id="coin"
            data-testid="coin"
            name="coin"
            placeholder="Coin"
            autoComplete="off"
            {...register('coin', {
              required: 'Coin is required'
            })}
            type="text"
          />
          <p className="error-message">
            {formState.errors?.coin?.message}
          </p>
        </label>
        <label htmlFor="price">
          <p>Price:</p>
          <input
            id="price"
            data-testid="price"
            name="price"
            placeholder="Price"
            autoComplete="off"
            {...register('price', {
              required: { value: true, message: 'Price is required' },
              min: { value: 0.001, message: 'Minimun value 0.001' }
            })}
            type="number"
          />
          <p className="error-message">
            {formState.errors?.price?.message}
          </p>
        </label>
        <label htmlFor="quantity">
          <p>Quantity:</p>
          <input
            id="quantity"
            name="quantity"
            placeholder="Quantity"
            autoComplete="off"
            {...register('quantity', {
              required: { value: true, message: 'Quantity is required' },
              min: { value: 0.001, message: 'Minimun value 0.001' }
            })}
            type="number"
          />
          <p className="error-message">
            {formState.errors?.quantity?.message}
          </p>
        </label>
        <label htmlFor="spent">
          <p>Spent:</p>
          <input
            id="spent"
            name="spent"
            placeholder="Spent"
            autoComplete="off"
            {...register('spent', {
              required: { value: true, message: 'Spent is required' },
              min: { value: 0.001, message: 'Minimun value 0.001' }
            })}
            type="number"
          />
          <p className="error-message">
            {formState.errors?.spent?.message}
          </p>
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
      <hr />
    </div>
  );
}

export default updatePortfolio;
