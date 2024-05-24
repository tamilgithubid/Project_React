import React, { useState, useRef, useEffect } from 'react';
import tamil2 from '../assets/tamil2.jpeg'
import sabari2 from '../assets/sabari2.jpeg'
import tamil4 from '../assets/tamil4.jpeg'
import broo from '../assets/broo.jpeg'

const Card = ({ dataImage, children }) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);
    const cardRef = useRef(null);

    useEffect(() => {
        setWidth(cardRef.current.offsetWidth);
        setHeight(cardRef.current.offsetHeight);
    }, []);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        setMouseX(e.clientX - rect.left - width / 2);
        setMouseY(e.clientY - rect.top - height / 2);
    };

    const handleMouseEnter = () => {
        clearTimeout(mouseLeaveDelay);
    };

    const handleMouseLeave = () => {
        const delay = setTimeout(() => {
            setMouseX(0);
            setMouseY(0);
        }, 1000);
        setMouseLeaveDelay(delay);
    };

    const cardStyle = {
        transform: `rotateY(${(mouseX / width) * 15}deg) rotateX(${(mouseY / height) * -15}deg)`,
    };

    const cardBgTransform = {
        transform: `translateX(${(mouseX / width) * -20}px) translateY(${(mouseY / height) * -20}px)`,
    };

    const cardBgImage = {
        backgroundImage: `url(${dataImage})`,
    };

    return (
        <div
            className="card-wrap perspective cursor-pointer m-4"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
        >
            <div className="card relative w-60 h-80 bg-gray-800 overflow-hidden rounded-xl shadow-lg transition-transform duration-700 ease-out" style={cardStyle}>
                <div className="card-bg absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover transition-transform duration-700 ease-out" style={{ ...cardBgTransform, ...cardBgImage }}></div>
                <div className="card-info absolute bottom-0 p-5 text-white transform translate-y-1/3 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    {children}
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div id="app" className="container mx-auto py-10 px-4">
            <h1 className="title text-3xl font-bold text-center text-brown-800 mb-10">Hover over the cards</h1>
            <div className="flex flex-wrap  justify-between">
                <Card dataImage={tamil2}>
                    <>
                        <h1 className="text-3xl font-bold transition-transform duration-700 ease-in-out">Canyons</h1>
                        <p className="mt-2 transition-opacity duration-700 ease-in-out">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </>
                </Card>
                <Card dataImage={sabari2}>
                    <>
                        <h1 className="text-3xl font-bold transition-transform duration-700 ease-in-out">Beaches</h1>
                        <p className="mt-2 transition-opacity duration-700 ease-in-out">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </>
                </Card>
                <Card dataImage={tamil4}>
                    <>
                        <h1 className="text-3xl font-bold transition-transform duration-700 ease-in-out">Trees</h1>
                        <p className="mt-2 transition-opacity duration-700 ease-in-out">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </>
                </Card>
                <Card dataImage={broo}>
                    <>
                        <h1 className="text-3xl font-bold transition-transform duration-700 ease-in-out">Lakes</h1>
                        <p className="mt-2 transition-opacity duration-700 ease-in-out">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </>
                </Card>
            </div>
        </div>
    );
};

export default App;
