import React from "react";
import background from "./background.jpg";
import phunXam from "./phunMay.jpg";
import soiXam from "./soiXam.jpg";
import behindImg from "./behind_img.jpg";

import MyPham from "../MyPham/MyPham";

// import { Nav, NavLink, NavMenu } 
//     from "./NavbarElements";
import "./ChanMay.css";
const ChanMay = () => {
  return (
    <div className="ChanMay-container">
      <div className="inside-chanmay" >

        <div className="content-container">
          <div>

            <h2>PHUN XĂM CHÂN MÀY THẨM MỸ</h2>
            <div className="shortcode_hlight"><p><strong><a href="https://vienthammydiva.vn/dich-vu-phun-may-ombre/">Phun xăm chân mày</a> </strong> là xu hướng làm đẹp chân mày được ưa chuộng nhất những năm gần đây và chưa có dấu hiệu giảm nhiệt. Bởi phương pháp này không chỉ đem lại đôi mày đẹp tự nhiên mà còn tạo ra hiệu ứng màu sắc đặc biệt và ấn tượng. Nhưng nhiều bạn vẫn còn thắc mắc đối với hình thức thẩm mỹ mới này, hãy cùng tìm hiểu rõ hơn về công nghệ này qua bài viết sau đây nhé!</p></div>

          </div>
          <div className="PhunXam">

            <div className="itemPx">
              <img className=" img-behind-pm" src={behindImg} />
              <img className=" img-pm" src={phunXam} />
            </div>

            <div className="wrap-px">
              {/* <div className="itemPx" >
                <h3 className="title-cm">PHUN XĂM CHÂN MÀY THẨM MỸ</h3>
                <p className="para-cm">Phun xăm chân mày thẩm mỹ ok nha ok nhé ừ nè tối rồi đó cố lên</p>
              </div> */}
              <div className="itemPx" >
                <h3 className="title-cm" >ƯU ĐIỂM CỦA PHUN XĂM CHÂN MÀY</h3>
                <ul >
                  <li>Dáng mày đẹp tự nhiên như ý 

</li>
                  <li>Đảm bảo an toàn – không đau – không cần nghỉ dưỡng 

</li>
                  <li>Cải thiện tình trạng dáng mày trổ xanh, trổ đỏ như các công nghệ cũ.</li>
                  <li>Tạo ra những sợi lông mày đẹp tự nhiên, giống thật đến 90% không sợ bị già hay lỗi thời.</li>
                  <li>Thời gian điêu khắc chân mày nhanh chóng chỉ 60 phút đã sở hữu ngay dáng mày đẹp, thần thái.</li>
                  <li>Hiệu quả lâu dài kéo dài từ 3 – 5 năm, màu bền với thời gian.</li>
                </ul>
                {/* <ul>
                  <li className="para-cm">không nên</li>
                  <li className="para-cm">Phù hợp với</li>
                  <li className="para-cm">Nên làm</li>
                </ul> */}
              </div>
            </div>
          </div>
          <div>

            <h2>ĐIÊU KHẮC CHÂN MÀY THẨM MỸ</h2>
            <div className="shortcode_hlight"><p><strong><a href="https://vienthammydiva.vn/dich-vu-phun-may-ombre/">Điêu khắc chân mày</a></strong>  là một trong những phương pháp làm đẹp phổ biến được nhiều người yêu thích và lựa chọn. Nếu như bạn đang muốn khắc phục tình trạng mày thưa mỏng,… Tuy nhiên còn đang phân vân không biết có phù hợp với mình không, thì hãy cùng  Phương Uyên Nguyễn SPA tìm hiểu qua bài biết bên dưới nhé!

            </p></div>

          </div>
          <div className="soiXam">
            <div className="wrap-sx">
              {/* <div className="itemSX">
                <h3 className="title-cm">ĐIÊU KHẮC CHÂN MÀY THẨM MỸ</h3>
                <p className="para-cm">Phun xăm chân mày thẩm dang lam gi do hom nay code nhieu qua mỹ ok nha ok nhé ừ nè tối rồi đó cố lên</p>
              </div> */}
              <div className="itemSX" >
                <h3 className="title-cm" >ƯU ĐIỂM CỦA ĐIÊU KHẮC CHÂN MÀY</h3>
                <ul >
                  <li>Tạo được <strong><a href="https://vienthammydiva.vn/chan-may-dep/">kiểu dáng lông mày đẹp</a></strong>, chuẩn với tỷ lệ khuôn mặt.</li>
                  <li>Cải thiện các khuyết điểm của lông mày như: Mày thưa, nhạt màu<strong>,</strong> dáng lệch mất thẩm mỹ.</li>
                  <li>Cải thiện tình trạng dáng mày trổ xanh, trổ đỏ như các công nghệ cũ.</li>
                  <li>Tạo ra những sợi lông mày đẹp tự nhiên, giống thật đến 90% không sợ bị già hay lỗi thời.</li>
                  <li>Thời gian điêu khắc chân mày nhanh chóng chỉ 60 phút đã sở hữu ngay dáng mày đẹp, thần thái.</li>
                  <li>Hiệu quả lâu dài kéo dài từ 3 – 5 năm, màu bền với thời gian.</li>
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
      
        <p className="space">QUY TRÌNH PHUN XĂM - ĐIÊU KHẮC CHÂN MÀY THẨM MỸ</p>
        <div className="shortcode_node"><p></p>
<p><strong>Bước 1: Thăm khám và tư vấn</strong></p>
<p >Trước hết, các chuyên gia sẽ thăm khám kiểm tra tình trạng chân mày của bạn. Sau đó, đưa ra những kết luận tư vấn giúp khách hàng kiểu dáng, màu sắc phù hợp với gương mặt và làn da.</p>
<p ><strong>Bước 2: Vệ sinh mày, khử khuẩn thiết bị</strong></p>
<p >Ở bước này, mọi dụng cụ sử dụng trong quá trình điêu khắc chân mày phải được khử khuẩn sạch sẽ nhất. Bên cạnh đó các chuyên viên sẽ vệ sinh mày của bạn để loại bỏ bụi bẩn. Đây được xem là các bước bắt buộc để đảm bảo an toàn cho khách hàng giảm tình trạng nhiễm trùng sau khi thẩm mỹ.</p>
<p ><strong>Bước 3: Ủ tê mày</strong></p>
<p >Ủ tê trong khoảng 20 – 30 phút, là một bước quan trọng nhằm giúp khách hàng không cảm thấy đau rát hay khó chịu mà sẽ mang lại cảm giác thoải mái và thư giãn nhất.</p>
<p ><strong>Bước 4: Chuẩn bị dụng cụ mix mực</strong></p>
<p>Các chuyên viên sẽ mix mực theo yêu cầu của bạm hoặc có thể tạo ra những màu sắc phù hợp với màu tóc, làn da của khách hàng nhất.</p>
<p ><strong>Bước 5: Vẽ dáng mày</strong></p>
<p >Trước khi phun cần phải cố định khung chân mày bằng chì trước, để thực hiện sẽ giảm tình trạng bị lệch, không cân đối.</p>
<p ><strong>Bước 6: Thực hiện điêu khắc chân mày cho khách hàng</strong></p>
<p >Đây là bước cực kỳ quan trọng, các chuyên gia sẽ dùng bút điêu khắc chuyên phẩy sợi theo dáng mày định sẵn. Đòi hỏi các chuyên viên phải thật tỉ mỉ, các sợi lông mày được vẻ cong một cách tự nhiên.</p>
<p><strong>Bước 7: Hướng dẫn chăm sóc</strong></p>
<p >Sau khi điêu khắc chân mày các chuyên viên sẽ hướng dẫn bạn cách chăm sóc tại nhà chu đáo nhất. Cần cân nhắc có một chế độ kiêng cữ phù hợp để mày sau khi bong sẽ được chuẩn, đẹp.</p>
<p ></p></div>
        
      <MyPham />

    </div>
  );
};

export default ChanMay;