import React from "react";
import { Link } from "react-router-dom";
import logo from '../logocongthanh.png'
// import RoomIcon from '@material-ui/icons/Room';
// import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

const Header = () => {
  return (
    <div className="container my-3">
      <div className="row g-3">
        <div className="col-md-12" style={{ minWidth: 400 }}>
          <Link style={{ textDecoration: 'none' }} to="/">
            <img src={logo} alt="" style={{ height: 50, width: 50, marginLeft: 50 }} />
            <span style={{ color: 'red', fontSize: 19, fontWeight: 'bold' }}>&nbsp;&nbsp;PCCC CÔNG DƯƠNG</span>
          </Link>
        </div>
        {/* <div className="col-md-8 text-center" style={{ minWidth: 300 }}>
          <RoomIcon style={{ color: 'red', fontSize: 20 }} /> 11/9d Ấp Thới Tứ, Thới Tam Thôn, Hóc Môn, TP.HCM <br />
          <PhoneInTalkIcon style={{ color: 'red', fontSize: 20 }} /> 0902.822.667 (Mr. Công)
        </div> */}
      </div>
    </div>
  );
};
export default Header;
