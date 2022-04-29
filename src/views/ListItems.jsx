import React from "react";
import { Link } from "react-router-dom";

const ListItems = (props) => {
    const products = props.data;
    return (
        <div className="row g-2" style={{ marginTop: 10 }}>
            {products.map((product) => {
                return (
                    <div key={product.id} id={product.id} className="col-md-2" style={{ minHeight: 120, minWidth: 130 }} >
                        <div className="card text-center">
                            <div className="card-body" style={{ minHeight: 240 }} >
                                <Link to={{ pathname: '/detail', state: product }}>
                                    <img src={product.img} alt="" style={{ maxHeight: 120, minHeight: 120, minWidth: '100px', maxWidth: '90%', }} />
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
            })
            }
        </div >
    );
}

export default ListItems;
