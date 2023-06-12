import React from "react";
import { useEffect, useState } from "react";

import Slideshow from "../SlideShow/SlideShow";

import MyPham from "../MyPham/MyPham";

import csd from "./csd.jpg";

// import { Nav, NavLink, NavMenu } 
//     from "./NavbarElements";
import "./ChamSocDa.css";
const ChamSocDa = () => {
    return (
        <div className="ChanMay-container">
            <div className="inside-chanmay" >

                <div className="content-container">
                    <div>

                        <h2>MASSAGE MẶT</h2>
                        <div className="shortcode_hlight"><p><strong><a href="https://vienthammydiva.vn/dich-vu-phun-may-ombre/">Massage mặt</a> </strong> là một trong những cách làm cho vùng da mặt của bạn được săn chắc hơn, dễ dàng hấp thụ các dưỡng chất cho da, giúp tăng lưu thông, cải thiện làn da đàn hồi, làm cho da được khỏe mạnh hơn. Chỉ bằng những động tác khéo léo đến từ những đôi tay đã làm cho bạn cảm thấy tuyệt vời hơn, massage thường xuyên cũng là hình thức giúp cho bạn được thư giãn, xóa bỏ mọi ưu phiền, giúp cho bạn luôn ở trong trạng thái tính táo nhất.
                        </p></div>

                    </div>


                    <div>
                        <div>
                            <p className="space">CÁC DA MẶT</p>
                            <p><span><span></span><strong>1.Da khô:</strong></span></p>
                            <p>
                                Da của bạn trông thô và căng? Da khô không có độ ẩm và lipids - ví dụ như chất béo, vì vậy nó ít bị đàn hồi, căng chặt, trong nhiều trường hợp, có khuynh hướng ngứa, nó phản ứng với các ảnh hưởng của môi trường đặc biệt bằng cách trở nên khó chịu. Kem chăm sóc đặc biệt, bạn có thể khôi phục lại độ ẩm của bạn và tăng cường các rào cản bảo vệ da của bạn.

                            </p>
                            <p><span><span></span><strong>2.Da thường:</strong></span></p>

                            <p>
                                Da đàn hồi tốt và mềm mại, mịn màng và một làn da hồng hào: nếu đó là những gì bạn nhìn thấy khi bạn nhìn vào gương, thì bạn có làn da bình thường thậm chí phạm tội về vẻ đẹp, thỉnh thoảng sẽ không làm tổn hại đến nó nhiều. Nhưng ngay cả da bình thường cũng cần độ ẩm và sự bảo vệ.
                            </p>
                            <p><span><span></span><strong>3.Da nhờn:</strong></span></p>

                            <p>
                                Một làn da mụn cóc có khuynh hướng tạo ra nhiều bã nhờn hơn là cần thiết.Mỗi khuynh hướng di truyền, căng thẳng và sự dao động của hoóc môn gây ra hậu quả như vậy: kết quả là mụn đầu đen và vết thâm xuất hiện. Với các sản phẩm làm sạch và chăm sóc da đặc biệt, bạn có thể khôi phục lại sự cân bằng tự nhiên của da.
                            </p>
                            <p><span><span></span><strong>4.Da nhạy cảm:</strong></span></p>

                            <p>
                                Da nhạy cảm phản ứng nhiều hơn với các ảnh hưởng bên ngoài như căng thẳng, không khí khô từ hệ thống sưởi ấm hoặc ánh sáng tia cực tím.Nếu da bị tróc ra, nó sẽ cảm thấy thắt chặt, ngứa, khô và nổi đỏ. Do đó da nhạy cảm cần phải được chăm sóc đặc biệt để củng cố và tăng cường các rào cản của nó cùng một lúc, để làm cho nó kháng khuẩn hơn.
                            </p>
                            <p><span><span></span><strong>5.Da hỗn hợp:</strong></span></p>

                            <p>
                                Da hỗn hợp lấy tên từ thực tế là nó là một sự kết hợp của hai loại da: da bình thường đến da khô và da dầu, da mụn. Da hỗn hợp tỏa sáng và có xu hướng phát triển các nhược điểm nhỏ - đặc biệt là trong vùng gọi là T-zone giữa trán, mũi và cằm. Ngược lại, khu vực má là bình thường đến khô. Chọn một sản phẩm chăm sóc đặc biệt phù hợp với loại da của bạn, nhằm thúc đẩy sự phục hồi cân bằng độ ẩm của da.

                            </p>
                            <p><span><span></span><strong>6.Da trưởng thành:</strong></span></p>

                            <p>
                                Khi chúng ta lớn lên, nhiều quá trình khác nhau diễn ra trong da làm thay đổi hình dạng, cấu trúc và các hoạt động của nó, bao gồm hoạt động của tế bào giảm, phục hồi chậm lại, sản sinh collagen thấp hơn hoặc thiệt hại do tia UV gây ra và độ đàn hồi kém đi. Nhưng với các sản phẩm chăm sóc sáng tạo, bạn có thể làm giảm các đường kẻ, nếp nhăn và các đốm màu.
                            </p>
                            <img className="img-csd" src={csd} />
                        </div>
                        {/* <div>
                            <h3>NGUYÊN NHÂN GÂY RA MỤN</h3>

                            <p><span><span>1.</span>Rối loạn nội tiết tố</span></p>
                            <p><span><span>2.</span> Do di truyền

                            </span></p>
                            <p><span ><span>3.</span>Khói bụi, bụi bẩn từ môi trường.&nbsp;</span></p>
                            <p><span ><span >4.</span> Chế độ sinh hoạt, ăn uống không hợp lí.&nbsp;</span></p>
                            <p><span ><span >5.</span> Lạm dụng mỹ phẩm.&nbsp;</span></p>
                            <p><span></span></p>
                        </div> */}
                    </div>
                    <div>



                    </div>

                </div>
            </div>

            <p className="space">LỢI ÍCH CỦA CHĂM SÓC DA MẶT THƯỜNG XUYÊN</p>
            <div className="shortcode_node"><p></p>
                <p><span><span>✓</span> <strong>Làm sạch sâu: </strong>các chuyên viên sử dụng hơi nước để mở lỗ chân lông từ đó loại bỏ các tế bào chết, ô nhiễm và gốc tự do… tích tụ trên da. Nhờ đó các vấn đề về da như mụn đầu đen, mụn đầu trắng hay tắc nghẽn lỗ chân lông cũng sẽ không có cơ hội được xuất hiện trên làn da của bạn. </span></p>
                <p><span><span>✓</span> <strong>Giảm stress: </strong> Các thao tác massage da mặt tại spa sẽ kích hoạt hệ thần kinh giao cảm từ đó làm giảm mức độ stress và thay đổi tâm trạng của bạn theo hướng tích cực hơn. </span></p>
                <p><span ><span>✓</span>  <strong>Trẻ hóa làn da: </strong>Bên cạnh việc chú ý chăm sóc, áp dụng các sản phẩm thì những phương pháp và công nghệ chăm sóc da chuyên nghiệp tại spa sẽ giúp bạn cải thiện kết cấu da và làm chậm quá trình lão hóa. Chưa kể tới các công nghệ, việc chăm sóc và massage thường xuyên, đúng cách sẽ giúp thúc đẩy tái tạo tế bào và sản xuất collagen.

                    .&nbsp;</span></p>
                <p><span ><span>✓</span><strong>Thải độc: </strong>làn da của chúng ta tiếp xúc với rất nhiều yếu tố gây hại. Do đó, bên cạnh việc làm sạch da mặt hàng ngày bạn cần có một liệu trình chăm sóc da mặt chuyên sâu hơn để thải độc.&nbsp;</span></p>
                <p><span><span>✓</span> <strong>Da mịn màng và đều màu hơn: </strong> Trong khi việc làm sạch, tẩy tế bào chết giúp bạn loại bỏ tế bào da chết xỉn màu và làm lộ ra lớp da mới khỏe mạnh hơn thì massage sẽ thúc đẩy lưu thông máu khiến da sáng và rạng rỡ hơn. Các sản phẩm có khả năng khắc phục trị liệu vấn đề, nhược điểm da cũng sẽ được áp dụng sao cho phù hợp để bạn có thể cải thiện làn da của mình hiệu quả hơn. </span></p>


            </div>



            <br></br>
            <div>
                <MyPham />

            </div>

        </div>
    );
};

export default ChamSocDa;