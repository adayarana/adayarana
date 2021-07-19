import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer-container" data-testid="footer-container">
      <div className="footer-container__social-links">
        <em className="fab fa-github" />
        <em className="fab fa-app-store" />
        <em className="fab fa-google" />
      </div>
      <div className="footer-container__details">
        <div className="details__text">
          <p><a href="/">About Us</a></p>
          <p><a href="/">Terms of use</a></p>
          <p><a href="/">Privacy Policy</a></p>
        </div>
        <div className="details__info">
          <p>Powered by CoinGecko API</p>
          <p>Made with 🤍 💙 💛 in 🇮🇨</p>
          <p>Copyright 2021 © @adayarana</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
