import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTransactions,
  /* createTransaction, */
  /* updateTransaction */
  deleteTransaction
} from '../../redux/actions/action.creators';
import './Portfolio.scss';
import CreatePortfolio from '../createPortfolio/createPortfolio';
import UpdatePortfolio from '../updatePortfolio/updatePortfolio';

function Portfolio() {
  const dispatch = useDispatch();
  const transactions = useSelector((store) => store.transactions);
  const transaction = useSelector((store) => store.transaction);
  const token = useSelector((store) => store.token);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (token?.token) {
      dispatch(getAllTransactions(token));
    }
  }, [transaction]);

  return (
    token.token ? (
      <div className="portfolio-container">
        {
          editing ? (
            <UpdatePortfolio />
          ) : (
            <CreatePortfolio />
          )
        }
        <table className="portfolio-container__table">
          <thead>
            <tr>
              <th className="data__type">Type:</th>
              <th className="data__coin">Coin:</th>
              <th className="data__price">Price:</th>
              <th className="data__quantity">Quantity:</th>
              <th className="data__spent">Spent:</th>
            </tr>
          </thead>
          <tbody>
            {
            transactions ? (
              transactions.map((transactionItem) => (
                <tr className="table__data" key={transactionItem._id}>
                  <td className="data__type">{transactionItem.type}</td>
                  <td className="data__coin">{transactionItem.coin}</td>
                  <td className="data__price-portfolio">{transactionItem.price}</td>
                  <td className="data__quantity">{transactionItem.quantity}</td>
                  <td className="data__spent">{transactionItem.spent}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        console.log(transactionItem._id);
                        dispatch(deleteTransaction(transactionItem._id));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      type="submit"
                      onClick={() => {
                        setEditing(!editing);
                        console.log(transactionItem._id);
                      // dispatch(updateTransaction(transactionItem._id, values));
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No transactions yet</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    ) : (
      <Redirect to="/log" />
    )
  );
}

export default Portfolio;
