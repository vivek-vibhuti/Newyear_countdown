import React, { useEffect, useState } from 'react';

export const NewYearCountdown = () => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const newYear = new Date(now.getFullYear() + 1, 0, 1);
            const difference = newYear - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        calculateTimeLeft(); // Set initial time
        const interval = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="text-center text-[#000000]  w-full ">
            <h1 className="text-6xl shadow-opacity-5 shadow-2xl  py-4 font-extrabold">Countdown to New Year:</h1>
            <div className="text-lg">
                {timeLeft.days !== undefined ? (
                    <div className='flex space-x-4 content-center justify-center bg-[#F97216] mt-48 text-4xl '>
                        <p  className="bg-orange-500 h-36 border-2 shadow-opacity-5 shadow-2xl shadow-black w-48 content-center  hover:border-slate-950 hover:animate-pulse hover:-translate-y-16 ">{timeLeft.days} Days</p>
                        <p  className="bg-orange-500 h-36 border-2 shadow-opacity-5 shadow-2xl shadow-black  w-48 content-center  hover:border-slate-950 hover:animate-pulse hover:translate-y-20 ">{timeLeft.hours} Hours</p>
                        <p  className="bg-orange-500 h-36 border-2 w-48 content-center  hover:border-slate-950 hover:animate-pulse hover:-translate-y-16 shadow-opacity-5 shadow-2xl shadow-black">{timeLeft.minutes} Minutes</p>
                        <p  className="bg-orange-500 h-36 border-2 shadow-opacity-5 shadow-2xl shadow-black w-48 content-center  hover:border-slate-950 hover:animate-pulse hover:translate-y-20 shadow-opacity-50 ">{timeLeft.seconds} Seconds</p>
                    </div>
                ) : (
                    <p>Time's up!</p>
                )}
            </div>
        </div>
    );
};
