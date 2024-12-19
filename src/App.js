import React, { useEffect } from 'react';
import Navbar from './section/navbar';
import Hero from './section/hero';
import AOS from 'aos';
import Aboutme from './section/aboutme';
import 'aos/dist/aos.css';



function App() {
  let themeColors = ['rose', 'sky', 'sky', 'violet'];
  let color = themeColors[Math.floor(Math.random() * themeColors.length)];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <div className="App">
      <div className='bg-gray-800 w-full scroll-smooth'>
        <Navbar themecolor={color} />
        <Hero themecolor={color} />
        <Aboutme themecolor={color} />
      </div>
    </div>
  );
}

export default App;


