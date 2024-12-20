import React from 'react'

function Aboutme(props) {
    return (
        <section id='aboutme' className='overflow-hidden  bg-emerald-500 md:pt-0 sm:pt-16 2xl:pt-16 min-h-screen'>
            <div className='mt-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
                <div className='flex py-10 min-h-screen flex-col lg:flex-row items-end lg:items-center justify-end'>


                    <div className='mx-auto absolute md:relative w-auto h-screen md:h-[70vh] lg:h-screen lg:w-1/2' data-aos='flip-left'>
                        <img className='h-full w-full' src='./assets/Untitled.svg' alt='' />
                    </div>

                    <div data-aos='flip-right' className='relative flex flex-col  bg-gray-800 p-8 rounded-lg w-full lg:w-1/2 '>
                        <h2 className='text-2xl md:text-3xl font-bold leading-tight uppercase text-gray-800 bg-emerald-500 p-3 rounded-lg shadow-lg lg:text-5xl font-serif'>About Me
                        </h2>
                        <p className='max-w-lg mt-3 text-md md:text-xl leading-relaxed text-gray-200 md:mt-8 font-serif'>
                            My name is <b>Sevalino Elfata</b>. I am a beginner Fullstack Web Programmer. I am currently a student at SMK IDN Boarding School Pamijahan, majoring in Software Engineer.</p>

                        <p className='mt-4 text-lg md:text-xl text-gray-200 md:mt-8'>
                            See me at my <a href='#' title=''
                                className={`transition ease-in-out-all duration-200 text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-500 hover:underline`}>Linkedin</a>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Aboutme

