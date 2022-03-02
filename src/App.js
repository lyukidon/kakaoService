import React from "react";
import Header from './component/Header';
import Notice from "./component/Notice";
import Main from './component/Main'
import Sub from './component/Sub'
import Footer from './component/Footer'

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Header />
      <Notice />
      <Main />
      <Sub />
      <Footer />
    </div>
  );
}

export default App;
