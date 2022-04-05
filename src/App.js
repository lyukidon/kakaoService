import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Option from './comp-root/Option';
import Header from './comp-root/Header';
import Footer from './comp-root/Footer';
import Root from './Route/Root';
import Error from './Route/Error';

import RouteMenu from './Route/RouteFaq';
import RouteReq from './Route/RouteReq';

function App (){
  const titleBack='| 카카오 고객센터'
  return(
    <div>
      <Option />
      <Header />
      <Routes>
        <Route path='*' element={<Error />}/>
        <Route path='faq' element={<RouteMenu />} />
        <Route path='requests' element={<RouteReq />} />
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