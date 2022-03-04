import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Root from './compRoute/Root'
import Kakaotalk from './compRoute/Kakaotalk';

function App (){
  return(
      <Routes>
        <Route path='/' element={<Root/>} />
        <Route path='/kakaotalk' element={<Kakaotalk/>} />
      </Routes>
  );
}

export default App;