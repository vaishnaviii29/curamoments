import React, { useState } from 'react';

const dietOptions = [
  'It’s been a bit rough. I’m dealing with stress or anxiety and need to find some calm.',
  'I’m doing okay, but a little more clarity and balance wouldn’t hurt.',
  'My mind’s in a good place, but I’m always looking for ways to sharpen it.',
];

const SliderComponent: React.FC = () => {
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);

  const handleDietClick = (diet: string) => {
    setSelectedDiets(prevSelectedDiets =>
      prevSelectedDiets.includes(diet)
        ? prevSelectedDiets.filter(selectedDiet => selectedDiet !== diet)
        : [...prevSelectedDiets, diet]
    );
  };

  const isSelected = (diet: string) => selectedDiets.includes(diet);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: 'url(/assets/bg1.png)' }}>
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="w-full md:w-2/3 md:px-20">
          <h2 className="text-3xl md:text-4xl font-regular pt-16 md:pt-20 mb-4 overflow-x-auto pb-8 md:pb-10" style={{ color: '#000000', fontFamily: 'Ledger, serif' }}>
            What kind of diet do you follow?
          </h2>
          <div className="grid grid-cols-1 w-full gap-4 mb-8 ">
  {dietOptions.map(diet => (
    <button
      key={diet}
      className={`text-lg md:text-xl justify-self-start px-5 font-regular border-2 rounded-lg h-12 focus:outline-none 
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
            <a href="/quiz/#test2" rel="noopener noreferrer">
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

        {selectedDiets.length > 0 && (
          <div className="w-full md:w-auto pt-10 md:pt-20 md:pr-10 flex items-center justify-center p-4">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg text-left">
              <span role="img" aria-label="brain" className="block text-5xl mb-2">🧠 </span>
              
              <p>Building and maintaining meaningful relationships is vital for overall well-being. Whether you're looking to deepen existing connections or expand your social circle, strong relationships can enrich your life. How connected do you feel with others?</p>
            </div>
          </div>
        )}
      </div>
      <div className="absolute top-0 right-0 p-4">
        <button className="text-purple-800 text-2xl font-bold">&times;</button>
      </div>
    </div>
  );
};

export default SliderComponent;
