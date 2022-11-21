import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const LayoutNavigation = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer  />
    </>
  );
};

export default LayoutNavigation;