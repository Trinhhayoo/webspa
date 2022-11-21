import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutNavigation from "./layoutNavigation/LayoutNavigation";
import Home from "./Home";
import ChanMay from "./Chanmay/Chanmay";
import Moi from "./Moi/Moi";
import React, { Component }  from 'react';
const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<LayoutNavigation />}>
          <Route index element={<Home />} />
          <Route path="chanmay" element={<ChanMay />} />
          <Route path="moi" element={<Moi />} />

        
        </Route>
      </Routes>
    
  );
};

export default App;
