import React from 'react'

import tamil2 from '../assets/tamil2.jpeg'
import sabari2 from '../assets/sabari2.jpeg'
import tamil4 from '../assets/tamil4.jpeg'

const DashBoard = () => {

    const profiles = [
        {
            name: "George",
            role: "Designer",
            image: tamil2,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dicta eaque ipsa iure, laborum quibusdam tempora ullam ut! Architecto aspernatur dignissimos fugiat pariatur sit! Ad amet beatae dolor eius, esse, eum eveniet fuga laborum minima nulla quam similique, sunt."
        },
        {
            name: "Tamilarasan",
            role: "Developer",
            image: tamil4,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dicta eaque ipsa iure, laborum quibusdam tempora ullam ut! Architecto aspernatur dignissimos fugiat pariatur sit! Ad amet beatae dolor eius, esse, eum eveniet fuga laborum minima nulla quam similique, sunt."
        },
        {
            name: "Sabari",
            role: "UI/Designer",
            image: sabari2,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dicta eaque ipsa iure, laborum quibusdam tempora ullam ut! Architecto aspernatur dignissimos fugiat pariatur sit! Ad amet beatae dolor eius, esse, eum eveniet fuga laborum minima nulla quam similique, sunt."
        }
    ];

    return (
        <div className="container  bg-transparent  mx-auto">
            <h1 className="text-3xl mt-8 mb-4">Team Profile</h1>
            <div className="flex flex-wrap items-center justify-between">
                {/* Profile Cards */}
                {profiles.map((profile, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="profile-card rounded m-0">
                            <div className="profile-img relative overflow-hidden">
                                <img src={profile.image} alt="Profile" className="w-full transition-transform duration-500 hover:scale-125" />
                                <div className="over-layer absolute w-full h-full top-0 left-0 opacity-0 bg-white bg-opacity-40 text-left transition-all duration-500 ease-in-out">
                                    <p className="p-4 text-white">{profile.description}</p>
                                </div>
                            </div>
                            <div className="profile-content bg-pink-500 text-white py-4">
                                <h3 className="title text-xl">{profile.name}<span>{profile.role}</span></h3>
                                <ul className="social-link flex justify-center mt-2">
                                    <li><a href="#" className="fa fa-facebook w-8 h-8 bg-white bg-opacity-50 flex items-center justify-center"></a></li>
                                    <li><a href="#" className="fa fa-twitter w-8 h-8 bg-white bg-opacity-50 flex items-center justify-center"></a></li>
                                    <li><a href="#" className="fa fa-youtube w-8 h-8 bg-white bg-opacity-50 flex items-center justify-center"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashBoard