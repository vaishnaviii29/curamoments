import React from 'react';


const CartPage = () => {
  return (
    <> 
    <div className="hidden sm:block">
      <div className="relative">
 

      <div className="text-xl sm:text-2xl pt-5 sm:pt-10 px-3 sm:px-5 w-full font-ledger text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-5 w-full -mb-px">
        <li className="flex-1">
            <a href="#" className="block p-3 sm:p-4 text-black border-b-4 border-black rounded-t-lg text-center active dark:text-black dark:border-black" aria-current="page">Wellness</a>
        </li>
        <li className="flex-1">
            <a href="#" className="block p-3 sm:p-4 border-b-2 border-transparent rounded-t-lg text-center hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Alternative Medicine</a>
        </li>
        <li className="flex-1">
            <a href="#" className="block p-3 sm:p-4 border-b-2 border-transparent rounded-t-lg text-center hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Success Stories</a>
        </li>
    </ul>
</div>



      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-5 md:p-20">
  {/* Card 1 */}
  <div className="flex flex-col md:flex-row bg-white  rounded-lg overflow-hidden border" style={{ borderColor: '#D9D9D9' }}>
    <img src="assets/verticals1.png" alt="Get Fit" className="h-48 md:h-auto w-full md:w-1/2 object-cover" />
    <div className="p-6 flex flex-col justify-between">
      <h2 className="text-2xl font-goudy mb-2">Get Fit & Fierce</h2>
      <p className="text-gray-600 mb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
      <a href="#" className="inline-flex items-center text-black text-base font-lexend hover:text-indigo-800">
        Read →
      </a>
    </div>
  </div>
  
  {/* Card 2 */}
  <div className="flex flex-col md:flex-row bg-white  rounded-lg overflow-hidden border" style={{ borderColor: '#D9D9D9' }}>
    <img src="assets/verticals2.png" alt="Nourish Well" className="h-48 md:h-auto w-full md:w-1/2 object-cover" />
    <div className="p-6 flex flex-col justify-between">
      <h2 className="text-2xl font-goudy mb-2">Nourish Well</h2>
      <p className="text-gray-600 mb-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
     
      </p>
      <a href="#" className="inline-flex items-center text-black text-base font-lexend hover:text-indigo-800">
        Read →
      
      </a>
    </div>
  </div>
  
  {/* Card 3 */}
  <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden border" style={{ borderColor: '#D9D9D9' }}>
    <img src="assets/verticals3.png" alt="Sleep Well" className="h-48 md:h-auto w-full md:w-1/2 object-cover" />
    <div className="p-6 flex flex-col justify-between">
      <h2 className="text-2xl font-goudy mb-2">Sleep Well</h2>
      <p className="text-gray-600 mb-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
     
    
      </p>
      <a href="#" className="inline-flex items-center text-black text-base font-lexend hover:text-indigo-800">
        Read →
      
      </a>
    </div>
  </div>

  {/* Card 4 */}
  <div className="flex flex-col md:flex-row bg-white  rounded-lg overflow-hidden border" style={{ borderColor: '#D9D9D9' }}>
    <img src="assets/verticals4.png" alt="Manage Stress" className="h-48 md:h-auto w-full md:w-1/2 object-cover" />
    <div className="p-6 flex flex-col justify-between">
      <h2 className="text-2xl font-goudy mb-2">Manage Stress</h2>
      <p className="text-gray-600 mb-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
     
    
      </p>
      <a href="#" className="inline-flex items-center text-black text-base font-lexend hover:text-indigo-800">
        Read →
      
      </a>
    </div>
  </div>
  
  {/* Card 5 */}
  <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden border" style={{ borderColor: '#D9D9D9' }}>
    <img src="assets/verticals5.png" alt="Manage Conditions" className="h-48 md:h-auto w-full md:w-1/2 object-cover" />
    <div className="p-6 flex flex-col justify-between">
      <h2 className="text-2xl font-goudy mb-2">Manage Conditions</h2>
      <p className="text-gray-600 mb-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
     
    
      </p>
      <a href="#" className="inline-flex items-center text-black text-base font-lexend hover:text-indigo-800">
        Read →
      
      </a>
    </div>
  </div>
      </div>
      <div className="text-xl sm:text-2xl pt-5 sm:pt-10 px-3 sm:px-5 w-full font-ledger text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-5 w-full -mb-px">
        <li className="flex-1">
            <a href="#" className="block p-3 sm:p-4 border-b-2 border-transparent rounded-t-lg text-center hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Wellness</a>
        </li>
        <li className="flex-1">
            <a href="#" className="block p-3 sm:p-4 text-black border-b-4 border-black rounded-t-lg text-center active dark:text-black dark:border-black" aria-current="page">Alternative Medicine</a>
        </li>
        <li className="flex-1">
            <a href="#" className="block p-3 sm:p-4 border-b-2 border-transparent rounded-t-lg text-center hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Success Stories</a>
        </li>
    </ul>
      </div>
      <div className="p-10 bg-cover bg-center" style={{ backgroundImage: "url('assets/gradient.png')" }}>
      <div className="p-6 sm:p-10 md:p-20  pt-10 md:pb-5 ">
      <div className="rounded-lg bg-white flex flex-col md:flex-row overflow-hidden">
    <div className="pl-6 sm:pl-10 md:pl-10 pb-10 flex-1">
      <h2 className="text-2xl sm:text-3xl font-ledger pt-5 mb-4">Ayurveda</h2>
      <p className="text-[#5B5C66] font-spartan mb-6  pr-10 text-sm sm:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br className="hidden md:block"/> dummy text ever since the 1500s, when an unknown printer took a galley <br className="hidden md:block"/> of type and scrambled it to make a type specimen book.
      </p>
      <div className="text-black pt-10 font-spartan text-sm sm:text-base font-semibold mb-5">23 Articles</div>
      <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
        Know More
      </button>
    </div>
    <div className="w-full md:w-1/3">
      <img 
        src="assets/rect1.png" 
        alt="Ayurveda" 
        className="object-cover w-full h-full sm:h-full"
      />
    </div>
      </div>
      </div>
      <div className="p-6 sm:p-10 md:p-20 md:pt-10 md:pb-5">
  <div className="rounded-lg bg-white  flex flex-col md:flex-row overflow-hidden">
    <div className="pl-6 pb-10 sm:pl-10 md:pl-10 flex-1">
      <h2 className="text-2xl sm:text-3xl font-ledger pt-5 mb-4">Naturopathy</h2>
      <p className="text-[#5B5C66] font-spartan mb-6 text-sm sm:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br className="hidden md:block"/> dummy text ever since the 1500s, when an unknown printer took a galley <br className="hidden md:block"/> of type and scrambled it to make a type specimen book.
      </p>
      <div className="text-black pt-10 font-spartan text-sm sm:text-base font-semibold mb-5">23 Articles</div>
      <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
        Know More
      </button>
    </div>
    <div className="w-full md:w-1/3">
      <img 
        src="assets/rect2.png" 
        alt="Ayurveda" 
        className="object-cover w-full h-full sm:h-full"
      />
    </div>
  </div>
      </div>
      <div className="p-6 sm:p-10 md:p-20 md:pt-10">
  <div className="rounded-lg   bg-white flex flex-col md:flex-row overflow-hidden">
    <div className="pl-6 pb-10 sm:pl-10 md:pl-10 flex-1">
      <h2 className="text-2xl sm:text-3xl font-ledger pt-5 mb-4">Homeopathy</h2>
      <p className="text-[#5B5C66] font-spartan mb-6 text-sm sm:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br className="hidden md:block"/> dummy text ever since the 1500s, when an unknown printer took a galley <br className="hidden md:block"/> of type and scrambled it to make a type specimen book.
      </p>
      <div className="text-black pt-10 font-spartan text-sm sm:text-base font-semibold mb-5">23 Articles</div>
      <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
        Know More
      </button>
    </div>
    <div className="w-full md:w-1/3">
      <img 
        src="assets/rect3.png" 
        alt="Ayurveda" 
        className="object-cover w-full h-full sm:h-full"
      />
    </div>
  </div>
      </div>
 </div>
      <div className="text-xl sm:text-2xl pt-5 sm:pt-10 px-3 sm:px-5 w-full font-ledger text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-5 w-full -mb-px">
        <li className="flex-1">
            <a href="#" className="block p-3 sm:p-4 border-b-2 border-transparent rounded-t-lg text-center hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Wellness</a>
        </li>
        <li className="flex-1">
            <a href="#" className="block p-3 sm:p-4 border-b-2 border-transparent rounded-t-lg text-center hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Alternative Medicine </a>
        </li>
        <li className="flex-1">
            <a href="#" className="block p-3 sm:p-4 text-black border-b-4 border-black rounded-t-lg text-center active dark:text-black dark:border-black" aria-current="page">Success Stories</a>
        </li>
    </ul>
      </div>
      <div className="p-5 md:p-20 md:pb-5">
  <div className="flex flex-col md:flex-row font-ledger rounded-lg w-full bg-[#F7F7F7]">
    <div className="flex-shrink-0">
      <img className="h-full w-full object-cover rounded-l-lg " src="assets/rect4.png" alt="Person smiling" />
    </div>
    <div className="ml-0 md:ml-6 mt-6 md:mt-0">
      <h2 className="text-2xl mb-4 md:mb-10 pt-10 font-ledger text-black">Chronic Pain Relief</h2>
      <p className="mt-2 mb-4 md:mb-10 text-lg md:pr-20 text-[#5B5C66] font-spartan">
        I've struggled with chronic pain for years. Traditional medicine offered limited relief. Holistic wellness has been a game-changer. By addressing the root cause of my pain, I've experienced significant improvement in my overall well-being. I’m grateful for the holistic approach that has helped me regain my quality of life.
      </p>
      <p className="mt-4 mb-4 md:mb-10 text-lg font-spartan">Program: Pranik Healing by Samantha Peters</p>
      <div className="pb-10">
        <button className="mt-4 bg-[#222222] text-white px-8 py-2 rounded-lg shadow hover:bg-gray-700">
          Know My Story
        </button>
      </div>
    </div>
  </div>
      </div>
      <div className="p-5 md:p-20 md:pt-10 md:pb-5">
  <div className="flex flex-col md:flex-row font-ledger rounded-lg  bg-[#F7F7F7] w-full">
    <div className="flex-shrink-0">
      <img className="h-full w-full rounded-l-lg object-cover" src="assets/rect5.png" alt="Person smiling" />
    </div>
    <div className="ml-0 md:ml-6 mt-6 md:mt-0">
      <h2 className="text-2xl mb-4 md:mb-10 pt-10 font-ledger text-black">Stress Management and Inner Peace</h2>
      <p className="mt-2 mb-4 md:mb-10 text-lg md:pr-10 text-[#5B5C66] font-spartan">
        "Living a fast-paced life, I was constantly stressed and anxious. Holistic wellness practices have taught me valuable tools for managing stress and finding inner peace. Meditation, yoga, and a focus on well-being have transformed my outlook on life. I feel more centered and resilient than ever before."
      </p>
      <p className="mt-4 mb-4 md:mb-10 text-lg font-spartan">Program: Pranik Healing by Samantha Peters</p>
      <div className="pb-10">
        <button className="mt-4 bg-[#222222] text-white px-8 py-2 rounded-lg shadow hover:bg-gray-700">
          Know My Story
        </button>
      </div>
    </div>
  </div>
      </div>
      <div className="p-5 md:p-20 md:pt-10">
  <div className="flex flex-col md:flex-row font-ledger rounded-lg  bg-[#F7F7F7] w-full">
    <div className="flex-shrink-0">
      <img className="h-full w-full  rounded-l-lg  object-cover" src="assets/rect6.png" alt="Person smiling" />
    </div>
    <div className="ml-0 md:ml-6 mt-6 md:mt-0">
      <h2 className="text-2xl mb-4 md:mb-10 pt-10 font-ledger text-black">Weight Management and Body Positivity</h2>
      <p className="mt-2 mb-4 md:mb-10 text-lg md:pr-20 text-[#5B5C66] font-spartan">
        "I struggled with yo-yo dieting for years. Holistic wellness helped me develop a healthy relationship with food and my body. By focusing on overall well-being rather than just weight loss, I've achieved sustainable results and gained confidence. I feel empowered to make choices that nourish both my body and mind."
      </p>
      <p className="mt-4 mb-4 md:mb-10 text-lg font-spartan">Program: Pranik Healing by Samantha Peters</p>
      <div className="pb-10">
        <button className="mt-4 bg-[#222222] text-white px-8 py-2 rounded-lg shadow hover:bg-gray-700">
          Know My Story
        </button>
      </div>
    </div>
  </div>
      </div>
    </div>
    </>
    );
};

export default CartPage;