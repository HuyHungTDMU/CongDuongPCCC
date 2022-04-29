import React from "react";
import { Link } from "react-router-dom";

const CardDealsOfTheDay = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title pb-3 border-bottom">
          {props.title}

          <span className="float-right">
            <Link to={props.to} className="btn btn-sm btn-outline-primary">
              Xem thêm
            </Link>
          </span>
        </h5>
        {props.children}
      </div>
    </div>
  );
};

export default CardDealsOfTheDay;
