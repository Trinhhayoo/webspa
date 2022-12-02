import React,  { useState } from "react";
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from "react-router-dom";

import FormTuVan from "../Form/Form";


import mail from "../mail.png"
import locate from "../locate.svg";
import phonecall from "../phonecall.svg";
import fbic from "../facebook.jpg";
import inic from "../ins.jpg";
import spalgTS from "../spalh-trongsuot.jpg";
import arrDown from "./arrowDown.png";
import skincare1 from "../skincare2.jpg";

import "./Footer.css";


// const DropDownContainer = styled("div")``;
// const DropDownHeader = styled("div")``;
// const DropDownListContainer = styled("div")``;
// const DropDownList = styled("ul")``;
// const ListItem = styled("li")``;
const options = ["Chân Mày", "Môi", "Trị Mụn", "Chăm Sóc Da", "Triệt Lông"];
const Main = styled("div")`
  font-family: sans-serif;
  ${'' /* background: #f0f0f0; */}
  height: 70vh;
`;

const DropDownContainer = styled("div")`
  width: 15em;
 
`;

const DropDownHeader = styled("div")`
  ${'' /* margin-bottom: 0.8em; */}
  padding: 0.2em 2em 0.2em 1em;

  border: 5px;
  background-color: grey;
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;

`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;


const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <div>
          <FormTuVan />
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

