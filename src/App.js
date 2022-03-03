import React from "react";
import Option from './component/Option';
import Header from './component/Header';
import Notice from "./component/Notice";
import Main from './component/Main'
import Sub from './component/Sub'
import Footer from './component/Footer'

function App() {
  return (
    <div className='app'>
      <Option />
      <Header />
      <Notice />
      <Main />
      <Sub />
      <Footer />
    </div>
  );
}

export default App;
