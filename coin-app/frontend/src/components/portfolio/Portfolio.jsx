import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTransactions,
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
  const [deleting, setDeleting] = useState(false);

  const [currentTransaction, setCurrentTransaction] = useState({
    _id: '',
    type: '',
    coin: '',
    price: '',
    quantity: '',
    spent: ''
  });

  useEffect(() => {
    if (token?.token) {
      dispatch(getAllTransactions(token));
    }
  }, [transaction, deleting]);

  return (
    token.token ? (
      <div className="portfolio-container">
        {
          editing ? (
            <UpdatePortfolio currentTransaction={currentTransaction} />
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
            transactions.length > 0 ? (
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
                        setDeleting(!deleting);
                        dispatch(deleteTransaction(transactionItem._id));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="input-portfolio"
                      type="button"
                      onClick={() => {
                        setEditing(!editing);
                        setCurrentTransaction(transactionItem);
                      }}
                    >
                      {
                        !editing ? (
                          <data>Update</data>
                        ) : (
                          <data>Add</data>
                        )
                      }
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
