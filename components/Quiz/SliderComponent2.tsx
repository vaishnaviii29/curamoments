import React, { useState } from 'react';
import Link from 'next/link';

const dietOptions = [
  'Not great—I’m tired and need to figure this out.',
  'It’s okay, but I could definitely use better rest.',
  'I’m sleeping well, but I’m all about optimizing my downtime.',
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
          <h2 className="text-3xl md:text-4xl font-regular pt-10 mb-4 overflow-x-auto pb-6 md:pb-6" style={{ color: '#000000', fontFamily: 'Ledger, serif' }}>
            How’s your sleep been lately?
          </h2>
          <div className="grid grid-cols-1 w-full gap-4 mb-8">
            {dietOptions.map(diet => (
              <button
                key={diet}
                className={`text-lg md:text-xl justify-self-start px-5 font-regular border-2 rounded-lg h-20 focus:outline-none w-full text-left
                  ${isSelected(diet) ? 'border-solid border-black bg-black text-white' : 'hover:border-solid hover:border-black border-dashed border-[#3C3C434A]'}`
                }
                style={{
                  backgroundColor: isSelected(diet) ? 'rgba(255, 255, 255, 0.52)' : 'rgba(255, 255, 255, 0.52)',
                  color: isSelected(diet) ? 'black' : '#000000',
                  fontFamily: 'Ledger, serif'
                }}
                onClick={() => handleDietClick(diet)}
              >
                {diet}
              </button>
            ))}
          </div>

          <div className="pt-6 md:pt-10">
            <a href="/quiz/#test3" rel="noopener noreferrer">
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

        {selectedDiet && (
          <div className="w-full md:w-auto pt-10  md:pr-10 flex items-center justify-center p-4">
            <div className="bg-white p-4 rounded-lg max-w-lg text-left">
              <span role="img" aria-label="brain" className="block text-5xl mb-2">😴 </span>
              <p>Rest is essential for recharging your body and mind. Whether you're struggling to get enough sleep, looking to improve your rest quality, or focusing on recovery, prioritizing sleep can transform your well-being. How are you sleeping these days?</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderComponent;
