import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item, index }) => (
    <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
        <Link to={item.to}>
            <img src={item.img} className="img-fluid" alt={item.title} style={{ maxHeight: '350px', width: '100%' }} />
            {(item.title || item.description) && (
                <div className="carousel-caption d-none d-md-block">
                    {item.title && <h5>{item.title}</h5>}
                    {item.description && <p>{item.description}</p>}
                </div>
            )}
        </Link>
    </div>
);

const Indicator = ({ item, index }) => (
    <li
        data-target={`#${item}`}
        data-slide-to={index}
        className={`${index === 0 ? "active" : ""}`}
    />
);

const Slide = (props) => {
    return (
        <div
            id={props.props.id}
            className={`carousel slide ${props.props.className}`}
            data-ride="carousel"
        >
            <ol className="carousel-indicators">
                {props.props.data.map((item, index) => (
                    <Indicator item={props.props.id} index={index} key={index} />
                ))}
            </ol>
            <div className="carousel-inner">
                {props.props.data.map((item, index) => (
                    <Item item={item} index={index} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Slide;