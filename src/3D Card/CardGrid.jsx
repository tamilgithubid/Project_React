import React, { useEffect } from 'react';
import Rellax from 'rellax';
import tamil2 from '../assets/tamil2.jpeg';
import sabari2 from '../assets/sabari2.jpeg';
import tamil4 from '../assets/tamil4.jpeg';
import broo from '../assets/broo.jpeg';

const App = () => {
    useEffect(() => {
        new Rellax('.rellax', {
            speed: 4,
            center: true,
        });
    }, []);

    return (
        <div className="h-screen">
            <div className="min-h-full container mx-auto bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600">
                <section className="cards-grid px-24 grid grid-cols-[350px_1fr_350px] grid-rows-[repeat(4,100vh)] items-center perspective-1200">
                    <div className="card bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${tamil2})` }}>
                        <h2 className="card-title rellax"> <br /> Tamil</h2>
                    </div>
                    <div className="card bg-cover bg-center bg-no-repeat row-start-2" style={{ backgroundImage: `url(${sabari2})` }}>
                        <h2 className="card-title rellax" data-rellax-speed="1"> <br />Sabari</h2>
                    </div>
                    <div className="card bg-cover bg-center bg-no-repeat row-start-3" style={{ backgroundImage: `url(${tamil4})` }}>
                        <h2 className="card-title rellax"> <br />Developer</h2>
                    </div>
                    <div className="card bg-cover bg-center bg-no-repeat row-start-4" style={{ backgroundImage: `url(${broo})` }}>
                        <h2 className="card-title rellax"> <br />George</h2>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
