import React from 'react';

import SliderComponent from '../Quiz/SliderComponent';
import SliderComponent2 from '../Quiz/SliderComponent2';
import SliderComponent3 from '../Quiz/SliderComponent3';
import SliderComponent4 from '../Quiz/SliderComponent4';
import SliderComponent5 from '../Quiz/SliderComponent5';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-y-scroll snap-y snap-mandatory h-screen">
      
      <div id="test1" className="snap-start flex-none w-full h-screen">
        <SliderComponent />
      </div>
      <div id="test2" className="snap-start flex-none w-full h-screen">
        <SliderComponent2 />
      </div>
      <div id="test3" className="snap-start flex-none w-full h-screen">
        <SliderComponent3 />
      </div>
      <div id="test4" className="snap-start flex-none w-full h-screen">
        <SliderComponent4 />
      </div>
      <div id="test5" className="snap-start flex-none w-full h-screen">
        <SliderComponent5 />
      </div>

    </div>
  );
}

export default Home;
