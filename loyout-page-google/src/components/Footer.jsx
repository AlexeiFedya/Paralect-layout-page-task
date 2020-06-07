import React from 'react';

const Footer = () => (
    <div id="footer">
    <div className="links left">
      <div className="box-links">
        <div className="link-wrap">
          <a href="https://www.google.by/intl/ru_by/ads/" className="link-text">Реклама</a>
        </div>
        <div className="link-wrap">
          <a href="https://www.google.by/intl/ru/services" className="link-text">Для бизнеса</a>
        </div>
        <div className="link-wrap">
          <a href="https://www.google.by/intl/ru_by/about" className="link-text">Всё о Google</a>
        </div>
      </div>
    </div>
    <div className="links">
      <div className="box-links">
        <div className="link-wrap">
          <a href="https://www.google.by/intl/ru_by/policies/privacy" className="link-text">Конфиденциальность</a>
        </div>
        <div className="link-wrap">
          <a href="https://www.google.by/intl/ru_by/policies/terms/regional.html" className="link-text">Условия</a>
        </div>
        <div className="link-wrap">
          <div className="link-text">Настройки</div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
