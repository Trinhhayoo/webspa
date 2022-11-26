import React from "react";
import background from "./background.jpg";
import phunXam from "./phunMay.jpg";
import soiXam from "./soiXam.jpg";
import behindImg from "./behind_img.jpg";
// import { Nav, NavLink, NavMenu } 
//     from "./NavbarElements";
import "./ChanMay.css";
const ChanMay = () => {
  return (
    <div className="ChanMay-container">
      <div className="inside-chanmay" >
        <div className="header-chanmay">
          <h1 className="PXTM">PHUN XĂM THẨM MỸ CHÂN MÀY</h1>
        </div>
        <div className="content-container">
          <div className="PhunXam">
            <div className="itemPx">
            <img className=" img-behind-pm" src={behindImg} />
            <img className=" img-pm" src={phunXam} />
            </div>
            
            <div className="wrap-px">
              <div className="itemPx" >
                <h3 className="title-cm">PHUN XĂM CHÂN MÀY THẨM MỸ</h3>
                <p className="para-cm">Phun xăm chân mày thẩm mỹ ok nha ok nhé ừ nè tối rồi đó cố lên</p>
              </div>
              <div className="itemPx" >
                <h3 className="title-cm" >Những điều cần tránh</h3>

                <ul>
                  <li className="para-cm">không nên</li>
                  <li className="para-cm">Phù hợp với</li>
                  <li className="para-cm">Nên làm</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="soiXam">
            <div className="wrap-sx">
              <div className="itemSX">
                <h3 className="title-cm">PHUN XĂM CHÂN MÀY THẨM MỸ</h3>
                <p className="para-cm">Phun xăm chân mày thẩm dang lam gi do hom nay code nhieu qua mỹ ok nha ok nhé ừ nè tối rồi đó cố lên</p>
              </div>
              <div className="itemSX" >
                <h3 className="title-cm" >Những điều cần tránh</h3>
                <ul>
                  <li className="para-cm">không nên</li>
                  <li className="para-cm">Phù hợp với</li>
                  <li className="para-cm">Nên làm</li>
                </ul>
              </div>
            </div>
            <div className="itemSX anh-sx">
          
            <img className="itemSX img-sx" src={soiXam} />
            <img className=" img-behind-sx" src={behindImg} />
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChanMay;