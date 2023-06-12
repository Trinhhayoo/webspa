import React from "react";
import { useEffect, useState } from "react";

import Slideshow from "../SlideShow/SlideShow";

import MyPham from "../MyPham/MyPham";
import ketqua1 from "./ketqua.jpg";
import ketqua2 from "./ketqua2.jpg";
import ketqua3 from "./ketqua3.jpg";
import ketqua4 from "./ketqua4.jpg";
import ketqua5 from "./ketqua5.jpg";
import ex from "./example.jpg";

// import { Nav, NavLink, NavMenu } 
//     from "./NavbarElements";
import "./TriMun.css";
const TriMun = () => {
    return (
        <div className="ChanMay-container">
            <div className="inside-chanmay" >

                <div className="content-container">
                    <div>

                        <h2>ĐIỀU TRỊ MỤN CHUYÊN SÂU</h2>
                        <div className="shortcode_hlight"><p><strong><a href="https://vienthammydiva.vn/dich-vu-phun-may-ombre/">Điều trị mụn</a> </strong> là vấn đề rất nhiều người quan tâm, mong muốn loại bỏ những nốt mụn xấu xí, gây mất thẩm mỹ trên gương mặt, cải thiện sức khỏe làn da tốt hơn.
                        </p></div>

                    </div>


                    <div>
                        <div>
                            <p className="space">CÁC LOẠI MỤN</p>
                            <ul>
                                <li>
                                    <span> <strong>Mụn đầu trắng (mụn cám):</strong>nằm gọn trong các lỗ chân lông, không nổi trên bề mặt.</span>
                                </li>
                                <li>
                                    <span><strong>Mụn đầu đen:</strong>một phần nhân mụn xuất hiện trên bề mặt da, đầu mụn có màu đen.
                                    </span>
                                </li>

                            </ul>
                            <img className="ex-img" src={ex} />
                        </div>
                        <div>
                            <p className="space">NGUYÊN NHÂN GÂY RA MỤN</p>

                            <p><span><span>1.</span>Rối loạn nội tiết tố</span></p>
                            <p><span><span>2.</span> Do di truyền

                            </span></p>
                            <p><span ><span>3.</span>Khói bụi, bụi bẩn từ môi trường.&nbsp;</span></p>
                            <p><span ><span >4.</span> Chế độ sinh hoạt, ăn uống không hợp lí.&nbsp;</span></p>
                            <p><span ><span >5.</span> Lạm dụng mỹ phẩm.&nbsp;</span></p>
                            <p><span></span></p>
                        </div>
                    </div>
                    <div>



                    </div>

                </div>
            </div>

            <p className="space">CAM KẾT KHI ĐIỀU TRỊ MỤN CHUYÊN SÂU TẠI PHƯƠNG UYÊN NGUYỄN SPA</p>
            <div className="shortcode_node"><p></p>
                <p><span><span>✓</span> Hiệu quả lên đến 99% sau 1-3 tháng điều trị</span></p>
                <p><span><span>✓</span> Kĩ thuật nặn mụn không để lại sẹo</span></p>
                <p><span ><span>✓</span> Kích thích tăng sinh collagen tái tạo da

                    .&nbsp;</span></p>
                <p><span ><span>✓</span> Quy trình đảm bảo an toàn y tế và sức khỏe cho khách hàng.&nbsp;</span></p>


            </div>

            <div className="content-slider">
            <p className="space">FEEDBACK SAU KHI ĐIỀU TRỊ MỤN TẠI PHƯƠNG UYÊN NGUYỄN SPA</p>
                <div className="slider-TriMun">
                    <div className="mask">
                        <ul>
                            <li className="firstanimation">
                                <a href="#"> <img className="avt-fb" src={ketqua1} alt="Cougar" /> </a>
                                {/* <div class="tooltip"> <h1>Cougar</h1> </div> */}
                            </li>

                            <li className="secondanimation">
                                <a href="#"> <img className="avt-fb" src={ketqua2} alt="Lions" /> </a>
                                {/* <div class="tooltip"> <h1>Lions</h1> </div> */}
                            </li>

                            <li className="thirdanimation">
                                <a href="#"> <img className="avt-fb" src={ketqua3} alt="Snowalker" /> </a>
                                {/* <div class="tooltip"> <h1>Snowalker</h1> </div> */}
                            </li>

                            <li className="fourthanimation">
                                <a href="#"> <img className="avt-fb" src={ketqua4} alt="Howling" /> </a>
                                {/* <div class="tooltip"> <h1>Howling</h1> </div> */}
                            </li>

                            <li className="fifthanimation">
                                <a href="#"> <img className="avt-fb" src={ketqua5} alt="Sunbathing" /> </a>
                                {/* <div class="tooltip"> <h1>Sunbathing</h1> </div> */}
                            </li>
                        </ul>

                    </div>
                    <div class="progress-bar"></div>
                </div>
            </div>

<br></br>
            <div>
                <MyPham />

            </div>

        </div>
    );
};

export default TriMun;