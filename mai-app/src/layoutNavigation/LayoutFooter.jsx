import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";

const LayoutFooter = () => {
  return (
    <>
    <Outlet />
      <Footer />
      
    </>
  );
};

export default LayoutFooter;