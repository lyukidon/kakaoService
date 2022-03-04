import React from "react";
import Option from '../comp-root/Option';
import Header from '../comp-root/Header';
import Notice from "../comp-root/Notice";
import Main from '../comp-root/Main'
import Sub from '../comp-root/Sub'
import Footer from '../comp-root/Footer'

function Root() {
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

export default Root;
