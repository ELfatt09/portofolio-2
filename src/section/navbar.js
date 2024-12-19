import React from 'react';
import NavbarButton from '../components/NavbarButton';

function Navbar(props) {
    return (
        <nav className='block w-full max-w-[1200px] mx-auto px-4 py-2 md:px-8 md:py-3 bg-gray-800 bg-opacity-70 sticky top-3 shadow rounded-lg backdrop-blur-lg backdrop-saturate-150 z-[9999]'>
            <div className='container flex flex-wrap items-center justify-between text-gray-200'>
                <a href='#'
                    className='font-bold font-serif mr-4 block cursor-pointer py-1.5 text-base text-emerald-600 md:text-lg'>
                    Sevalino Elfata
                </a>
                <div className='hidden md:block'>
                    <ul className='flex flex-col gap-2 mt-2 mb-4 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6'>
                        <NavbarButton url='#'>Home</NavbarButton>
                        <NavbarButton url='#aboutme'>About Me</NavbarButton>
                        <NavbarButton url='#'>My Skills</NavbarButton>
                        <NavbarButton url='#'>Contact</NavbarButton>
                    </ul>
                </div>
                <button
                    className='relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:hidden'
                    type='button'
                    onClick={() => document.getElementById('mobileMenu').classList.toggle('hidden')}>
                    <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='2'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </span>
                </button>
            </div>
            <div id='mobileMenu' className='block md:hidden mt-4 hidden'>
                <ul className='flex flex-col gap-2'>
                    <NavbarButton url='#'>Home</NavbarButton>
                    <NavbarButton url='#'>About Me</NavbarButton>
                    <NavbarButton url='#'>My Skills</NavbarButton>
                    <NavbarButton url='#'>Contact</NavbarButton>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

