import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import mail from "../mail.png";
import locate from "../locate.svg";
import phonecall from "../phonecall.svg";
import bg from "../tenLG.png";
import spalg from "../spalg.jpg";
import "./Navigation.css";
function Navbar() {
  return (
    <nav>
      <div className="Navigation-container">
      

              <header>
                <div className="Navigation">
                  <div className="categories">
                    <ul className="menu">

                      <li>
                        <Link to = "/">
                          <img className="spalg-menu" src={spalg} alt="PUN" />

                          <img className="right-menu" src={bg} alt="PUN" />
                        </Link>
                      </li>
                      <li className="left-menu">
                        <Link to="/chanmay">Chân Mày</Link>
                      </li>
                      <li className="left-menu">
                        <Link to="/chanmay">Môi</Link>

                      </li>
                      <li className="left-menu">
                        <Link to="/chanmay">Triệt Lông</Link>

                      </li>
                      <li className="left-menu">
                        <Link to="/chanmay">Trị Mụn</Link>

                      </li>
                      <li className="left-menu">
                        <Link to="/chanmay">Chăm Sóc Da</Link>

                      </li>
                      <li className="left-menu">
                        <Link to="/chanmay">Về Chúng Tôi</Link>

                      </li>
                      <li className="left-menu border-tv">
                        <Link to="/chanmay">Tư Vấn</Link>

                      </li>
                      <li className="left-menu icon-container">
                        <span>
                          <Link>
                            <img className="iconnav" src={phonecall} />
                          </Link>
                        </span>
                        <span className="iconnav">|</span>
                        <span>
                          <Link>
                            <img className="iconnav" src={locate} />
                          </Link>
                        </span>
                        <span className="iconnav">|</span>
                        <span>
                          <Link>
                            <img className="iconnav" src={mail} />
                          </Link>
                        </span>

                      </li>

                    </ul>
                  </div>
                </div>
              </header>
           
         

        </div>
     

    </nav>
  );
}

export default Navbar;