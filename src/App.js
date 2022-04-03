import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Option from './comp-root/Option';
import Header from './comp-root/Header';
import Footer from './comp-root/Footer';
import Root from './compRoute/Root';
import Error from './compRoute/Error';

import RouteMenu from './compRoute/RouteFaq';
import RouteReq from './compRoute/RouteReq';

function App (){
  const titleBack='| 카카오 고객센터'
  return(
    <div>
      <Option />
      <Header />
      <Routes>
        <Route path='*' element={<Error />}/>
        <Route path='faq' element={<RouteMenu />} />
        <Route path='req' element={<RouteReq />} />
        <Route 
          path='/' 
          element={<Root 
            title={`고객센터 ${titleBack}`} 
            />} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;