import ReactDOM from "react-dom";
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutNavigation from "./layoutNavigation/LayoutNavigation";
import Home from "./Home";
import ChanMay from "./Chanmay/Chanmay";
import Moi from "./Moi/Moi";
import TrietLong from "./TrietLong/TrietLong";
import React, { Component }  from 'react';
import useWindowSize from "./resizeSize";
import TriMun from "./TriMun/TriMun";
import ChamSocDa from "./ChamSocDa/ChamSocDa";
const App = () => {
const {width} = useWindowSize();

  return (
  
      <Routes>
        <Route path="/" element={<LayoutNavigation />}>
          <Route index element={<Home />} />
          <Route path="chanmay" element={<ChanMay />} />
          <Route path="moi" element={<Moi />} />
          <Route path="trimun" element={<TriMun />} />
          <Route path="trietlong" element={<TrietLong />} />
          <Route path="chamsocda" element={<ChamSocDa />} />

        </Route>
      </Routes>
    
  );
};

export default App;
