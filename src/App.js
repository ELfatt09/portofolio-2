import React, { useEffect } from 'react';
import Navbar from './section/navbar';
import Hero from './section/hero';
import Aboutme from './section/aboutme';
import Skills from './section/skills'
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <div className="App">
      <div className='bg-gray-800 w-full scroll-smooth'>
        <Navbar />
        <Hero />
        <Aboutme />
        <Skills />
      </div>
    </div>
  );
}

export default App;


