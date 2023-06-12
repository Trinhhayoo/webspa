import React from "react";
import { useEffect, useState } from "react";


import Slideshow from "../SlideShow/SlideShow";

import MyPham from "../MyPham/MyPham";

// import { Nav, NavLink, NavMenu } 
//     from "./NavbarElements";
import "./Moi.css";
const Moi = () => {
  return (
    <div className="ChanMay-container">
      <div className="inside-chanmay" >

        <div className="content-container">
          <div>

            <h2>KHỬ THÂM MÔI</h2>
            <div className="shortcode_hlight"><p><strong><a href="https://vienthammydiva.vn/dich-vu-phun-may-ombre/">Khử thâm môi</a> </strong>  là một công nghệ giải quyết được tình trạng môi thâm bằng việc sử dụng đầu kim siêu vi kết hợp cùng màu mực tự nhiên tác động nhẹ nhàng vào lớp thượng bì của môi, giúp loại bỏ các tình trạng môi thâm, nứt nẻ, xỉn màu,khô ráp.Kỹ thuật xử lý thâm môi nhẹ nhàng, không xâm lấn mang lại đôi môi hồng hào, gợi cảm, không còn thâm tái.
            </p></div>

          </div>
          <Slideshow
            interval={3000}
            images={[
              // '/moigoc.jpg',


              '/khutham.jpg',
              '/khu_saubong.jpg',
              '/khu_saubong2.jpg',
              '/moisau.jpg',
              '/phun_khu.jpg',
              '/khutham_phun.jpg',
              '/moigoc2.jpg'




            ]}
          />


          <div>
            <div>
              <p className="space">THỜI ĐIỂM NÊN KHỬ THÂM MÔI</p>
              <ul>
                <li>
                  Môi với màu thâm xỉn, nhợt nhạt, thiếu sức sống
                </li>
                <li>
                  Môi không đều màu, màu môi loang lổ gây mất thẩm mỹ
                </li>
                <li>
                  Môi khô sần, nứt nẻ và hay bong tróc
                </li>
                <li>
                  Muốn loại bỏ màu môi thâm vĩnh viễn để sở hữu một đôi môi tươi tắn, hồng hào tự nhiên
                </li>
                <li>
                  Vừa bận rộn vừa lười và không muốn tốn thời gian vào việc son môi cũng như thực hiện các phương pháp trị môi thâm khác
                </li>
              </ul>
            </div>
            <div>
              <p  className="space">ƯU ĐIỂM CỦA KHỬ THÂM MÔI</p>
              <div className="shortcode_node"><p></p>
                <p><span><span>✓</span> Thời gian thực hiện nhanh chóng, không tốn thời gian nghỉ dưỡng</span></p>
                <p><span><span>✓</span> Kỹ thuật phun môi khử thâm nhẹ nhàng, đạt độ chuẩn xác cao, không xâm lấn, không sưng, không gây đau đớn, an toàn tuyệt đối</span></p>
                <p><span ><span>✓</span> Loại bỏ làn môi thâm sạm, thiếu sức sống, ngăn chặn tình trạng thâm môi trở lại.&nbsp;</span></p>
                <p><span ><span >✓</span> Đem lại đôi môi hồng hào, tươi tắn, mềm mại hơn.&nbsp;</span></p>

                <p><span></span></p></div>
            </div>
          </div>
          <div>

            <h2>PHUN XĂM MÔI THẨM MỸ</h2>
            <div className="shortcode_hlight"><p><strong><a href="https://vienthammydiva.vn/dich-vu-phun-may-ombre/">Phun môi</a></strong> là kỹ thuật sử dụng các bút phun thêu có gắn đầu kim siêu nhỏ để tác động lên môi. Các đầu kim sẽ phun mực tạo màu cho lớp thượng bì da môi, nhờ đó vừa tạo màu môi vừa cải thiện tình trạng môi bị thâm, nhợt nhạt kém sức sống. Sau khi thực hiện phun môi bạn sẽ có một đôi môi gợi cảm, mịn màng và căng tràn sức sống.

            </p></div>
            <Slideshow
              interval={3000}
              images={[

                '/moigoc.jpg',

                '/phun_cam.jpg',
                '/moisau.jpg',
                '/phun_khu.jpg',
                'phun_saubong.jpg',
                '/phunmoi_maudepcam.jpg'


              ]}
            />
            <div>

              <div>
                <p  className="space">ƯU ĐIỂM CỦA PHUN MÔI THẨM MỸ</p>
                <div className="shortcode_node"><p></p>
                  <p><span><span>✓</span> Gíup môi bị nhạt hoặc bị thâm trở nên hồng hào, giúp sắc mặt luôn tươi tắn</span></p>
                  <p><span><span>✓</span> Tiết kiệm thời gian trang điểm khi quá bận rộn</span></p>
                  <p><span ><span>✓</span>  Màu môi luôn hồng hào, tươi tắn trong thời gian dài.&nbsp;</span></p>

                  <p><span></span></p></div>
              </div>
              <div>
                <p  className="space">NÊN CHỌN PHUN MÔI MÀU GÌ?</p>
                <div class="shortcode_node"><p></p>
                  <p><span ><strong>✓ <a href="https://vienthammydiva.vn/phun-moi-mau-do-hong/">Màu hồng đỏ</a>:</strong> màu hồng đỏ rực rỡ và tươi sáng, ẩn một chút nét quyến rũ sẽ là sự lựa chọn hoàn hảo dành cho những cô nàng mạnh mẽ, cá tính.&nbsp;</span></p>
                  <p><span><strong>✓ <a href="https://vienthammydiva.vn/phun-moi-mau-hong-cam/">Màu hồng cam</a>:</strong> đây là sắc môi hot nhất năm nay, một đôi môi ánh cam nhẹ nhàng, mang lại vẻ tươi tắn trẻ trung, rất phù hợp với các bạn trẻ tuổi teen, năng động.</span></p>
                  <p><span ><strong>✓ Màu hồng pastel:</strong> với tông màu nhẹ nhàng, ngọt ngào, đây sẽ là màu sắc phù hợp với những cô nàng kẹo ngọt, đáng yêu và ngây thơ.</span></p>
                  <p><span ></span></p></div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <p className="space">CÁCH CHĂM SÓC SAU KHI PHUN MÔI</p>
      <div className="shortcode_node"><p></p>
        <p><span><span>✓</span> Uống thuốc giúp môi nhanh khô</span></p>
        <p><span><span>✓</span> Vệ sinh môi sau khi phun đúng cách</span></p>
        <p><span ><span>✓</span> Áp dụng chế độ ăn kiêng phù hợp theo đúng lời dặn của bác sĩ và các chuyên gia.&nbsp;</span></p>
        <p><span ><span>✓</span> Dưỡng ẩm cho môi mỗi ngày.&nbsp;</span></p>


        <p><span></span></p></div>

      <MyPham />

    </div>
  );
};

export default Moi;