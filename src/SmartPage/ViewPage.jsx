import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { playOutline, pauseOutline, playBackOutline, playForwardOutline } from 'ionicons/icons';
import facts from './facts';


const ViewPage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = document.getElementById("background-music");

    const togglePlayPause = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex flex-col items-center min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/771fac26-9092-4883-bd25-8eb11bf39af0')" }}>
            <audio id="background-music" loop>
                <source src="https://www.chosic.com/wp-content/uploads/2023/06/Luke-Bergs-AgusAlvarez-LYCKEBORN-Horizon(chosic.com).mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <header className="flex flex-col items-center justify-center w-2/5 bg-white/20 backdrop-blur-lg shadow-lg rounded-3xl border border-white/80 mt-8 mb-8 p-6">
                <div className="flex items-center justify-center h-40">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className={`w-6 rounded-lg shadow-lg transition-transform duration-200 bg-colorful-line-${i + 1}`}
                            style={{
                                animation: "flow 4s infinite cubic-bezier(0, 0.57, 1, 0.46)",
                                animationDelay: `${-0.5 * (i + 1)}s`
                            }}
                        ></div>
                    ))}
                </div>
                <div className="flex items-center gap-4 my-4 border-2 border-green-200 rounded-lg p-2 text-white">
                    <IonIcon className="text-xl transition-colors duration-300" icon={playBackOutline} />
                    <button onClick={togglePlayPause} className="flex items-center justify-center bg-transparent border-0 outline-0 cursor-pointer transition-transform duration-300 hover:scale-110">
                        <IonIcon className={`text-2xl ${isPlaying ? 'hidden' : ''}`} icon={playOutline} />
                        <IonIcon className={`text-2xl ${isPlaying ? '' : 'hidden'}`} icon={pauseOutline} />
                    </button>
                    <IonIcon className="text-xl transition-colors duration-300" icon={playForwardOutline} />
                </div>
                <h1 className="text-center text-gray-300 font-bubblegum-sans text-4xl md:text-5xl lg:text-6xl tracking-wide select-none">80's Music Facts</h1>
            </header>

            <main className="max-w-6xl mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {facts.map((fact, index) => (
                    <div key={index} className={`item ${fact.type} ${fact.hide ? 'hidden lg:block' : ''}`}>
                        {fact.type === "fact" ? (
                            <div className="relative flex justify-center items-center p-5 text-white font-light text-sm md:text-base leading-relaxed select-none transform-origin-top hover:animate-swing">
                                <p>{fact.content}</p>
                                <div className="absolute top-2 left-1/2 w-2.5 aspect-square bg-red-700 rounded-full shadow-inner"></div>
                            </div>
                        ) : (
                            <div className="overflow-hidden">
                                <img src={fact.image} alt="" className="object-cover transition-transform duration-700 transform hover:scale-140 hover:rotate-4" />
                            </div>
                        )}
                    </div>
                ))}
            </main>

            <style>
                {`
          @keyframes flow {
            0%, 100% {
              height: 20%;
              border-radius: 5px;
            }
            50% {
              height: 90%;
              border-radius: 30px;
            }
          }
          @keyframes swing {
            0% {
              transform: rotate(-4deg);
            }
            100% {
              transform: rotate(4deg);
            }
          }
        `}
            </style>
        </div>
    );
}

export default ViewPage;
