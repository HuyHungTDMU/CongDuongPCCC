import React from "react";
import { ReactComponent as IconEnvelopeFill } from "bootstrap-icons/icons/cart.svg";
import Recomment from './Recomment'
import logo from '../delivery.webp'

const Deliver = () => {
    return (
        <div className="container my-3">
            <div className="row g-3">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header" style={{ fontWeight: 'bold' }}>
                            <IconEnvelopeFill className="i-va" /> CHÍNH SÁCH VẬN CHUYỂN VÀ GIAO NHẬN
                        </div>
                        <div className="card-body">
                            <div>
                                <p>
                                    <strong>
                                        <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                            Thời gian giao hàng:
                                        </span>
                                    </strong>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        – Đơn hàng trong nội thành HCM: Vận chuyển trong vòng 24h hoặc theo yêu
                                        cầu của khách hàng.
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        – Đơn hàng tại các tỉnh/ thành: báo thời gian theo đơn vị cung cấp dịch vụ
                                        vận chuyển (Logistic)
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        – Trước khi vận chuyển, bộ phận giao nhận sẽ liên lạc với Quý khách hàng
                                        để hẹn thời gian, địa điểm cụ thể.
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        – Thời gian giao hàng và lắp đặt: Từ 8h30 đến 17h tất cả các ngày trong
                                        tuần.
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        – Chúng tôi có thể giao hàng chậm trễ do những điều kiện bất khả kháng như
                                        thời tiết xấu, điều kiện giao thông không thuận lợi, xe hỏng hóc trên
                                        đường giao hàng, trục trặc trong quá trình xuất hàng… Khi đó Chúng tôi sẽ
                                        liên lạc với Khách hàng để thông báo tình trạng vận chuyển.
                                    </span>
                                </p>
                                <p>
                                    <strong>
                                        <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                            Mong quý khách hàng thông cảm!
                                        </span>
                                    </strong>
                                </p>
                                <br />
                                <img src={logo} alt="" style={{ width: '70%', }} />
                                <br /><br />
                                <p>
                                    <strong>
                                        <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                            Đóng gói giao hàng
                                        </span>
                                    </strong>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        Đối với đơn hàng giao hàng thông qua dịch vụ vận chuyển thuê ngoài, để an
                                        toàn cho hàng hóa của Quí khách, Chúng tôi&nbsp;sẽ đóng gói hàng hóa trong
                                        các bao bì hoặc thùng hàng chuyên dụng.
                                    </span>
                                </p>
                                <p>
                                    <strong>
                                        <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                            Cước phí giao nhận
                                        </span>
                                    </strong>
                                </p>
                                <p style={{ marginLeft: "36.0pt", marginRight: "0cm" }}>
                                    {/*[if !supportLists]*/}
                                    <span style={{ fontSize: "10.0pt" }}>-&nbsp; </span>
                                    {/*[endif]*/}
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        Giao hàng miễn phí tại khu vực TP.HCM.
                                    </span>
                                </p>
                                <p style={{ marginLeft: "36.0pt", marginRight: "0cm" }}>
                                    {/*[if !supportLists]*/}
                                    <span style={{ fontSize: "10.0pt" }}>-&nbsp; </span>
                                    {/*[endif]*/}
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        Giao hàng tại các tỉnh thành khác sẽ theo đơn giá cước vận chuyển của dịch
                                        vụ Logictis hoặc theo thỏa thuận đối với từng&nbsp;đơn hàng.
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        – Cách thức tính Trọng lượng qui đổi từ Kích thước (đối với hàng cồng kềnh
                                        – theo đúng tiền lệ của ngành chuyển phát): Chiều dài (cm) x Chiều rộng
                                        (cm) x Chiều cao(cm) / 6000.
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        – Quí khách hàng có thể tham khảo Phụ lục Cước vận chuyển và Chỉ tiêu thời
                                        gian vận chuyển theo giá của đơn vị cung cấp.
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        – Nếu đơn hàng của quí khách cần phải chuyển đi bằng những chuyến hàng
                                        khác nhau hoặc phải chuyển đi nhiều lần, cước phí chuyển toàn bộ đơn hàng
                                        của quí khách sẽ được tính một (01) lần tại thời điểm chuyển hàng đầu
                                        tiên.
                                    </span>
                                </p>
                                <p>
                                    <strong>
                                        <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                            Trách nhiệm với hàng hóa vận chuyển
                                        </span>
                                    </strong>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        – Nếu dịch vụ vận chuyển do&nbsp;coong ty&nbsp;chỉ định, chúng tôi sẽ
                                        chịu trách nhiệm với hàng hóa và các rủi ro như mất mát hoặc hư hại của
                                        hàng hóa trong suốt quá trình vận chuyển hàng từ Kho của công ty đến địa
                                        điểm do quí khách yêu cầu.
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        – Quí khách có trách nhiệm kiểm tra hàng hóa khi nhận hàng. Khi phát hiện
                                        hàng hóa bị hư hại, trầy xước, bể vỡ, móp méo, hoặc sai hàng hóa, Quý
                                        khách vui lòng ký xác nhận tình trạng hàng hóa với Nhân viên giao nhận và
                                        thông báo ngay cho Bộ phận Chăm sóc Khách hàng của công ty chúng tôi.
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        – Sau khi Quý khách đã ký nhận hàng mà không ghi chú hoặc có ý kiến về
                                        hàng hóa, Thì mặc định chúng tôi đã hoàn tất việc vận chuyển sản phẩm đến
                                        tận nơi cho Quý khách và không có trách nhiệm với những yêu cầu đổi trả vì
                                        hư hỏng, trầy xước, bể vỡ, mốp méo, sai hàng hóa,… từ Quý khách sau này.
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                        – Nếu dịch vụ vận chuyển do Quý khách chỉ định và lựa chọn thì Quý khách
                                        sẽ chịu trách nhiệm với hàng hóa và các rủi ro như mất mát hoặc hư hại của
                                        hàng hóa trong suốt quá trình vận chuyển hàng từ Kho công ty chúng tôi đến
                                        Quý khách. Khách hàng sẽ chịu trách nhiệm cước phí và tổn thất liên quan.
                                    </span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <Recomment />
                </div>
            </div>
        </div>
    );
}

export default Deliver;
