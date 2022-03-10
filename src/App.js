import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Option from './comp-root/Option';
import Header from './comp-root/Header';
import Footer from './comp-root/Footer';
import Root from './compRoute/Root';
import Kakaotalk from './compRoute/Kakaotalk';
import General from './compRoute/General';

function App (){
  const titleBack='| 카카오 고객센터'
  return(
    <div>
      <Option />
      <Header />
      <Routes>
        <Route 
          path='/' 
          element={<Root 
                    title={`고객센터 ${titleBack}`} 
                  />} 
        />
        <Route 
          path='/kakaotalk' 
          element={<Kakaotalk
                    title={`카카오톡 - 유용한 도움말 ${titleBack}`}
                  />} 
        />
        <Route
          path='/kakaotalk/general'
          element={<General
                      title={`카카오톡 - 일반 ${titleBack}`}
                  />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;