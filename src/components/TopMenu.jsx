import React, { useState } from "react";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import logo from '../logocongthanh.png';
import icon1 from '../img/leftmenu/1.jpg';
import icon2 from '../img/leftmenu/2.jpg';
import icon3 from '../img/leftmenu/3.jpg';
import icon4 from '../img/leftmenu/4.jpg';
import icon5 from '../img/leftmenu/5.jpg';
import icon6 from '../img/leftmenu/6.png';
import icon7 from '../img/leftmenu/7.jpg';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';
import ReorderIcon from '@material-ui/icons/Reorder';

const TopMenu = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    isPaneOpenLeft: false
  });
  return (
    <React.Fragment>
      <div className="container my-3">
        <div className="row g-3">
          <div className="col-md-12">
            <div className="card mb-3">

              <nav className="navbar navbar-expand-lg navbar-dark bg-danger p-1">
                <div className="container-fluid">

                  {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                  <ul className="navbar-nav">
                    <li className="nav-item" onClick={() => setState({ isPaneOpenLeft: true })}>
                      <ReorderIcon style={{ fontSize: 22, fontWeight: 'bold', color: 'white', marginTop: 9 }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link font-weight-bold text-white" to="/">
                        TRANG CHỦ &nbsp;&nbsp;
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link font-weight-bold text-white" to={{ pathname: '/product-type', state: '1.0' }}>
                        MÁY BƠM CHỮA CHÁY &nbsp;&nbsp;
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link font-weight-bold text-white" to={{ pathname: '/product-type', state: '2.0' }}>
                        THIẾT BỊ CHỮA CHÁY &nbsp;&nbsp;
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link font-weight-bold text-white" to={{ pathname: '/product-type', state: '4.0' }} >
                        THIẾT BỊ CHỐNG SÉT &nbsp;&nbsp;
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link font-weight-bold text-white" to="/charging">
                        SẠC BÌNH &nbsp;&nbsp;
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link font-weight-bold text-white" to="/insurance">
                        BẢO HÀNH &nbsp;&nbsp;
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link font-weight-bold text-white" to="/deliver">
                        VẬN CHUYỂN &nbsp;&nbsp;
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link font-weight-bold text-white" to="/contact">
                        LIÊN HỆ &nbsp;&nbsp;
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link font-weight-bold text-white" to="/catalogue">
                        CATALOGUE &nbsp;&nbsp;
                      </Link>
                    </li> */}
                  </ul>
                  {/* </div> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <SlidingPane
        closeIcon={
          <div>
            <img src={logo} alt="" style={{ height: 50, width: 50, }} />&nbsp;&nbsp;&nbsp; PCCC CÔNG DƯƠNG
          </div>
        }
        isOpen={state.isPaneOpenLeft}
        title=""
        from="left"
        width="350px"
        style={{ padding: '5px !important' }}
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <TreeView
          multiSelect
        >
          <TreeItem className={classes.item} nodeId="1.0" label={<><img src={icon1} alt="" style={{ height: 30, width: 30, }} /> Máy Bơm Chữa Cháy</>}>
            <Link to={{ pathname: '/product-type', state: "1.1" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.1" label="Máy bơm bù áp Pentax" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.2" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.2" label="Máy bơm chữa cháy Diesel" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.3" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.3" label="Máy bơm chữa cháy hiệu Windy" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.4" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.4" label="Máy bơm chữa cháy KATO" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.5" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.5" label="Máy bơm chữa cháy SALMSON" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.6" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.6" label="Máy bơm chữa cháy SEIKOO HDF" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.7" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.7" label="Máy bơm chữa cháy thả nổi" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.8" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.8" label="Máy bơm chữa cháy TOHATSU" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.9" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.9" label="Máy bơm điện chữa cháy EBARA" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.10" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.10" label="Máy bơm động cơ xăng HONDA" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.11" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.11" label="Máy bơm chữa cháy MITSUKY" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.12" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.12" label="Máy bơm nước TECO - ĐÀI LOAN" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.13" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.13" label="Máy bơm SEAR - ITALIA" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "1.14" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.itemChild} nodeId="1.14" label="Nhà phân phối máy bơm SHAKTI" />
            </Link >
          </TreeItem >
          <TreeItem className={classes.item} nodeId="2.0" label={<><img src={icon2} alt="" style={{ height: 30, width: 30, }} /> Thiết Bị Chữa Cháy</>}>
            <Link to={{ pathname: '/product-type', state: "2.1" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.1" label="Bình Chữa Cháy - Bình Cứu Hỏa" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.2" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.2" label="Vòi Chữa Cháy" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.3" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.3" label="Lăng Phun Chữa Cháy" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.4" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.4" label="Bình Điều Áp - Bình Tích Áp" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.5" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.5" label="Thiết bị bảo hộ lao động" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.6" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.6" label="Đầu phun chữa cháy SPRINKLER" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.7" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.7" label="Foam Chữa Cháy AFFF" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.8" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.8" label="Chữa Cháy Tự Động CO2" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.9" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.9" label="Hệ Thống PCCC FM200" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.10" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.10" label="Họng Trụ Tiếp Nước" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.11" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.11" label="Hộp - Tủ Chữa Cháy Ngoài Trời" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.12" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.12" label="Mền Chống Cháy" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.13" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.13" label="Thang Dây Thoát Hiểm" />
            </Link>
            {/* <Link to={{ pathname: '/product-type', state: "2.14" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.14" label="Thiết Bị Pha Foam" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.15" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.15" label="Tủ Chữa Cháy Trong Nhà" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.16" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.16" label="Tủ Điều Khiển Máy Bơm" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "2.17" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="2.17" label="Van Chữa Cháy" />
            </Link> */}
          </TreeItem>
          <TreeItem className={classes.item} nodeId="3.0" label={<><img src={icon3} alt="" style={{ height: 30, width: 30, }} /> Thiết Bị Báo Cháy</>}>
            <Link to={{ pathname: '/product-type', state: "3.1" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.1" label="Bảng Chỉ Thị Phụ" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.2" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.2" label="Chuông Báo Cháy" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.3" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.3" label="Còi Báo Cháy - Còi Báo Động" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.4" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.4" label="Đầu Báo Gas" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.5" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.5" label="Đầu Báo Khói BEAM" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.6" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.6" label="Đầu Báo Nhiệt" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.7" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.7" label="Đèn Báo Cháy" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.8" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.8" label="Đèn Báo Phòng" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.9" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.9" label="Đèn Emergency Chiếu Sáng Sự Cố" />
            </Link>
            {/* <Link to={{ pathname: '/product-type', state: "3.10" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.10" label="Đèn Exit Thoát Hiểm" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.11" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.11" label="Công Tắc Khẩn Báo Cháy" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.12" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.12" label="Thiết Bị Báo Cháy BOSCH" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.13" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.13" label="Thiết Bị Báo Cháy CHUNGMEI Đài Loan" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.14" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.14" label="Thiết Bị Báo Cháy Địa Chỉ APOLLO - UK (Anh)" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.15" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.15" label="Thiết Bị Báo Cháy Địa Chỉ DETECTOMAT Của Đức" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.16" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.16" label="Thiết Bị Báo Cháy Địa Chỉ GST" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.17" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.17" label="Thiết Bị Báo Cháy Địa Chỉ HOCHIKI" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.18" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.18" label="Thiết Bị Báo Cháy Địa Chỉ HORING" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.19" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.19" label="Thiết Bị Báo Cháy Địa Chỉ NITTAN - Japan" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.20" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.20" label="Thiết Bị Báo Cháy Địa Chỉ SIEMENS" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.21" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.21" label="Thiết Bị Báo Cháy WOOSUNG - Hàn Quốc" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.22" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.22" label="Thiết Bị Báo Cháy NOHMI - Japan" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.23" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.23" label="Thiết Bị Báo Cháy NOTIFIER - USA" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.24" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.24" label="Trung Tâm Báo Cháy" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "3.25" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="3.25" label="Thiết bị báo cháy COOPER - Anh" />
            </Link> */}
          </TreeItem>
          <TreeItem className={classes.item} nodeId="4.0" label={<><img src={icon4} alt="" style={{ height: 30, width: 30, }} /> Thiết Bị Chống Sét</>}>
            <Link to={{ pathname: '/product-type', state: "4.1" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="4.1" label="Chống Sét Lan Truyền" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "4.2" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="4.2" label="Kim Thu Sét" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "4.3" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="4.3" label="Lắp Đặt Hệ Thống Chống Sét Thu Lôi" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "4.4" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="4.4" label="Phụ Kiện Chống Sét" />
            </Link>
          </TreeItem>
          <TreeItem className={classes.item} nodeId="5.0" label={<><img src={icon5} alt="" style={{ height: 30, width: 30, }} /> Thiết Bị Báo Trộm</>}>
            <Link to={{ pathname: '/product-type', state: "5.1" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="5.1" label="Beam Báo Trộm Hàng Rào" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "5.2" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="5.2" label="Công Tắc Từ Báo Trộm" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "5.3" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="5.3" label="Đầu Dò Hồng Ngoại" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "5.4" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="5.4" label="Lắp Đặt Hệ Thống Báo Trộm_ Báo Động" />
            </Link>
            <Link to={{ pathname: '/product-type', state: "5.5" }} style={{ textDecoration: 'none', color: '#212529' }}>
              <TreeItem className={classes.item} nodeId="5.5" label="Thiết Bị Báo Trộm Không Dây" />
            </Link>
          </TreeItem>
          <Link to={{ pathname: '/charging', state: "6.0" }} style={{ textDecoration: 'none', color: '#212529' }}>
            <TreeItem className={classes.item} nodeId="6" label={<><img src={icon6} alt="" style={{ height: 30, width: 30, }} /> Nạp Bình Chữa Cháy</>} />
          </Link>
          <Link to={{ pathname: '/product-type', state: "6.0" }} style={{ textDecoration: 'none', color: '#212529' }}>
            <TreeItem className={classes.item} nodeId="6" label={<><img src={icon6} alt="" style={{ height: 30, width: 30, }} /> Dự Án PCCC</>} />
          </Link>
          <Link to={{ pathname: '/product-type', state: "7.0" }} style={{ textDecoration: 'none', color: '#212529' }}>
            <TreeItem className={classes.item} nodeId="7" label={<><img src={icon7} alt="" style={{ height: 30, width: 30, }} /> Văn Bản PCCC</>} />
          </Link>
        </TreeView >
      </SlidingPane >
    </React.Fragment >
  );
};

export default TopMenu;

const useStyles = makeStyles({
  item: {
    marginTop: 20,
    marginBottom: 20
  },
  itemChild: {
    marginTop: 20,
  },
});