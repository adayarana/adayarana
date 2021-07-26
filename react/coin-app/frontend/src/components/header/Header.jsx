import React, { useState } from 'react';
import './Header.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const [enabled, setEnabled] = useState(false);
  const [search, setSearch] = useState('');
  const coins = useSelector((store) => Object.entries(store.coins));
  const user = useSelector((store) => store.user);

  function handleFilter(event) {
    event.preventDefault();
    setSearch(event.target.value);
    const text = event.target.value;
    const newSearchEqual = coins.filter((coin) => coin[0] === text);
    const newSearch = coins.filter((coin) => coin[0].includes(search));
    console.log(newSearchEqual);
    console.log(newSearch);
  }

  return (
    <header className="header-container">
      <div className="header-container__nav-logo">
        <div>
          <Link className="nav-link" to="/">
            CoinApp
          </Link>
          <em className="fab fa-btc" />
        </div>
        <button type="button" label="button" className="nav-menu-button" onClick={() => setEnabled(!enabled)} data-testid="nav-menu-button">
          <em className={enabled ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
      </div>
      <nav className="header-container__nav-menu">
        <ul className={enabled ? 'nav-menu__mobile--open' : 'nav-menu__mobile--close'} data-testid="nav-menu">
          <li>
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/log">
              {
                !user.token ? (<data>Log In</data>)
                  : (<data>Log Out</data>)
              }
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </li>
          <li>
            <button className="input-link" type="button" label="button">
              <em className="fas fa-moon" />
            </button>
          </li>
          <li>
            <form className="nav-menu__form">
              <input
                className="input-link search"
                name="search"
                type="search"
                placeholder="Search"
                value={search}
                onChange={(event) => handleFilter(event)}
              />
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
