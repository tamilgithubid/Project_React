import React, { useState } from 'react'
import tamil4 from '../assets/broo.jpeg'

const ViewTabs = () => {
    const [activeSection, setActiveSection] = useState("#about");

    const handleButtonClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="min-h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-fixed p-5" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1566738780863-f9608f88f3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80)" }}>
            <div className={`max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${activeSection !== "#about" ? "h-[550px]" : "h-[450px]"}`}>

                <div className="relative flex-shrink-0 h-56">
                    <div className="absolute inset-0 bg-cover bg-center h-24 filter blur-lg scale-125 " style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')" }}></div>
                    <img className="absolute bottom-8  left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white" src={tamil4} alt="avatar" />
                    <h1 className="absolute bottom-36 left-1/2 transform -translate-x-1/2 text-xl font-bold">William Rocheald</h1>
                    <h2 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm font-medium opacity-70 text-black tracking-widest">UI Developer</h2>
                </div>

                <div className="p-5">
                    {activeSection === "#about" && (
                        <div className="animate-fadeIn">
                            <h3 className="font-bold text-lg  text-black mb-2">ABOUT</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn disrupt.</p>
                            <div className="flex space-x-3 mt-4">
                                {/* Add social media icons */}
                                <a href="#" className="text-gray-500 hover:text-gray-700">
                                    {/* Facebook Icon */}
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-700">
                                    {/* Twitter Icon */}
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-700">
                                    {/* Instagram Icon */}
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-700">
                                    {/* LinkedIn Icon */}
                                </a>
                            </div>
                        </div>
                    )}
                    {activeSection === "#experience" && (
                        <div className="animate-fadeIn">
                            <h3 className="font-bold  text-gray-600 text-lg mb-2">WORK EXPERIENCE</h3>
                            <div className="space-y-5">
                                {/* Experience items */}
                                <div className="relative pl-10">
                                    <div className="absolute  left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600"></div>
                                    <h4 className="font-semibold  text-gray-900">Front-end Developer at <span className="font-bold  text-gray-600">JotForm</span> (2014)</h4>
                                    <p className="text-sm text-gray-700">Disrupt stumptown retro everyday carry unicorn.</p>
                                </div>
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600"></div>
                                    <h4 className="font-semibold  text-gray-600">UI Developer at <span className="font-bold  text-gray-600">GitHub</span> (2016)</h4>
                                    <p className="text-sm text-gray-700">Developed new conversion funnels and disrupt.</p>
                                </div>
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600"></div>
                                    <h4 className="font-semibold  text-gray-600">Illustrator at <span className="font-bold  text-gray-600">Google</span> (2018)</h4>
                                    <p className="text-sm text-gray-700">Onboarding illustrations for App.</p>
                                </div>
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600"></div>
                                    <h4 className="font-semibold">Full-Stack Developer at <span className="font-bold  text-gray-600">CodePen</span> (2020)</h4>
                                    <p className="text-sm text-gray-700">Responsible for the encompassing brand experience.</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeSection === "#contact" && (
                        <div className="animate-fadeIn">
                            <h3 className="font-bold text-lg text-black mb-2">CONTACT</h3>
                            <div className="space-y-4">
                                <div className="flex items-center text-gray-700 text-sm">
                                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    Algonquin Rd, Three Oaks Vintage, MI, 49128
                                </div>
                                <div className="flex items-center text-gray-700 text-sm">
                                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                                    (269) 756-9809
                                </div>
                                <div className="flex items-center text-gray-700 text-sm">
                                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
                                    william@rocheald.com
                                </div>
                                <button className="w-full py-3 text-center text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg font-semibold">WORK TOGETHER</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex">
                    <button className={`flex-1 py-3 text-center text-sm font-medium ${activeSection === "#about" ? "border-b-4 border-indigo-500 text-indigo-500 bg-gradient-to-b from-indigo-100 to-indigo-300" : "text-gray-600"}`} onClick={() => handleButtonClick("#about")}>ABOUT</button>
                    <button className={`flex-1 py-3 text-center text-sm font-medium ${activeSection === "#experience" ? "border-b-4 border-indigo-500 text-indigo-500 bg-gradient-to-b from-indigo-100 to-indigo-300" : "text-gray-600"}`} onClick={() => handleButtonClick("#experience")}>EXPERIENCE</button>
                    <button className={`flex-1 py-3 text-center text-sm font-medium ${activeSection === "#contact" ? "border-b-4 border-indigo-500 text-indigo-500 bg-gradient-to-b from-indigo-100 to-indigo-300" : "text-gray-600"}`} onClick={() => handleButtonClick("#contact")}>CONTACT</button>
                </div>
            </div>
        </div>
    );
};

export default ViewTabs