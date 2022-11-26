import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import mail from "../mail.png"
import locate from "../locate.svg";
import phonecall from "../phonecall.svg";
import fbic from "../facebook.jpg";
import inic from "../ins.jpg";
import spalgTS from "../spalh-trongsuot.jpg";
import arrDown from "../arrowDown.png";

import skincare1 from "../skincare2.jpg";

import "./Footer.css";
const Footer = () => {
    return (
        <div>
         <div className="TV">
        <div className="title-feedback">
          <h2 className="title-feedback2 title-tv1">TƯ VẤN</h2>
          {/* <h2 className="title-feedback2">FEEDBACK</h2> */}
          <hr className="line-feedback line-tv" />

        </div>

        <div className="hinh-anh-TV">
          <img className="skincare-image" src={skincare1} />
          <h1 className="title-tv">FOR SPA </h1>
          <hr className="h-r" />
          <h1 className="title-tv2">BEAUTY PROFESSIONALS</h1>
          <hr className="h-r2" />

        </div>
        <div className="form-dien">
          <label for="input" className="Input-label">Your Name</label>
          <br className="straight-line" />
          <input type="text" className="Input-text input" />
          <br />

          <label for="input" className="Input-label">Phone Number</label>
          <br className="straight-line" />
          <input type="text" className="Input-text input" />
          <br />
          <div className="ser">
            <label for="input" className="Input-label">Kind of Serves</label>
            <br className="straight-line" />
            <input type="text" className="Input-text serve" />
            <img className="arrown-down" src={arrDown} alt="Cougar" />
          </div>
          <br />
          <label for="input" className="Input-label demand-text">Your demand</label>
          <br className="straight-line" />
          <input type="text" className="Input-text demand" />
          <br />

          <button className="submit-demand">Send Your Demand</button>
        </div>

      </div>
<footer className="foter">
            <div className="information-container">
                <div className="inside-container">
                    <div className="divide-container">
                        <div className="logo-foter">
                            <img className="logo-footer" src={spalgTS} alt="PUN" />
                            <h3>PHUONG UYEN NGUYEN</h3>
                            <p className="beauty">Beauty and Spa</p>
                            <br />
                            <br />
                            <br />
                            <img className="fbic" src={fbic} />
                            <img className="inic" src={inic} />

                        </div>
                        <div className="lien-he">
                            <h2 className="lh title-foter">LIÊN HỆ</h2>
                            <ul className="info">
                                <li className="each-info">
                                    <span>
                                        <img className="iconnav ic-footer img-dc " src={locate} /></span>
                                    <p className="foter-ic foter-dc">QL27, Thạch Hà 1, Quảng Sơn, Ninh Sơn, Ninh Thuận</p>
                                </li>
                                <li className="each-info">
                                    <span>
                                        <img className="iconnav ic-footer img-phone " src={phonecall} /></span>
                                    <p className="foter-ic foter-phone">0342235673</p>
                                </li>

                                <li className="each-info">

                                    <span>
                                        <img className="iconnav ic-footer img-mail " src={mail} /></span>
                                    <p className="foter-ic foter-mail">phuonguyen998@gmail.com</p>
                                </li>



                            </ul>
                        </div>
                        <div className="active-hour">
                            <h2 className="title-foter">SPA</h2>
                            <ul className="active-list">
                                <li className="time-li">Thời gian hoạt động: Thứ 2 - Chủ Nhật </li>
                                <li className="time-li">Giờ mở cửa: 8h - 19h</li>

                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </footer>
        </div>
        
    );
};
export default Footer;

