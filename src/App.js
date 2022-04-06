import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Option from './components/main/Option';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import RouteMain from './Route/RouteMain';
import Error from './Route/Error';

import RouteMenu from './Route/RouteFaq';
import RouteReq from './Route/RouteReq';

import './scss/common.scss';

function App (){
  return(
    <div>
      <Option />
      <Header />
      <Routes>
        <Route path='*' element={<Error />}/>
        <Route path='faq' element={<RouteMenu />} />
        <Route path='requests' element={<RouteReq />} />
        <Route path='/' element={<RouteMain />} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;