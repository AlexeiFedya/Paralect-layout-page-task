import React from 'react';

import { Header, Footer, Main } from './components';

function App() {
  return (
    <div className="main" id="main">
      <div className="header">
        <Header />
        <Main />
        <Footer />
    </div>
  </div>
  );
}

export default App;
