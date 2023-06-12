import React from "react";
import { useEffect, useState } from "react";

import Slideshow from "../SlideShow/SlideShow";

import MyPham from "../MyPham/MyPham";

import trietlong1 from "./trietlong2.jpg";


import "./TrietLong.css";
const TrietLong = () => {
    return (
        <div className="ChanMay-container">
            <div className="inside-chanmay" >

                <div className="content-container">
                    <div>

                        <p className="space">TRIỆT LÔNG TIA LASER</p>
                        <div className="shortcode_hlight"><p><strong><a href="https://vienthammydiva.vn/dich-vu-phun-may-ombre/">Triệt lông bằng tia</a> </strong>Laser có thể loại bỏ các vùng lông không mong muốn một cách nhanh chóng, dễ chịu và tin cậy hơn các phương pháp khác. Dù là nam hay nữ, trẻ hay già, triệt lông bằng laser là lựa chọn thay thế cho phương pháp nhổ, cạo, dùng sáp, điện phân hoặc hóa chất..
                        </p></div>

                    </div>



                    <div>
                        <p className="space">CÁCH LASER HOẠT ĐỘNG</p>
                        <p>Mặc dù triệt lông bằng laser thường không mang lại kết quả vĩnh viễn, nhưng nghiên cứu cho thấy các vùng đã triệt lông bằng laser thường mọc lông trở lại lâu hơn các phương pháp khác. Laser rất hiệu quả trong việc làm lông ngừng phát triển trong giai đoạn phát triển tích cực (anagen).  </p>
                        <p> Laser phát ra chùm tia sáng mạnh được hấp thu bởi các sắc tố trong nang lông. Lông càng có nhiều sắc tố (sậm màu) thì càng điều trị hiệu quả. Các xung laser bắn ra trong nháy mắt, chỉ vừa đủ để làm bay hơi sắc tố trong khi giảm tổn thương cho vùng da xung quanh. Các nang lông hấp thu năng lượng laser làm suy yếu khả năng mọc lông mới.
</p>

                           <p>
                           Hệ thống laser Fotona SP Dynamis sử dụng công nghệ laser tối ưu Avalanche FRAC3® để triệt lông, giúp cải tiến hiệu quả và giảm khó chịu cho bệnh nhân.
                           </p>
                        
                        <img className="ex-trietlong" src={trietlong1} />
                    </div>
                    <div>
                        <h3>AI CÓ THỂ TRIỆT LÔNG BẰNG TIA LASER</h3>

                        <p>Không phải ai cũng đáp ứng với điều trị bằng laser, và nếu có đáp ứng, thì cũng không thể xác định thời gian lông mọc trở lại.</p>
                        <p>Vì năng lượng thường được hấp thu bởi các vùng sắc tố sậm màu nên laser hoạt động hiệu quả nhất cho người da sáng có lông màu đen. Những người da sậm màu cần điều trị nhiều lần hơn còn những người có lông màu đỏ, xám, trắng và vàng không đáp ứng tốt với tia laser, vì không có sắc tố đen trong nang lông.</p>
                      
                    </div>

                    <div>



                    </div>

                </div>
            </div>

            <p className="space">CAM KẾT KHI TRIỆT LÔNG BẰNG TIA LASER TẠI PHƯƠNG UYÊN NGUYỄN SPA</p>
            <div className="shortcode_node"><p></p>
                <p><span><span>✓</span> Hiệu quả lên đến 99% sau 1-3 tháng điều trị</span></p>
                <p><span><span>✓</span> Bảo hành <strong>Vĩnh viễn</strong> cho trọn gói</span></p>
               
                <p><span ><span>✓</span> Quy trình đảm bảo an toàn y tế và sức khỏe cho khách hàng.&nbsp;</span></p>


            </div>




            <div>
                <MyPham />

            </div>

        </div>
    );
};

export default TrietLong;