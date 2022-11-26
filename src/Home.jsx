import bg from "./tenLG.png";
import spalg from "./spalg.jpg";
import avt from "./AVT2.jpg";
import logo from "./printerest2.jpg";
import phunCM from "./phun_chan_may.jpg";
import MoiLogo from "./phun_moi.jpg";
import trietlongLogo from "./triet_long.jpg";
import CSDLogo from "./csd.jpg";
import trimunLogo from "./tri_mun.jpg";
import bhHome from "./bh_Home.jpg";
import mail from "./mail.png"
import locate from "./locate.svg";
import phonecall from "./phonecall.svg";
import verticalLine from "./verticalLine.svg";
import avt1 from "./avt1.jpg";
import avt4 from "./avt4.jpg";
import arrDown from "./arrowDown.png";
import skincare from "./skincare.jpg";
import skincare1 from "./skincare2.jpg";
import fbic from "./facebook.jpg";
import inic from "./ins.jpg";
import spalgTS from "./spalh-trongsuot.jpg";
import fb1 from "./fb1.jpg";
import banner from "./banner.jpg";
import banner2 from "./banner2.jpg";
import star from "./star.jpg";

import header1 from "./header1.jpg";
import header2 from "./header2.jpg";

// import useWindowSize from "./resizeSize";
import "./Home.css";

import React, { useLayoutEffect, useState } from 'react';

import { Route } from 'react-router-dom';
import { Component } from 'react';

