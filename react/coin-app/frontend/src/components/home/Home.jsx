import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApi } from '../../redux/actions/action.creators';
import './Home.scss';

function Home() {
  const coins = useSelector((store) => Object.entries(store.coins));
  const filteredCoins = useSelector((store) => store.filteredCoins);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  }, []);

  const cripto = filteredCoins.length > 0 ? filteredCoins : coins;

  function handleFavourite(coin) {
    const favouriteCoin = document.getElementById(coin[0]);
    switch (favouriteCoin.className) {
      case 'far fa-star':
        favouriteCoin.className = 'far fa-star favourite';
        break;

      case 'far fa-star favourite':
        favouriteCoin.className = 'far fa-star';
        break;

      default:
        favouriteCoin.className = 'far fa star';
    }
  }

  return (
    <>
      <div className="home-container" data-testid="home-container">
        <h3 className="home-container__title">Cryptocurrencies</h3>
        <hr />
        <table className="home-container__table" data-testid="home-container__table">
          <thead>
            <tr>
              <th>#</th>
              <th className="data__coin">Coin:</th>
              <th className="data__price">Price:</th>
              <th className="data__market-cap">Market Cap:</th>
              <th className="data__volume">24h Volume:</th>
              <th className="data__change">24h Change:</th>
            </tr>
          </thead>
          <tbody>
            {
            cripto.map((coin) => ((
              <tr className="table__data" key={coin[0]}>
                <td>
                  <em
                    className="far fa-star"
                    role="button"
                    aria-hidden="true"
                    id={coin[0]}
                    onClick={() => handleFavourite(coin)}
                  />
                </td>
                <td className="data__coin">
                  {coin[0]}
                </td>
                <td className="data__price">
                  {coin[1].eur.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                </td>
                <td className="data__market-cap">
                  {coin[1].eur_market_cap.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                </td>
                <td className="data__volume">
                  {coin[1].eur_24h_vol.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                </td>
                <td className="data__change">
                  {`${coin[1].eur_24h_change.toFixed(2)} %`}
                </td>
              </tr>
            )
            ))
      }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
