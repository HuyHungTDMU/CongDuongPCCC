import React from "react";
import { data } from "../data";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const NewItem = () => {

    const iconProducts = data.iconProducts;
    // map the rows as div.row
    const carouselContent = iconProducts.map((product, idx) => {
        return (
            <div key={idx} className="col-md-2" style={{ minHeight: 120, minWidth: 120 }} >
                <div className="card text-center">
                    <div className="card-body" >
                        <Link to={{ pathname: '/detail', state: product }}>
                            <img src={product.img} alt="" style={{ maxHeight: 120, minHeight: 120, maxWidth: '90%', }} />
                        </Link>
                        <div style={{
                            textAlign: 'left', maxHeight: 50, minHeight: 50, marginTop: 10, overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>{product.title}</div>
                        <div className="card-text text-danger" style={{ textAlign: 'left', fontWeight: 'bold' }}> Liên Hệ</div>
                        <small className="text-muted" />
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="container my-3">
            <div className="row g-3">
                <div className="col-md-3" style={{ maxHeight: 350, minHeight: 350, minWidth: 250 }}>
                    <MenuItem />
                </div>
                <div className="col-md-9">
                    <div className="card mb-3">
                        <div className="card-header" style={{ fontWeight: 'bold' }}>
                            Sản Phẩm Mới Nhất
                        </div>
                        <div className="card-body">
                            <div className="row g-2" style={{ marginBottom: 10 }}>
                                {carouselContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewItem;
