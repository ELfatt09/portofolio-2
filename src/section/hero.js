import React, { useRef, useEffect } from 'react';

const jobs = ['Front-end Developer', 'Back-end Developer', 'Fullstack Developer', 'Web Enthusiast', 'Intermediate English Speaker'];

function Hero(props) {
    const jobTitleRef = useRef(null);
    useEffect(() => {
        const jobTitle = jobTitleRef.current;
        let currentJob = 0;
        const typeWriter = () => {
            if (currentJob >= jobs.length) {
                currentJob = 0;
            }
            let job = jobs[currentJob];
            let charIndex = 0;
            let goingBack = false;
            let active = true;
            const interval = setInterval(() => {
                if (!goingBack && active) {
                    jobTitle.textContent = job.substring(0, charIndex);
                    charIndex += 1;
                    if (charIndex >= job.length) {
                        setTimeout(() => goingBack = true, 1000);
                    }
                } else {
                    jobTitle.textContent = job.substring(0, charIndex);
                    charIndex -= 1;
                    if (charIndex <= 0) {
                        goingBack = false;
                        currentJob++;
                        active = false;
                        clearInterval(interval);
                        typeWriter();
                    }
                }
            }, 50);
            return () => clearInterval(interval);
        }
        typeWriter();
    }, []);

    return (
        <section data-aos='slide-right' className='flex flex-col justify-center items-start w-full h-screen sm:items-center py-auto px-5'>
            <h1 className='uppercase font-serif transition duration-300 text-5xl tracking-wide bg-gray-900 hover:shadow-inner hover:shadow-emerald-600 hover:bg-gray-800 hover:border-t hoverborder-s p-2 rounded-md text-gray-200 font-bold mb-5 border-b-4 border-e-4 border-spacing-2 border-emerald-600 hover:border-none '>Hello There!!</h1>
            <h1 className='text-5xl align-start sm:align-center tracking-wide mb-4 text-gray-400 font-semibold font-serif'>My name is <span className='font-mono hover:tracking-widest hover:font-sans transition duration-300 text-emerald-600 font-bold hover:text-gray-200 hover:bg-emerald-600 p-2 rounded-md hover:font-semibold hover:shadow-lg hover:shadow-emerald-400 '>Sevalino Elfata,</span></h1>
            <h1 className='text-5xl tracking-normal mb-4 text-gray-400 font-semibold'>I'm a</h1>
            <h1 id='jobTitle' className='font-mono min-h-[65px] text-5xl tracking-wide mb-9 bg-emerald-600 shadow-lg shadow-emerald-400 p-2 rounded-md text-gray-200 font-semibold' ref={jobTitleRef}></h1>
            <a href='#aboutMe' className='transition duration-300 bg-emerald-600 font-bold text-gray-200 hover:text-emerald-600 hover:bg-transparent inline-block p-3 rounded-lg shadow-md hover:border-4 hover:border-emerald-600 transform '>About Me</a>
        </section>
    );
}

export default Hero;

