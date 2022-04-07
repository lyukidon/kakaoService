import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/main/Footer';
import Main from './Route/Main';
import Error from './Route/Error';
import Admin from './Route/Admin';

import Menu from './Route/Faq';
import Req from './Route/Req';
import Login from './Route/Login';

import './scss/common.scss';

function App (){
  return(
    <div>
      <Routes>
        <Route path='*' element={<Error />}/>
        <Route path='faq' element={<Menu />} />
        <Route path='requests' element={<Req />} />
        <Route path='login' element={<Login />} />
        <Route path='admin' element={<Admin />} />
        <Route path='/' element={<Main />} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;