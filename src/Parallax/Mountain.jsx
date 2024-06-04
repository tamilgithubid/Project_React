import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mountain = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/table");
    }


    return (
        <div>
            <div onClick={handleClick} id="first" className="parallax bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/flagged/photo-1575143837079-efa006aa9a02')" }}>
                <h1 className="text-3xl text-gray-800 opacity-70 text-center items-center mt-72  font-semibold  ms-80 animate-fadeInDown">Life is not a straight line</h1>
                <h2 className="text-1xl  text-gray-500 opacity-70 text-center font-semibold    ms-10 mt-3 animate-fadeInUp">Oscar Wilde...</h2>
            </div>

            <div id="content" className="gradient bg-gradient-to-t from-dark-faded to-gray-200">
                <div className="flex items-center justify-center  ">
                    <p className="text-l text-gray-900 italic leading-loose text-center p-2 max-w-4xl animate-fadeIn">
                        --Parallax--
                    </p>
                </div>
            </div>

            <div id="second" className="parallax bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528877720315-1d05b40cd826')" }}>
                <h1 className="text-7xl text-gray-800 opacity-70 text-center items-center mt-80 animate-fadeInDown">have a nice day</h1>


            </div>
        </div>
    );

};


export default Mountain