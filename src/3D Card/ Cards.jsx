// Card.js
import React, { useState, useRef, useEffect } from 'react';

const Cards = ({ dataImage, header, content }) => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const cardRef = useRef(null);

    useEffect(() => {
        setWidth(cardRef.current.offsetWidth);
        setHeight(cardRef.current.offsetHeight);
    }, []);

    const handleMouseMove = (e) => {
        setMouseX(e.pageX - cardRef.current.offsetLeft - width / 2);
        setMouseY(e.pageY - cardRef.current.offsetTop - height / 2);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setMouseX(0);
            setMouseY(0);
        }, 1000);
    };

    const mousePX = mouseX / width;
    const mousePY = mouseY / height;
    const rX = mousePX * 30;
    const rY = mousePY * -30;
    const tX = mousePX * -40;
    const tY = mousePY * -40;

    return (
        <div
            className="card-wrap"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
        >
            <div
                className="card"
                style={{ transform: `rotateY(${rX}deg) rotateX(${rY}deg)` }}
            >
                <div
                    className="card-bg"
                    style={{
                        transform: `translateX(${tX}px) translateY(${tY}px)`,
                        backgroundImage: `url(${dataImage})`,
                    }}
                ></div>
                <div className="card-info">
                    <h1>{header}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
