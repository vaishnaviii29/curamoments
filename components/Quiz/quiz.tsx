import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

import SliderComponent from './SliderComponent0';
import SliderComponent1 from './SliderComponent1';
import SliderComponent2 from '../Quiz/SliderComponent2';
import SliderComponent3 from '../Quiz/SliderComponent3';
import SliderComponent4 from '../Quiz/SliderComponent4';
import SliderComponent5 from '../Quiz/SliderComponent5';
import SliderComponent6 from '../Quiz/SliderComponent6';

const SliderWithProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const totalScrollWidth = container.scrollWidth - container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const scrollPercentage = (scrollLeft / totalScrollWidth) * 100;
      setScrollProgress(scrollPercentage);
    }
  };

  const scrollToPrevious = () => {
    const container = containerRef.current;
    if (container) {
      const slideWidth = container.clientWidth;
      container.scrollBy({
        left: -slideWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Move the icon as per the scroll progress
  const iconPosition = `${(scrollProgress / 100) * 83}%`; // Adjust icon movement based on scroll percentage

  return (
    <div className="relative w-full h-screen">
      {/* Loading Bar */}
    
      <div className="absolute top-12 left-24  w-1/3 h-1 bg-gray-300 flex items-center justify-start px-4">
        {/* Icon at the start */}
        <span
          className="text-orange-500 absolute"
          style={{ left: iconPosition }}
        >
          &#10022;
        </span>
        <div
          className="ml-2 w-2/3 h-full flex items-center"
          style={{
            background: `linear-gradient(to right, #FF7A00 ${scrollProgress}%, transparent ${scrollProgress}%)`,
            backgroundSize: `calc(10px + 10px) 1px`, // 6 dashes + 6 gaps, each dash and gap are 10px
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'left',
          }}
        />
 
      </div>

      {/* Back Button */}
      <button
        onClick={scrollToPrevious}
        className="absolute top-4 pb-10 left-20 z-10 flex items-center text-gray-700 hover:text-gray-900 text-sm font-light transition"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        Back
      </button>

      {/* Slider Components */}
      <div
        ref={containerRef}
        className="flex flex-row w-full h-full overflow-x-auto snap-x snap-mandatory"
      >
        <div id="test0" className="snap-start flex-none w-full">
          <SliderComponent />
        </div>
        <div id="test1" className="snap-start flex-none w-full">
          <SliderComponent1 />
        </div>
        <div id="test2" className="snap-start flex-none w-full h-full">
          <SliderComponent2 />
        </div>
        <div id="test3" className="snap-start flex-none w-full h-full">
          <SliderComponent3 />
        </div>
        <div id="test4" className="snap-start flex-none w-full h-full">
          <SliderComponent4 />
        </div>
        <div id="test5" className="snap-start flex-none w-full h-full">
          <SliderComponent5 />
        </div>
        <div id="test6" className="snap-start flex-none w-full h-full">
          <SliderComponent6 />
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      {/* Header Section */}
      <header className="flex justify-between items-center bg-white p-4 shadow-md w-full">
        {/* Logo on the left */}
        <div className="flex items-center md:pl-20 pl-10">
          <img src="../assets/logo1.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Cross button on the right */}
        <Link href="/" passHref>
          <button className="text-xl pr-10 md:pr-20 font-bold text-gray-500 hover:text-gray-700">
            &#10005; {/* This represents a cross (X) symbol */}
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <SliderWithProgress />
    </div>
  );
};

export default Home;
