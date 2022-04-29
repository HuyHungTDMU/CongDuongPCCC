import React from "react";
import { ReactComponent as IconEnvelopeFill } from "bootstrap-icons/icons/telephone.svg";
import Recomment from './Recomment'

const Contact = () => {
    return (
        <div className="container my-3">
            <div className="row g-3">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header" style={{ fontWeight: 'bold' }}>
                            <IconEnvelopeFill className="i-va" /> LIÊN HỆ
                        </div>
                        <div className="card-body">
                            <div className="pages-detail" id="pagesv">
                                <h5>
                                    <strong>PHÒNG CHÁY CHỮA CHÁY</strong>
                                </h5>
                                <p>Địa chỉ: Cơ sở tại TP Hồ Chí Minh Minh, Bình Dương, Đồng Nai</p>
                                <p>Mã số thuế:&nbsp;</p>
                                <p>
                                    <strong>Hotline: </strong>0902.822.667 (Mr Công).
                                </p>
                                <p>
                                    <strong>Email</strong>: congduong.pccc@gmail.com&nbsp;
                                </p>
                                <p>Website: http://pcccthanhcong.vn/</p>
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

export default Contact;
