import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import mail from "../mail.png";
import locate from "../locate.svg";
import phonecall from "../phonecall.svg";
import bg from "../tenLG.png";
import spalg from "../spalg.jpg";
import menu from "./menu.jpg";

import "./Navigation.css";
function Navbar() {
  const menuItems = [
    'Chân Mày', 'Môi', 'Triệt Lông', 'Trị Mụn', 'Chăm Sóc Da', 'Về chúng tôi'
 ];
 
 class MenuExample extends React.Component {
 
   _handleClick(menuItem) { 
     this.setState({ active: menuItem });
   }
 
   render () { 
     const activeStyle = { color: '#ff3333' };
 
     return (
        <div className='menu'>  
          {menuItems.map(menuItem => 
             <Link 
              style={this.state.active === menuItem ? activeStyle : {}} 
              onClick={this._handleClick.bind(this, menuItem)}
             > 
               {menuItem}
             </Link>
          )}
        </div>
     );    
   }
 }
  return (
    <nav>
      <div className="Navigation-container">
      

              {/* <header> */}
                {/* <div className="Navigation"> */}
                  <div className="categories">
                    <ul className="menu">

                      <li>
                        <Link activeStyle={{ color:'#5754a8' }} to = "/">
                          <img className="header-ic1 spalg-menu" src={spalg} alt="PUN" />

                          <img className=" header-ic2  right-menu" src={bg} alt="PUN" />
                        </Link>
                      </li>
                      <li className="left-menu">
                        <Link activeStyle={{ color:'#5754a8' }} to="/chanmay">Chân Mày</Link>
                      </li>
                      <li className="left-menu">
                        <Link activeStyle={{ color:'#5754a8' }} to="/chanmay">Môi</Link>

                      </li>
                      <li className="left-menu">
                        <Link activeStyle={{ color:'#5754a8' }} to="/chanmay">Triệt Lông</Link>

                      </li>
                      <li className="left-menu">
                        <Link activeStyle={{ color:'#5754a8' }} to="/chanmay">Trị Mụn</Link>

                      </li>
                      <li className="left-menu">
                        <Link activeStyle={{ color:'#5754a8' }} to="/chanmay">Chăm Sóc Da</Link>

                      </li>
                      <li className="left-menu">
                        <Link activeStyle={{ color:'#5754a8' }} to="/chanmay">Về Chúng Tôi</Link>

                      </li>
                      <li className="left-menu border-tv">
                        <Link activeStyle={{ color:'#5754a8' }} to="/chanmay">Tư Vấn</Link>

                      </li>
                      <li className="left-menu icon-container">
                        <span>
                          <Link activeStyle={{ color:'#5754a8' }}>
                            <img className=" left-menu iconnav" src={phonecall} />
                          </Link>
                        </span>
                        <span className=" left-menu iconnav">|</span>
                        <span>
                          <Link activeStyle={{ color:'#5754a8' }}>
                            <img className=" left-menu iconnav" src={locate} />
                          </Link>
                        </span>
                        <span className=" left-menu iconnav">|</span>
                        <span>
                          <Link activeStyle={{ color:'#5754a8' }}>
                            <img className=" left-menu iconnav" src={mail} />
                          </Link>
                        </span>

                      </li>

                    </ul>
                  </div>
                {/* </div> */}
              {/* </header> */}
           
         

        </div>
        <div className="option-icon">
          <img  className = "option-img" src={menu}/>
        </div>
     

    </nav>
  );
}

export default Navbar;