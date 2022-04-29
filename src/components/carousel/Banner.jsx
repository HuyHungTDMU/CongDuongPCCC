import React, { lazy } from "react"
import './Banner.css';
import MenuItem from '../../views/MenuItem';


const Slide = lazy(() => import("./Slide"));

const Banner = (props) => {

  return (
    <div className="container my-3">
      <div className="row g-3">
        <div className="col-md-3" style={{ maxHeight: 350, minHeight: 350, minWidth: 250 }}>
          <MenuItem />
        </div>
        <div className="col-md-9">
          <Slide props={props} />
        </div>
      </div>
    </div >
  );
}

export default Banner;
