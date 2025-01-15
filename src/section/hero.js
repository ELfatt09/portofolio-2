import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const jobs = ['Web Developer', 'PHP Developer', 'Laravel Developer', 'React Developer', 'Golang Developer', 'Back-end Developer', 'Front-end Developer', 'Intermediate English Speaker'];

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
                    jobTitle.textContent = job.substring(0, charIndex) + (charIndex < job.length ? '_' : '');
                    charIndex += 1;
                    if (charIndex >= job.length) {
                        setTimeout(() => goingBack = true, 1000);
                    }
                } else {
                    jobTitle.textContent = job.substring(0, charIndex) + (charIndex < job.length ? '_' : '');
                    charIndex -= 1;
                    if (charIndex <= 0) {
                        goingBack = false;
                        currentJob++;
                        active = false;
                        clearInterval(interval);
                        typeWriter();
                    }
                }
            }, 50); // Slightly increase the interval for smoother animation
            return () => clearInterval(interval);
        }
        typeWriter();
    }, [jobs]);

    return (
        <section className='snap-always snap-center overflow-hidden flex flex-col justify-start md:justify-center items-start w-full pt-10 md:pt-0 min-h-screen md:h-screen sm:items-center py-auto mb-[20vh] bg-gray-800'>
            <motion.div
                initial={{ visibility: 'hidden' }}
                animate={{ visibility: 'visible', transition: { delay: 3 } }}
                className='overflow-hidden absolute w-auto max-w-full top-0 left-0 h-full group:mt-0 font-serif uppercase text-5xl text-gray-200 font-bold'>
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className='w-full whitespace-nowrap text-gray-400 hover:text-emerald-800 text-[23vh] font-bold z-0'
                        style={{
                            textAlign: i % 2 === 0 ? 'right' : 'left',
                        }}
                        initial={{ x: i % 2 === 0 ? '-200%' : '100%' }}
                        animate={{ x: i % 2 === 0 ? '110%' : '-210%' }}
                        transition={{ repeat: Infinity, duration: 10, repeatType: 'mirror', ease: 'linear', delay: 3, }}
                    >
                        {jobs[Math.floor(Math.random() * jobs.length)]}
                    </motion.div>
                ))}
            </motion.div>
            <motion.div
                className='overflow-hidden h-full z-10 flex flex-col w-full max-w-full md:max-w-[75vw] justify-start md:justify-center items-center px-3 md:px-10 sm:items-center py-20  bg-gray-900 bg-opacity-80 backdrop-blur-md backdrop-saturate-100'
                initial={{ scaleY: 0, width: '100%' }}
                animate={{ scaleY: 1, width: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
            >
                <motion.h1
                    className='overflow-hidden whitespace-nowrap uppercase font-serif font-bold text-4xl lg:text-6xl tracking-wide bg-gray-900 hover:shadow-inner hover:shadow-emerald-600 hover:bg-gray-800 hover:border-t hover:border-s p-2 rounded-md text-gray-200 mb-5 border-b-4 border-e-4 border-spacing-2 border-emerald-600 hover:border-none '
                    align='center'
                    initial={{ width: '0%', }}
                    animate={{ width: '', }}
                    transition={{ duration: 1.5, delay: 1.5, ease: 'easeInOut' }}
                >
                    Hello There!!
                </motion.h1>
                <motion.h1
                    className='flex-col  w-full md:w-2/3 justify-center flex overflow-hidden text-4xl lg:text-6xl align-start sm:align-center tracking-wide mb-4 text-gray-400 font-semibold font-serif'

                >
                    <motion.span initial={{ height: '0rem', }}
                        animate={{ height: window.innerWidth <= 768 ? '3rem' : '4rem', }}
                        transition={{ duration: 0.5, delay: 3, ease: 'easeInOut' }}
                        className='overflow-hidden w-auto h-auto flex items-end justify-center'>
                        My name is
                    </motion.span>
                    <div className='w-auto h-auto flex flex-wrap items-end justify-center'>
                        <motion.span initial={{ width: 0, }}
                            animate={{ width: '', }}
                            transition={{ duration: 0.5, delay: 4, ease: 'easeInOut' }}
                            className='overflow-hidden whitespace-nowrap font-mono hover:tracking-widest hover:font-sans transition ease-in-out duration-300 text-emerald-600 font-bold hover:text-gray-200 hover:bg-emerald-600 py-2 rounded-md hover:font-semibold hover:shadow-lg hover:shadow-emerald-400 '>
                            Sevalino Elfata
                        </motion.span>
                        <motion.span
                            initial={{ scale: 1 }}
                            animate={{ scale: 0 }}
                            transition={{ duration: 0.5, delay: 4, ease: 'easeInOut' }}
                            className='h-[2.25rem] w-[2.25rem] lg:h-[3.75rem] lg:w-[3.75rem] rounded-full bg-emerald-600 flex items-center justify-center'
                        >

                        </motion.span>
                    </div>
                </motion.h1>
                <motion.h1
                    className='text-4xl lg:text-6xl tracking-normal mb-4 text-gray-400 font-semibold'
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    transition={{ duration: 1.2, delay: 5, ease: 'easeInOut' }}
                >
                    I'm a
                </motion.h1>
                <motion.h1
                    id='jobTitle'
                    className='font-mono min-h-[65px] text-4xl lg:text-6xl tracking-wide mb-9 bg-emerald-600 shadow-lg shadow-emerald-400 p-2 rounded-md text-gray-200 font-semibold'
                    initial={{ rotateX: -90 }}
                    animate={{ rotateX: 0, type: 'spring', stiffness: 50 }}
                    transition={{ type: "spring", duration: 0.7, delay: 6, ease: 'linear' }}
                    ref={jobTitleRef}
                >
                    Job Title
                </motion.h1>
                <motion.button
                    type='button'
                    onClick={() => window.scrollTo({ top: jobTitleRef.current.offsetTop - 100, behavior: 'smooth' })}
                    className='transition ease-in-out duration-300 text-2xl font-serif font-bold text-gray-200 bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-5 py-2.5 text-center inline-flex items-center'
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 2, delay: 7, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    About Me
                </motion.button>
            </motion.div>
        </section >
    );
}

export default Hero;