const Home = (props) => {
  // const [width, height] = useWindowSize();


  return (
    <div className="MainHome">
      {/* <header>
    <div className="Navigation">
          <div className="categories">
            <ul className="menu">
              <li>
                <img className="spalg-menu" src={spalg} alt="PUN" />

                <img className="right-menu" src={bg} alt="PUN" />

              </li>
              <li className="left-menu">Chân Mày</li>
              <li className="left-menu">Môi</li>
              <li className="left-menu">Triệt lông</li>
              <li className="left-menu">Trị mụn</li>
              <li className="left-menu">Chăm sóc da</li>
              <li className="left-menu">Về chúng tôi</li>
              <li className="left-menu border-tv">Tư vấn</li>
              <li className="left-menu icon-container">
                <span>
                  <img className="iconnav" src={phonecall} /></span>
                <span className="iconnav">|</span>
                <span>
                  <img className="iconnav" src={locate} /></span>
                <span className="iconnav">|</span>
                <span>
                  <img className="iconnav" src={mail} /></span>

              </li>

            </ul>
          </div>
        </div>
    </header> */}
      {/* <div className="header">
      <div className="item rong">
<div className="nen-header">
<h1 className="spa-header">SPA</h1>
<h3 className="spa-header-para" >ENJOY YOUR RELAXING TIME</h3>
<p></p>
</div>
      </div>
      <div className="item hinh1">
<img className="item hinh1" src={header1}/>
      </div>
      <div className="item hinh2">
<img className="item hinh2" src={header2} />
      </div>
      <div className="item sidebar">

      </div>


      </div> */}
      <div className="about-us">

        <div className="text-aboutUs">
          <h2 className="textAU">ABOUT US</h2>
          <hr className="line-aboutus" />

        </div>
        <div className="content-container">
          <div className="AVT">
            <div className="fadein">
              <img className=" avt f3" src={avt} />
              <img className="avt f2" src={avt1} />
              <img className="avt f1" src={avt4} />
            </div>
          </div>
          <div className="detail-about-us">



            <div className="text">
              {/* <h2 >ABOUT US</h2> */}
              <p className="pun">Spa PhươngUyên Nguyễn chúng tôi thành lập vào ngày 1/1/2020 hlksjhflk aldkjhlsdfj ljhal lfh lk lakjfhal lakhf</p>
              <button className="xem-them">Xem thêm</button>
            </div>

          </div>

        </div>




      </div>
      <div className="cac-dich-vu">
        <div className="text-aboutUs text-dv ">
          <h2 className="textAU text-cdv">Các dịch vụ</h2>
          <hr className="line-aboutus line-dv line-dv-cdv" />

        </div>
        <div className="DV-Box">
          <div className="DV Chan-may">
            <div className="overlay"></div>
            <img className="avt-dv" src={phunCM} alt="anh-dv" />
            <div className=" dv text-CM">
              <h4 className="header-text header-text-CM ">Phun xăm chân mày</h4>
              <p className="pagraph">chân mày thanh tú, sắc nét, tôn lên thần thái và vẻ đẹp của gương mặt.</p>
              <button className="button-detail">Chi tiết</button>

            </div>
          </div>
          <div className="DV moi">
            <div className="overlay"></div>
            <img className="avt-dv" src={MoiLogo} alt="anh-dv" />
            <div className="dv text-M">
              <h4 className="header-text header-text-M">Phun xăm môi</h4>
              <p className="pagraph">chân mày thanh tú, sắc nét, tôn lên thần thái và vẻ đẹp của gương mặt.</p>
              <button className="button-detail">Chi tiết</button>

            </div>

          </div>
          <div className="DV TL">
            <div className="overlay"></div>

            <img className="avt-dv" src={trietlongLogo} alt="anh-dv" />
            <div className="dv text-TL">
              <h4 className="header-text header-text-TL">Triệt lông</h4>
              <p className="pagraph">chân mày thanh tú, sắc nét, tôn lên thần thái và vẻ đẹp của gương mặt.</p>

              <button className="button-detail">Chi tiết</button>

            </div>
          </div>
          <div className="DV CSD">
            <div className="overlay"></div>

            <img className="avt-dv" src={CSDLogo} alt="anh-dv" />
            <div className="dv text-CSD">
              <h4 className="header-text header-text-CSD">Chăm sóc da</h4>
              <p className="pagraph">chân mày thanh tú, sắc nét, tôn lên thần thái và vẻ đẹp của gương mặt.</p>
              <button className="button-detail">Chi tiết</button>

            </div>

          </div>
          <div className="DV TM">
            <div className="overlay"></div>

            <img className="avt-dv" src={trimunLogo} alt="anh-dv" />
            <div className="dv text-TM">
              <h4 className="header-text header-text-TM">Trị mụn</h4>
              <p className="pagraph">chân mày thanh tú, sắc nét, tôn lên thần thái và vẻ đẹp của gương mặt.</p>
              <button className="button-detail">Chi tiết</button>

            </div>

          </div>
        </div>




      </div>
      <div className="container">
        <div className="title-feedback">
          <h2 className="title-feedback2">FEEDBACK</h2>
          <hr className="line-feedback" />
          <p>Những phản hồi từ các khách hàng về dịch vụ của chúng tôi</p>
        </div>
        <div className="content-slider">
          <div className="slider">
            <div className="mask">
              <ul>
                <li className="firstanimation">
                  <a href="#"> <img className="avt-fb" src={avt} alt="Cougar" /> </a>
                  {/* <div class="tooltip"> <h1>Cougar</h1> </div> */}
                </li>

                <li className="secondanimation">
                  <a href="#"> <img className="avt-fb" src={avt1} alt="Lions" /> </a>
                  {/* <div class="tooltip"> <h1>Lions</h1> </div> */}
                </li>

                <li className="thirdanimation">
                  <a href="#"> <img className="avt-fb" src={avt4} alt="Snowalker" /> </a>
                  {/* <div class="tooltip"> <h1>Snowalker</h1> </div> */}
                </li>

                <li className="fourthanimation">
                  <a href="#"> <img className="avt-fb" src={bg} alt="Howling" /> </a>
                  {/* <div class="tooltip"> <h1>Howling</h1> </div> */}
                </li>

                <li className="fifthanimation">
                  <a href="#"> <img className="avt-fb" src={bhHome} alt="Sunbathing" /> </a>
                  {/* <div class="tooltip"> <h1>Sunbathing</h1> </div> */}
                </li>
              </ul>

            </div>
            <div class="progress-bar"></div>
          </div>
        </div>
        <div className="content-slider2">
          <div className="vl"></div>
          <div className="slider2">
            <div className="mask2">
              <ul>
                <li className="firstanimation2">
                  <a href="#">
                    <img className="avt-fb2" src={fb1} alt="Cougar" />

                  </a>
                  {/* <div class="tooltip"> <h1>Cougar</h1> </div> */}
                </li>

                <li className="secondanimation2">
                  <a href="#"> <img className="avt-fb2" src={fb1} alt="Lions" /> </a>
                  {/* <div class="tooltip"> <h1>Lions</h1> </div> */}
                </li>

                <li className="thirdanimation2">
                  <a href="#"> <img className="avt-fb2" src={fb1} alt="Snowalker" /> </a>
                  {/* <div class="tooltip"> <h1>Snowalker</h1> </div> */}
                </li>

                <li className="fourthanimation2">
                  <a href="#"> <img className="avt-fb2" src={fb1} alt="Howling" /> </a>
                  {/* <div class="tooltip"> <h1>Howling</h1> </div> */}
                </li>

                <li className="fifthanimation2">
                  <a href="#"> <img className="avt-fb2" src={fb1} alt="Sunbathing" /> </a>
                  {/* <div class="tooltip"> <h1>Sunbathing</h1> </div> */}
                </li>
              </ul>

            </div>
            <div class="progress-bar"></div>
          </div>
        </div>
        <div className="content-slider3">
          <div className="slide-feedback  slider3">
            <div className="mask3">
              <ul>
                <li className="firstanimation2">
                  <a href="#">
                    <div>
                      <h3>Chị A</h3>
                      <div className="rate-star">
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />

                     </div>
                      <p>Sau khi mình đăng kí gói trị mụn của Spa thì sau một tháng mình đã hầu như giảm rổ rất nhiều</p>
                    </div>
                  </a>

                  <div class="tooltip">  </div>
                </li>

                <li className="secondanimation2">
                  <a href="#">
                    <div>
                      <h3>Bạn B</h3>
                      <div className="rate-star">
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />

                     </div>
                      <p>tháng mình đã hầu như giảm rổ rất nhiều</p>

                    </div>
                  </a>
                  <div class="tooltip">  </div>
                </li>

                <li className="thirdanimation2">
                  <a href="#">
                    <div>
                      <h3>Dì C</h3>
                      <div className="rate-star">
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />

                     </div>
                      <p>Sau khi mình đăng kí gói trị mụn của Spa thì sau một tháng mình đã hầu như giảm rổ rất nhiều</p>

                    </div>
                  </a>
                  <div class="tooltip"> </div>
                </li>

                <li className="fourthanimation2">
                  <a href="#">
                    <div>
                      <h3>Anh D</h3>
                      <div className="rate-star">
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />

                     </div>
                      <p>Sau khi mình đăng kí gói trị mụn của Spa thì sau một tháng mình đã hầu như giảm rổ rất nhiều</p>

                    </div>
                  </a>
                  <div class="tooltip">  </div>
                </li>

                <li className="fifthanimation2">
                  <a href="#">
                    <div>
                      <h3>Em E</h3>
                     <div className="rate-star">
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />
                     <img className="star-a" src={star} alt="star danh gia" />

                     </div>
                      <p>Sau khi mình đăng kí gói trị mụn của Spa thì sau một tháng mình đã hầu như giảm rổ rất nhiều</p>

                    </div>
                  </a>
                  <div class="tooltip">  </div>
                </li>
              </ul>

            </div>
            <div className="progress-bar"></div>

          </div>
        </div>
      </div>
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
      {/* <footer className="foter">
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
                      <img className="iconnav img-dc " src={locate} /></span>
                    <p className="foter-ic foter-dc">QL27, Thạch Hà 1, Quảng Sơn, Ninh Sơn, Ninh Thuận</p>
                  </li>
                  <li className="each-info">
                    <span>
                      <img className="iconnav img-phone " src={phonecall} /></span>
                    <p className="foter-ic foter-phone">0342235673</p>
                  </li>

                  <li className="each-info">

                    <span>
                      <img className="iconnav img-mail " src={mail} /></span>
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
 */}


    </div>
  );
};

export default Home;
