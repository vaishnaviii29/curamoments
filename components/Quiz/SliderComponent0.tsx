import React, { useState } from 'react';
import Link from 'next/link';

const dietOptions = [
  'It’s been a bit rough. I’m dealing with stress or anxiety and need to find some calm.',
  'I’m doing okay, but a little more clarity and balance wouldn’t hurt.',
  'My mind’s in a good place, but I’m always looking for ways to sharpen it.',
];

const SliderComponent: React.FC = () => {
  const [selectedDiet, setSelectedDiet] = useState<string | null>(null); // Store only one selected diet

  const handleDietClick = (diet: string) => {
    setSelectedDiet(diet === selectedDiet ? null : diet); // Toggle the selected diet
  };

  const isSelected = (diet: string) => diet === selectedDiet;

  return (
    <div className="flex flex-col justify-center items-center h-full bg-cover bg-center bg-no-repeat p-4 overflow-hidden" style={{ backgroundImage: 'url(/assets/bg1.png)' }}>
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between h-full">
        <div className="w-full md:w-2/3 md:px-20 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl pt-20 font-regular mb-4 overflow-x-auto pb-6 md:pb-6" style={{ color: '#000000', fontFamily: 'Ledger, serif' }}>
          Ready to Unlock Your Best Self?
          </h2>
          <p>Whether you’re looking to boost your mental clarity, get active, or just find a little more balance in your life, we’ve got something for you. Answer a few quick questions, and we’ll match you with the perfect wellness retreat to help you reach your goals.</p>

          <div className="pt-6 md:pt-10">
            <a href="/quiz/#test1" rel="noopener noreferrer">
              <button
                className="text-lg md:text-2xl font-regular pt-2 py-2 rounded-full px-10 bg-black text-white border border-transparent hover:bg-white hover:text-black hover:border-black focus:outline-none"
                style={{ fontFamily: 'Ledger, serif' }}
                onClick={() => console.log('Next clicked')}
              >
                Next
              </button>
            </a>
          </div>
        </div>

        
          <div className="w-full md:w-auto pt-10  md:pr-10 flex items-center justify-center p-4">
            <div className="bg-white p-4 rounded-lg max-w-lg text-left">
              <span role="img" aria-label="brain" className="block text-5xl mb-2">🌿  </span>
              <p>Discover Your Ideal Wellness Retreat Ready to recharge? Whether it's mental clarity, fitness, or balance you're after, we’ll match you with the perfect retreat. Answer a few quick questions, and let’s find your path to wellness!</p>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default SliderComponent;
