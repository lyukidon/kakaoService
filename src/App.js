import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Option from './comp-root/Option';
import Header from './comp-root/Header';
import Root from './compRoute/Root'
import Kakaotalk from './compRoute/Kakaotalk';

function App (){
  return(
    <div>
      <Option />
      <Header />
      <Routes>
        <Route path='/' element={<Root/>} />
        <Route path='/kakaotalk' element={<Kakaotalk/>} />
      </Routes>
    </div>
  );
}

export default App;