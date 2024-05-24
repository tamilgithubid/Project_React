

const BackGround = () => {
    return (
        <div className="relative h-screen w-screen">
            <div className="absolute z-5 w-[200px] h-[200px] bg-[#95C3DC] rounded-full filter blur-[50px] diagnoal-top-to-right" style={{ transform: 'translate(30vw, 40vh)' }}></div>
            <div className="absolute z-4 w-[75px] h-[75px] bg-[#E6770E] rounded-full filter blur-[50px] diagnoal-top-to-left" style={{ transform: 'translate(60vw, 40vh)' }}></div>
            <div className="absolute z-3 w-[175px] h-[175px] bg-[rgba(255,0,0,0.20)] rounded-full filter blur-[50px] diagnoal-bottom-to-right" style={{ transform: 'translate(60vw, 60vh)' }}></div>
            <div className="absolute z-2 w-[125px] h-[125px] bg-[rgba(97,32,202,0.50)] rounded-full filter blur-[50px] diagnoal-bottom-to-left" style={{ transform: 'translate(50vw, 50vh)' }}></div>
            <div className="absolute z-1 w-[175px] h-[175px] bg-[rgba(247,155,68,0.40)] rounded-full filter blur-[50px] center-to-top" style={{ transform: 'translate(30vw, 50vh)' }}></div>
        </div>
    );
};




export default BackGround;