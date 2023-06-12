import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import mail from "../mail.png";
import locate from "../locate.svg";
import phonecall from "../phonecall.svg";
import bg from "../tenLG.png";
import spalg from "../spalg.jpg";
import menu from "./menu.jpg";

import header1 from "../header1.jpg";
import header2 from "../header2.jpg";


import "./Navigation.css";

function Navbar() {
  const Componen = ({ }) => {

    const [title, setTitle] = React.useState("");
    const mouse = () => {
      setTimeout(() => {
        setTitle("0389854408")
      }, 10);
    }
    const mouseNot = () => {
      setTitle("")
    }
    return (
      <div>
        <ChildComponent onMouseEnter={mouse} onMouseLeave={mouseNot} />
        {title}
      </div>

    )
  }

  const ChildComponent = ({ onMouseEnter, onMouseLeave }) => (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img className=" left-menu iconnav" src={phonecall} />

    </div>
  )
  const Componen2 = ({ }) => {

    const [title, setTitle] = React.useState("");
    const mouse2 = () => {
      setTimeout(() => {
        setTitle("QL27, Thạch Hà 1, Quảng Sơn, Ninh Sơn, Ninh Thuận")
      }, 10);
    }
    const mouseNot2 = () => {
      setTitle("")
    }
    return (
      <div>
        <ChildComponent2 onMouseEnter={mouse2} onMouseLeave={mouseNot2} />
        {title}
      </div>

    )
  }

  const ChildComponent2 = ({ onMouseEnter, onMouseLeave }) => (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img className=" left-menu iconnav" src={locate} />

    </div>
  )
  const Componen3 = ({ }) => {

    const [title, setTitle] = React.useState("");
    const mouse3 = () => {
      setTimeout(() => {
        setTitle("phuonguyenn988@gmail.com")
      }, 10);
    }
    const mouseNot3 = () => {
      setTitle("")
    }
    return (
      <div>
        <ChildComponent3 onMouseEnter={mouse3} onMouseLeave={mouseNot3} />
        {title}
      </div>

    )
  }

  const ChildComponent3 = ({ onMouseEnter, onMouseLeave }) => (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img className=" left-menu iconnav" src={mail} />

    </div>
  )
  const menuItems = [
    'Chân Mày', 'Môi', 'Triệt Lông', 'Trị Mụn', 'Chăm Sóc Da', 'Về chúng tôi'
  ];
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  const [HEADER, setHEADER] = useState("");
  useEffect(() => {
    if (splitLocation[1] === "") {
      setHEADER("PHƯƠNG UYÊN NGUYỄN SPA");
    } else if (splitLocation[1] === "chanmay") {
      setHEADER("PHUN XĂM CHÂN MÀY THẨM MỸ");

    }
    else if (splitLocation[1] === "moi") {
      setHEADER("PHUN XĂM MÔI THẨM MỸ");

    }

  }, [splitLocation[1]]);


  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }


  return (
    <div>
      <nav>
        <div className="Navigation-container">


          {/* <header> */}
          {/* <div className="Navigation"> */}
          <div className="categories">
            <ul className="menu">

              <li>
                <Link activeStyle={{ color: '#5754a8' }} to="/">
                  <img className="header-ic1 spalg-menu" src={spalg} alt="PUN" />

                  <img className=" header-ic2  right-menu" src={bg} alt="PUN" />
                </Link>
              </li>
              <li className="left-menu">
                <Link activeStyle={{ color: '#5754a8' }} to="/chanmay">Chân Mày</Link>
              </li>
              <li className="left-menu">
                <Link activeStyle={{ color: '#5754a8' }} to="/moi">Môi</Link>

              </li>
              <li className="left-menu">
                <Link activeStyle={{ color: '#5754a8' }} to="/trietlong">Triệt Lông</Link>

              </li>
              <li className="left-menu">
                <Link activeStyle={{ color: '#5754a8' }} to="/trimun">Trị Mụn</Link>

              </li>
              <li className="left-menu">
                <Link activeStyle={{ color: '#5754a8' }} to="/chamsocda">Chăm Sóc Da</Link>

              </li>
              {/* <li className="left-menu">
                <Link activeStyle={{ color: '#5754a8' }} to="/chanmay">Về Chúng Tôi</Link>

              </li> */}
              <li className="left-menu border-tv">
                <Link activeStyle={{ color: '#5754a8' }} onClick={handleScroll}>Tư Vấn</Link>

              </li>
              <li className="left-menu icon-container">
             
                <span>
                  <Link activeStyle={{ color: '#5754a8' }} >

                    <Componen  >

                    </Componen>
                  </Link>
                </span>
                <span className=" left-menu iconnav">|</span>
                <span>
                  <Link activeStyle={{ color: '#5754a8' }}>

                    <Componen2></Componen2>
                  </Link>
                </span>
                <span className=" left-menu iconnav">|</span>
                <span>
                  <Link activeStyle={{ color: '#5754a8' }}>
                    <Componen3></Componen3>

                  </Link>
                </span>

              </li>

            </ul>
          </div>
          {/* </div> */}
          {/* </header> */}



        </div>

      </nav>
      <div className="header">
        <div className="item rong">
          <div className="nen-header">
            <h1 className="spa-header">SPA</h1>
            <h3 className="spa-header-para" >ENJOY YOUR RELAXING TIME</h3>
            <p></p>
          </div>
        </div>
        {/* <div className="item hinh1"> */}
        <img className="item hinh1" src={header1} />
        {/* </div> */}
        {/* <div className="item hinh2"> */}
        <img className="item hinh2" src={header2} />
        {/* </div> */}
        <div className="item sidebar">

        </div>


      </div>
      <div className="header-chanmay">
        <h1 className="PXTM">{HEADER}</h1>
        <h3 className="Hour-active">HOẠT ĐỘNG: 8:00 - 18:00</h3>
      </div>
    </div>
  );
}

export default Navbar;