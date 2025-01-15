import React from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {
    return (
        <motion.section
            initial={{ width: '0.1%', }}
            whileInView={{ width: '100%',transition: { duration: 1, delay: 2, ease: 'easeInOut' },  }}
            viewport= {{ once: true }}
            id='aboutme'
            className='snap-always snap-center overflow-hidden bg-emerald-500 h-auto z-10 py-[20vh]'
        >
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { delay: 2.5, ease: 'easeInOut' } }}
                className='w-full whitespace-nowrap left-0 mx-auto flex-row items-center z-0 overflow-hidden absolute h-full group:mt-0 font-serif uppercase text-5xl text-gray-200 font-bold flex'
            >
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className='whitespace-nowrap w-1/6 text-gray-700 text-[240px] font-semibold z-0'
                        initial={{ y: i % 2 === 0 ? '-200%' : '100%', rotate: 90 }}
                        animate={{ y: i % 2 === 0 ? '110%' : '-210%' }}
                        transition={{ repeat: Infinity, duration: 5, repeatType: 'mirror', ease: 'linear', delay: i * 0.5 }}
                    >
                        {i % 2 === 0 ? 'About Me' : 'Passionate Developer'}
                    </motion.div>
                ))}
            </motion.div>
            <div className='h-screen px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
                <div className='flex py-10 min-h-screen flex-col lg:flex-row items-end lg:items-center justify-end'>


                    <motion.div
                        className='mx-auto absolute md:relative w-auto h-screen md:h-[70vh] lg:h-screen lg:w-1/2'
                        initial={{ visibility: 'hidden', x: -400,  }}
                        whileInView={{ visibility: 'visible', x: 0, transition: { duration: 1, delay: 1} }}
                        transition={{ duration: 1, delay: 1, }}
                    >
                        <motion.img
                            whileHover={{ rotate: 10, }}
                            whileTap={{ rotate: -10, opacity: 1 }}
                            transition={{ duration: 0.3, type: "spring",}}
                            className='h-full w-full' src='./assets/Untitled.svg' alt='' />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 400, }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1} }}
                        whileHover={{ rotate: -10 }}
                        transition={{ duration: 0.3, type: "spring",}}
                        className='relative flex flex-col bg-gray-800 p-8 rounded-lg w-full max-h-[800px] lg:w-1/2'
                    >
                        <h2 className='text-2xl md:text-3xl font-bold leading-tight uppercase text-gray-800 bg-emerald-500 p-3 rounded-lg shadow-lg lg:text-5xl font-serif'>
                            About Me
                        </h2>
                        <p className='max-w-lg mt-3 text-md md:text-xl leading-relaxed text-gray-200 md:mt-8 font-serif'>
                            My name is <b>Sevalino Elfata</b>. I am a beginner Fullstack Web Programmer. I am currently a student at SMK IDN Boarding School Pamijahan, majoring in Software Engineer.
                        </p>

                        <p className='mt-4 text-lg md:text-xl text-gray-200 md:mt-8'>
                            See me at my <a href='https://www.linkedin.com/in/sevalino-elfata' title=''
                                className={`transition ease-in-out-all duration-200 text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-500 hover:underline`}>Linkedin</a>
                        </p>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    )
}

export default AboutMe


