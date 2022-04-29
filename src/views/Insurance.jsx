import React from "react";
import { ReactComponent as IconEnvelopeFill } from "bootstrap-icons/icons/hammer.svg";
import Recomment from './Recomment'

const Insurance = () => {
    return (
        <div className="container my-3">
            <div className="row g-3">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header" style={{ fontWeight: 'bold' }}>
                            <IconEnvelopeFill className="i-va" /> BẢO HÀNH - BẢO TRÌ
                        </div>
                        <div className="card-body">
                            <div>
                                <>
                                    <h2>
                                        <strong>
                                            <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                                CHÍNH SÁCH BẢO HÀNH - BẢO TRÌ
                                            </span>
                                        </strong>
                                    </h2>
                                    <p>
                                        <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                            Tất cả mọi trường hơp bảo hành, quý khách có thể liên hệ với chúng tôi để
                                            làm thủ tục bảo hành.
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                            Mọi sản phẩm của chúng tôi đều có một chế độ bảo hành theo tiêu chuẩn và
                                            phù hợp với từng loại sản phẩm.
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                            Chúng tôi cam kết thực hiện nghĩa vụ bảo hành khi nhận được thông báo của
                                            khách hàng
                                        </span>
                                    </p>
                                    <p>
                                        <strong>
                                            <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                                Bảo trì, bảo dưỡng:
                                            </span>
                                        </strong>
                                    </p>
                                    <p>
                                        <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                            Bao gồm: Bảo dưỡng sản phẩm định kỳ, kiểm tra sản phẩm, vệ sinh sản phẩm,
                                            sửa chữa những hỏng hóc nhỏ có thể sửa được (không bao gồm thay thế thiết
                                            bị). Thời gian bảo trì bảo dưỡng tùy thuộc vào nhu cầu của khách và thỏa
                                            thuận của khách với{" "}
                                            <strong>
                                                <span style={{ fontFamily: '"Tahoma",sans-serif' }}>
                                                    PHÒNG CHÁY CHỮA CHÁY
                                                </span>
                                            </strong>
                                        </span>
                                    </p>
                                    <h2>
                                        <span style={{ fontFamily: '"Tahoma",sans-serif', fontSize: "10.0pt" }}>
                                            Ngoài ra, Công ty chúng tôi có thêm Gói Dịch vụ bảo trì sản phẩm sau khi
                                            kết thúc thời gian bảo hành sản phẩm nhằm mang đến cho Quý khách sự an tâm
                                            hơn trong quá trình Kinh doanh – Sản xuất và duy trì khả năng vận hành sản
                                            phẩm tốt hơn.{" "}
                                        </span>
                                    </h2>
                                </>
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

export default Insurance;
