import React from 'react';
import apps from '../assets/apps.png'

const Header = () => (
    <div className="links right">
      <div className="box-links">
        <div className="link-wrap">
          <a href="https://mail.google.com" className="link-text">Почта</a>
        </div>
        <div className="link-wrap">
          <a href="https://www.google.by/imghp" className="link-text">Картинки</a>
        </div>
      </div>
      <div className="box-buttons">
          <div className="apps-button-wrap">
            <img src={apps} alt='apps'  className="apps-button" id="apps"/>
          <div className="button-wrap">
            <button className="signIn-button">Войти</button>
          </div>
        </div>              
      </div>  
    </div>
);

export default Header;
