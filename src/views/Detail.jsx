import React from "react";
import Recomment from "./Recomment";
import parse from 'html-react-parser';
import { useHistory } from "react-router-dom";

const Detail = (props) => {

    const [product, setProduct] = React.useState();

    const history = useHistory();

    React.useEffect(() => {
        if (props.location.state === null || props.location.state === undefined) {
            history.push("/");
        }
        else {
            window.scrollTo(0, 0);
            setProduct(props.location.state);
        }
    }, [props.location.state, history])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8" >
                    {
                        product ?
                            <div className="card mb-3">
                                <div className="card-header" style={{ fontWeight: 'bold' }}>
                                    Chi Tiết Sản Phẩm
                                </div>

                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-md-3" style={{ minWidth: 200, marginBottom: 10 }}>
                                            <img
                                                src={product.img}
                                                className="img-thumbnail"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-9">
                                            <span style={{ fontWeight: 'bold' }}>{product.title}</span>
                                            <br /><br />
                                            Giá Bán: <span style={{ fontWeight: 'bold', color: 'red' }}>Liên Hệ</span>
                                            <br /><br />
                                            <p>
                                                {parse(product.text)}</p>

                                        </div>
                                    </div>

                                    <hr />
                                    {parse(product.description)}
                                    <hr />
                                </div>
                            </div>
                            : ''
                    }
                </div>
                <div className="col-md-4">
                    <Recomment />
                </div>
            </div>
        </div>
    );
}

export default Detail;
