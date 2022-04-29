import React from "react"
import { Link } from "react-router-dom";

const MenuItem = () => {

    return (
        <div className="card mb-3" style={{ maxHeight: 350, minHeight: 350, minWidth: 250 }}>
            <div className="card-header" style={{ fontWeight: 'bold' }}>
                Danh Mục Sản Phẩm
            </div>
            <div className="card-body">
                <Link to={{ pathname: '/product-type', state: '1.0' }} style={{ textDecoration: 'none', color: '#212529' }}>
                    <h6 className="card-title border-bottom border-dark pb-2" >Máy Bơm Chữa Cháy</h6>
                </Link>
                <Link to={{ pathname: '/product-type', state: '2.0' }} style={{ textDecoration: 'none', color: '#212529' }}>
                    <h6 className="card-title border-bottom border-dark pb-2">Thiết Bị Chữa Cháy</h6>
                </Link>
                <Link to={{ pathname: '/product-type', state: '3.0' }} style={{ textDecoration: 'none', color: '#212529' }}>
                    <h6 className="card-title border-bottom border-dark pb-2">Thiết Bị Báo Cháy</h6>
                </Link>
                <Link to={{ pathname: '/product-type', state: '4.0' }} style={{ textDecoration: 'none', color: '#212529' }}>
                    <h6 className="card-title border-bottom border-dark pb-2">Thiết Bị Chống Sét</h6>
                </Link>
                <Link to={{ pathname: '/product-type', state: '5.0' }} style={{ textDecoration: 'none', color: '#212529' }}>
                    <h6 className="card-title border-bottom border-dark pb-2">Thiết Bị Báo Trộm</h6>
                </Link>
                <Link to={{ pathname: '/charging', state: '6.0' }} style={{ textDecoration: 'none', color: '#212529' }}>
                    <h6 className="card-title border-bottom border-dark pb-2">Nạp Bình Chữa Cháy</h6>
                </Link>
                <Link to={{ pathname: '/product-type', state: '6.0' }} style={{ textDecoration: 'none', color: '#212529' }}>
                    <h6 className="card-title border-bottom border-dark pb-2">Dự Án PCCC</h6>
                </Link>
                <Link to={{ pathname: '/product-type', state: '7.0' }} style={{ textDecoration: 'none', color: '#212529' }}>
                    <h6 className="card-title border-bottom border-dark pb-2">Văn Bản PCCC</h6>
                </Link>
            </div>
        </div>
    );
}

export default MenuItem;
