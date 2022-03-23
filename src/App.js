import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Option from './comp-root/Option';
import Header from './comp-root/Header';
import Footer from './comp-root/Footer';
import Root from './compRoute/Root';
import RouteMenu from './compRoute/RouteMenu';
import Request from './comp-request/Request';

function App (){
  const titleBack='| 카카오 고객센터'
  return(
    <div>
      <Option />
      <Header />
      <Routes>
        <Route  path='helps' element={<RouteMenu />}>
          <Route  path='?'element={<RouteMenu />}></Route>
        </Route>
        <Route path='requests' element={<Request />}></Route>
        <Route 
          path='/' 
          element={<Root 
            title={`고객센터 ${titleBack}`} 
            />} 
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;