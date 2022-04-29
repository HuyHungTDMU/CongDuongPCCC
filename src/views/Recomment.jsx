import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import dataRecomment from "./data/recomment";

const Recomment = () => {

    const iconProducts = dataRecomment.slice(0, 7);

    return (
        <div className="card mb-3">
            <div className="card-header" style={{ fontWeight: 'bold' }}>
                Sản phẩm gợi ý
            </div>
            <div className="card-body">
                {iconProducts.map((product) => {
                    return (
                        <div className="col-md-12" key={product.id}>
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-1 shadow-sm h-md-250 position-relative">
                                <div className="col p-2 d-flex flex-column position-static">
                                    <div style={{
                                        textAlign: 'left', maxHeight: 50, minHeight: 50, maxWidth: 220, minWidth: 220, overflow: 'hidden',
                                    }}>{product.title}</div>
                                    <Link to={{ pathname: '/detail', state: product }} className="stretched-link btn btn-sm btn-light">
                                        Xem <IconChevronRight />
                                    </Link>
                                </div>
                                <div className="col-auto p-2 d-none d-lg-block">
                                    <img src={product.img} alt="" style={{ maxHeight: 80, width: 80 }} />
                                </div>
                            </div>
                        </div>);
                })}
            </div>
        </div>
    );
}

export default Recomment;
