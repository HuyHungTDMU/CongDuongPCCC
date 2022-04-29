import React, { lazy } from "react";
import { data } from "../data";
import dataRecomment from "./data/recomment";
import data1_1 from "./data/1/data1";
import data1_2 from "./data/1/data2";
import data2 from "./data/2/data1";
import data3_1 from "./data/3/data1";
import data3_2 from "./data/3/data2";
import data3_3 from "./data/3/data3";
import data4 from "./data/4/data1";
import data5_1 from "./data/5/data1";
import data5_2 from "./data/5/data2";
import data5_3 from "./data/5/data3";
import data5_4 from "./data/5/data4";
import ListItems from "./ListItems";
import { Link } from "react-router-dom";

const Banner = lazy(() => import("../components/carousel/Banner"));

const HomeView = () => {
  return (
    <React.Fragment>
      <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
      <div className="container my-3">
        <div className="row g-3">
          <div className="col-md-12">
            <div className="card mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title pb-3 border-bottom">
                    Sản Phẩm Gợi Ý
                  </h5>
                  <ListItems data={dataRecomment} />
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title pb-3 border-bottom">
                    Máy Bơm Chữa Cháy
                    <span className="float-right">
                      <Link to={{ pathname: '/product-type', state: '1.0' }} className="btn btn-sm btn-outline-primary">
                        Xem thêm
                      </Link>
                    </span>
                  </h5>
                  <ListItems data={[...data1_1, ...data1_2].slice(0, 12)} />
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title pb-3 border-bottom">
                    Thiết Bị Chữa Cháy
                    <span className="float-right">
                      <Link to={{ pathname: '/product-type', state: '2.0' }} className="btn btn-sm btn-outline-primary">
                        Xem thêm
                      </Link>
                    </span>
                  </h5>
                  <ListItems data={data2.slice(0, 12)} />
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title pb-3 border-bottom">
                    Thiết Bị Báo Cháy
                    <span className="float-right">
                      <Link to={{ pathname: '/product-type', state: '3.0' }} className="btn btn-sm btn-outline-primary">
                        Xem thêm
                      </Link>
                    </span>
                  </h5>
                  <ListItems data={[...data3_1, ...data3_2, ...data3_3].slice(0, 12)} />
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title pb-3 border-bottom">
                    Thiết Bị Chống Sét
                    <span className="float-right">
                      <Link to={{ pathname: '/product-type', state: '4.0' }} className="btn btn-sm btn-outline-primary">
                        Xem thêm
                      </Link>
                    </span>
                  </h5>
                  <ListItems data={data4.slice(0, 12)} />
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title pb-3 border-bottom">
                    Thiết Bị Báo Trộm
                    <span className="float-right">
                      <Link to={{ pathname: '/product-type', state: '5.0' }} className="btn btn-sm btn-outline-primary">
                        Xem thêm
                      </Link>
                    </span>
                  </h5>
                  <ListItems data={[...data5_1, ...data5_2, ...data5_3, ...data5_4].slice(0, 12)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeView;
