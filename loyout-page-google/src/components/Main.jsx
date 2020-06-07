import React from 'react';

import logoImg from '../assets/logo.png';
import microImg from '../assets/micro.png';

const Main = () => (
    <div id="body">
    <div className="content">
      <div className="logo">
        <div>
          <img className="logo" alt='logo' src={logoImg} />
        </div>
      </div>
      <div className = "search">
        <input type="text" className= "request" style ={{ fontSize: 14 }}/>
        <img alt='microphone' src={microImg} className = "micro"/>
    </div>
      <div className="main-buttons-box">
        <div className="button-wrap">
          <div className="search-button">Поиск в Google</div>
        </div>
        <div className="button-wrap">
          <div href="https://www.google.com/doodles" className="search-button">Мне повезет!</div>
        </div>
      </div>
    </div>
  </div>
);

export default Main;
