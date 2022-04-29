import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
// import {
//   faTwitter,
//   faFacebookF,
//   faInstagram,
//   faYoutube,
//   faApple,
//   faWindows,
//   faAndroid,
// } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>

        <div className="container my-3">
          <div className="row g-3">
            <div className="col-md-12">
              <div className="card mb-3">

                <div className="container-fluid bg-dark text-white">
                  <div className="row ">
                    <div className="col-md-3 py-3">
                      <div className="h6">PHÒNG CHÁY CHỮA CHÁY</div>
                      <hr />
                      <p>
                        Chúng tôi cam kết sản phẩm mới 100% - Giá cạnh tranh trên thị trường - Nhận giao hàng tận nơi.
                        Với đội ngũ kỹ sư có trình độ chuyên môn cao và nhiều năm kinh nghiệm trong lĩnh vực PCCC rất mong được sự hợp tác của Quý khách hàng.
                      </p>
                    </div>
                    <div className="col-md-3 py-3">
                      <div className="h6">HỖ TRỢ KHÁCH HÀNG</div>
                      <hr />
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-dark text-white border-light">
                          <Link
                            to="/"
                            className="text-decoration-none text-white stretched-link"
                          >
                            Hướng dẫn đặt hàng
                          </Link>
                        </li>
                        <li className="list-group-item bg-dark text-white border-light">
                          <Link
                            to="/"
                            className="text-decoration-none text-white stretched-link"
                          >
                            Chính Sách Đổi - Trả
                          </Link>
                        </li>
                        <li className="list-group-item bg-dark text-white border-light">
                          <Link
                            to="/"
                            className="text-decoration-none text-white stretched-link"
                          >
                            Dịch Vụ Sửa Chữa
                          </Link>
                        </li>
                        <li className="list-group-item bg-dark text-white border-light">
                          <Link
                            to="/"
                            className="text-decoration-none text-white stretched-link"
                          >
                            Chính Sách Bảo Hành - Bảo Trì
                          </Link>
                        </li>
                        <li className="list-group-item bg-dark text-white border-light">
                          <Link
                            to="/"
                            className="text-decoration-none text-white stretched-link"
                          >
                            Chính Sách Vận Chuyển - Giao Nhận
                          </Link>
                        </li>
                        <li className="list-group-item bg-dark text-white border-light">
                          <Link
                            to="/"
                            className="text-decoration-none text-white stretched-link"
                          >
                            Catalogue
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 py-3">
                      <div className="h6">VỀ CHÚNG TÔI</div>
                      <hr />
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-dark text-white border-light">
                          <Link
                            to="/"
                            className="text-decoration-none text-white stretched-link"
                          >
                            Giới Thiệu
                          </Link>
                        </li>
                        <li className="list-group-item bg-dark text-white border-light">
                          <Link
                            to="/"
                            className="text-decoration-none text-white stretched-link"
                          >
                            Liên Hệ
                          </Link>
                        </li>
                        <li className="list-group-item bg-dark text-white border-light">
                          <Link
                            to="/"
                            className="text-decoration-none text-white stretched-link"
                          >
                            Tuyển Dụng
                          </Link>
                        </li>
                        <li className="list-group-item bg-dark text-white border-light">
                          <Link
                            to="/"
                            className="text-decoration-none text-white stretched-link"
                          >
                            Ưu đãi doanh nghiệp
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 py-3">
                      <div className="h6">KẾT NỐI VỚI CHÚNG TÔI</div>
                      <hr />
                      <address>
                        <strong>PHÒNG CHÁY CHỮA CHÁY.</strong>
                        <br />
                        Địa chỉ: Cơ sở tại TP Hồ Chí Minh Minh, Bình Dương, Đồng Nai
                        <br />
                      </address>
                      <hr />
                      <IconTelephone /> 0902.822.667
                      <br />
                      <IconEnvelope /> congduong.pccc@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
