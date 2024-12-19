import React from 'react'

function aboutme(props) {
    return (
        <section id='aboutme' className='overflow-hidden  bg-emerald-500 md:pt-0 sm:pt-16 2xl:pt-16 min-h-screen'>
            <div className='mt-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
                <div className='flex py-10 min-h-screen flex-col lg:flex-row items-end lg:items-center justify-end'>


                    <div className='mx-auto absolute md:relative w-auto h-screen md:h-[70vh] lg:h-screen lg:w-1/2' data-aos='slide-left'>
                        <img className='h-full w-full' src='./assets/Untitled.svg' alt='' />
                    </div>

                    <div data-aos='slide-right' className='relative flex flex-col  bg-gray-800 p-8 rounded-lg w-full lg:w-1/2 '>
                        <h2 className='text-2xl md:text-3xl font-bold leading-tight uppercase text-gray-800 bg-emerald-500 p-3 rounded-lg shadow-lg lg:text-5xl font-serif'>About Me
                        </h2>
                        <p className='max-w-lg mt-3 text-md md:text-xl leading-relaxed text-gray-200 md:mt-8 font-serif'>
                            Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>

                        <p className='mt-4 text-lg md:text-xl text-gray-200 md:mt-8'>
                            <span className='relative inline-block'>
                                <span className='relative'> Have a question? </span>
                            </span>
                            <br className='block sm:hidden' />Ask me on <a href='#' title=''
                                className={`transition-all duration-200 text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-500 hover:underline`}>Twitter</a>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default aboutme

