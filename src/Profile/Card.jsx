import React from "react";

const Card = ({ imgUrl, category, heading }) => {
    return (
        <a href="#" className="card">
            <div
                className="card__bg"
                style={{ backgroundImage: `url(${imgUrl})` }}
            ></div>
            <div className="card__content">
                <p className="card__category">{category}</p>
                <h3 className="card__heading">{heading}</h3>
            </div>
        </a>
    );
};

export default Card;