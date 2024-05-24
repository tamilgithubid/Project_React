import React from 'react';


const cards = [
    {
        name: "Iron Man",
        role: "Frontend Developer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFIvBPH9fIMQZis4SHYTuv485uqr38bg1VQ&usqp=CAU",
        delay: -1
    },
    {
        name: "Spider Man",
        role: "Full-stack Developer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMYmBQyoz9BWjEiMi5XipSPOmhamZUyI1gQ&usqp=CAU",
        delay: 0
    },
    {
        name: "Venom",
        role: "Tester",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2k6vsAWhq5UPsCW58Q2RSCKqPxMDq75wfg&usqp=CAU",
        delay: 1
    },
    {
        name: "Batman",
        role: "Backend Developer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwJX81iy7cnzgclyjTKlNnDlzIzPN1KSIgA&usqp=CAU",
        delay: 2
    },
    {
        name: "Superman",
        role: "Youtuber",
        img: "https://static.rogerebert.com/uploads/review/primary_image/reviews/great-movie-superman-1978/EB20101104REVIEWS08101109987AR.jpg",
        delay: 2
    }
];

const App = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-t from-pink-200 via-yellow-100">
            <div className="relative flex justify-center items-center w-full h-full overflow-hidden">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="absolute flex items-center justify-between p-6 bg-white rounded-3xl shadow-lg transition-all animate-card w-96"
                        style={{ animationDelay: `calc(3s * ${card.delay})` }}
                    >
                        <div className="flex items-center relative">
                            <div className="absolute -left-10 p-2 bg-white rounded-full shadow-md">
                                <img className="w-24 h-24 rounded-full object-cover" src={card.img} alt={card.name} />
                            </div>
                            <div className="ml-20">
                                <span className="block font-semibold text-xl">{card.name}</span>
                                <p className="text-gray-700">{card.role}</p>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="px-5 py-2 text-white bg-gradient-to-b from-purple-400 to-blue-500 rounded-full transition-transform transform hover:scale-95"
                        >
                            Follow
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
