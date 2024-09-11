import React from 'react';

const App: React.FC = () => {
  const events = [
    {
      category: 'MIND',
      title: 'Rest + Reset',
      location: 'LA',
      duration: '7 days',
      startDate: 'Jun 28th',
      instructor: 'Cory Muscara, Omega',
      price: '$240',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      category: 'BODY',
      title: 'Nature Spa - Body, Mind & Soul',
      location: 'LA',
      duration: '7 days',
      startDate: 'Jun 28th',
      instructor: 'Cory Muscara, Omega',
      price: '$240',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      category: 'SOUL',
      title: 'Eat - Sleep - Retreat',
      location: 'LA',
      duration: '7 days',
      startDate: 'Jun 28th',
      instructor: 'Cory Muscara, Omega',
      price: '$240',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
  ];

  return (
    <>
    <div className="block sm:hidden">
      <h2 className=" p-10 font-goudy text-2xl text-[#1E1E1E]">Elevate your wellbeing with CuraMoments</h2>
      <div className="flex flex-col  items-center md:space-x-8 w-full p-10 pt-5">
          {/* Dropdown 1 */}
          <div className="relative mb-4 md:mb-0 w-full md:w-auto">
            <select className="appearance-none bg-white border border-gray-300 text-black py-2 px-4 md:px-20 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-left w-full md:w-auto">
              <option className="text-left">Nourish Well</option>
              {/* Add more options here */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <div className="bg-orange-400 rounded-full p-2">
                <svg className="fill-current h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.707L10 12.414l4.707-4.707-1.414-1.414L10 9.586 6.707 6.293z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dropdown 2 */}
          <div className="relative mb-4 md:mb-0 w-full md:w-auto">
            <select className="appearance-none bg-white border border-gray-300 text-black py-2 px-4 md:px-20 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-left w-full md:w-auto">
              <option className="text-left">LA</option>
              {/* Add more options here */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <div className="bg-orange-400 rounded-full p-2">
                <svg className="fill-current h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.707L10 12.414l4.707-4.707-1.414-1.414L10 9.586 6.707 6.293z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dropdown 3 */}
          <div className="relative mb-4 md:mb-0 w-full md:w-auto">
            <select className="appearance-none bg-white border border-gray-300 text-black py-2 px-4 md:px-20 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-left w-full md:w-auto">
              <option className="text-left">Tue 13 Aug - Wed 14 Aug</option>
              {/* Add more options here */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <div className="bg-orange-400 rounded-full p-2">
                <svg className="fill-current h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.707L10 12.414l4.707-4.707-1.414-1.414L10 9.586 6.707 6.293z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filter Button */}

      </div>
      <div className="p-10 pt-1">
          <hr className="border-t border-gray-400" />
      </div>
      <h2 className="pl-10 p-5 font-goudy text-2xl text-[#1E1E1E]">Featured</h2>
      <div className="flex overflow-x-auto w-full scrollbar-hide p-10 pb-10 pt-5">
  <div className="flex space-x-4">
 
    <div className="bg-white rounded-lg w-[90%] sm:w-[90%] md:w-[30%] min-w-[300px]">
      <div className="relative">
        <img
          src="assets/home1.png"
          alt="Rest + Reset"
          className="w-full h-[384px] object-cover rounded-lg" />
        <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
          MIND
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
          <button className="bg-white rounded-full p-2 shadow-md">
            &#x25C0;
          </button>
          <button className="bg-white rounded-full p-2 shadow-md">
            &#x25B6;
          </button>
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-lexend font-regular">Rest + Reset</h3>
        <p className="text-sm font-spartan text-gray-500">
          Offline . LA . 7 days . Starting at Jun 28th
        </p>
        <p className="text-sm font-spartan text-gray-500">With Cory Muscara, Omega</p>
        <p className="text-base font-regular font-spartan text-black mt-2">$240</p>
      </div>
    </div>

 
    <div className="bg-white rounded-lg w-[90%] sm:w-[90%] md:w-[30%] min-w-[300px]">
      <div className="relative">
        <img
          src="assets/home2.png"
          alt="Nature Spa - Body, Mind & Soul"
          className="w-full h-[384px] object-cover rounded-lg" />
        <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
          BODY
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
          <button className="bg-white rounded-full p-2 shadow-md">
            &#x25C0;
          </button>
          <button className="bg-white rounded-full p-2 shadow-md">
            &#x25B6;
          </button>
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-lexend font-regular">
          Nature Spa - Body, Mind & Soul
        </h3>
        <p className="text-sm font-spartan text-gray-500">
          Offline . LA . 7 days . Starting at Jun 28th
        </p>
        <p className="text-sm font-spartan text-gray-500">With Cory Muscara, Omega</p>
        <p className="text-base font-regular font-spartan text-black mt-2">$240</p>
      </div>
    </div>

  
    <div className="bg-white rounded-lg w-[90%] sm:w-[90%] md:w-[30%] min-w-[300px]">
      <div className="relative">
        <img
          src="assets/home3.png"
          alt="Eat – Sleep – Retreat"
          className="w-full h-[384px] object-cover rounded-lg" />
        <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
          SOUL
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
          <button className="bg-white rounded-full p-2 shadow-md">
            &#x25C0;
          </button>
          <button className="bg-white rounded-full p-2 shadow-md">
            &#x25B6;
          </button>
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-lexend font-regular">Eat – Sleep – Retreat</h3>
        <p className="text-sm font-spartan text-gray-500">
          Offline . LA . 7 days . Starting at Jun 28th
        </p>
        <p className="text-sm font-spartan text-gray-500">With Cory Muscara, Omega</p>
        <p className="text-base font-regular font-spartan text-black mt-2">$240</p>
      </div>
    </div>
  </div>
      </div>
    </div>


    <div className="hidden sm:block">
        <h2 className="pl-20 p-5 font-goudy text-5xl pb-10 -[#1E1E1E]">Elevate your wellbeing with CuraMoments</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8 w-full p-20 pt-5">
          {/* Dropdown 1 */}
          <div className="relative mb-4 md:mb-0 w-full md:w-auto">
            <select className="appearance-none bg-white border border-gray-300 text-black py-2 px-4 md:px-20 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-left w-full md:w-auto">
              <option className="text-left">Nourish Well</option>
              {/* Add more options here */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <div className="bg-orange-400 rounded-full p-2">
                <svg className="fill-current h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.707L10 12.414l4.707-4.707-1.414-1.414L10 9.586 6.707 6.293z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dropdown 2 */}
          <div className="relative mb-4 md:mb-0 w-full md:w-auto">
            <select className="appearance-none bg-white border border-gray-300 text-black py-2 px-4 md:px-20 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-left w-full md:w-auto">
              <option className="text-left">LA</option>
              {/* Add more options here */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <div className="bg-orange-400 rounded-full p-2">
                <svg className="fill-current h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.707L10 12.414l4.707-4.707-1.414-1.414L10 9.586 6.707 6.293z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dropdown 3 */}
          <div className="relative mb-4 md:mb-0 w-full md:w-auto">
            <select className="appearance-none bg-white border border-gray-300 text-black py-2 px-4 md:px-20 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-left w-full md:w-auto">
              <option className="text-left">Tue 13 Aug - Wed 14 Aug</option>
              {/* Add more options here */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <div className="bg-orange-400 rounded-full p-2">
                <svg className="fill-current h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.707L10 12.414l4.707-4.707-1.414-1.414L10 9.586 6.707 6.293z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filter Button */}

        </div>
        <div className="p-10">
          <hr className="border-t border-gray-400" />
        </div>
        <h2 className="pl-20 p-5 font-goudy text-4xl text-[#1E1E1E]">Featured</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full p-10 pt-5">

          <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%]">

            <div className="relative">
              <img
                src="assets/home1.png"
                alt="Rest + Reset"
                className="w-full h-[384px]  object-cover rounded-lg" />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
                MIND
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25C0;
                </button>
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25B6;
                </button>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-lexend font-regular">Rest + Reset</h3>
              <p className="text-sm font-spartan text-gray-500">
                Offline . LA . 7 days . Starting at Jun 28th
              </p>
              <p className="text-sm font-spartan text-gray-500">With Cory Muscara, Omega</p>
              <p className="text-base font-regular font-spartan text-black mt-2">$240</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%]">
            <div className="relative">
              <img
                src="assets/home2.png"
                alt="Nature Spa - Body, Mind & Soul"
                className="w-full h-[384px]  object-cover rounded-lg" />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
                BODY
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25C0;
                </button>
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25B6;
                </button>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-lexend font-regular">
                Nature Spa - Body, Mind & Soul
              </h3>
              <p className="text-sm font-spartan text-gray-500">
                Offline . LA . 7 days . Starting at Jun 28th
              </p>
              <p className="text-sm font-spartan text-gray-500">With Cory Muscara, Omega</p>
              <p className="text-base font-regular font-spartan text-black mt-2">$240</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%]">
            <div className="relative">
              <img
                src="assets/home3.png"
                alt="Eat – Sleep – Retreat"
                className="w-full h-[384px]  object-cover rounded-lg" />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
                SOUL
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25C0;
                </button>
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25B6;
                </button>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-lexend font-regular">Eat – Sleep – Retreat</h3>
              <p className="text-sm font-spartan text-gray-500">
                Offline . LA . 7 days . Starting at Jun 28th
              </p>
              <p className="text-sm font-spartan text-gray-500">With Cory Muscara, Omega</p>
              <p className="text-base font-regular font-spartan text-black mt-2">$240</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full p-10 pt-5">

          <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%]">

            <div className="relative">
              <img
                src="assets/home1.png"
                alt="Rest + Reset"
                className="w-full h-[384px]  object-cover rounded-lg" />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
                MIND
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25C0;
                </button>
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25B6;
                </button>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-lexend font-regular">Rest + Reset</h3>
              <p className="text-sm font-spartan text-gray-500">
                Offline . LA . 7 days . Starting at Jun 28th
              </p>
              <p className="text-sm font-spartan text-gray-500">With Cory Muscara, Omega</p>
              <p className="text-base font-regular font-spartan text-black mt-2">$240</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%]">
            <div className="relative">
              <img
                src="assets/home2.png"
                alt="Nature Spa - Body, Mind & Soul"
                className="w-full h-[384px] object-cover rounded-lg" />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
                BODY
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25C0;
                </button>
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25B6;
                </button>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-lexend font-regular">
                Nature Spa - Body, Mind & Soul
              </h3>
              <p className="text-sm font-spartan text-gray-500">
                Offline . LA . 7 days . Starting at Jun 28th
              </p>
              <p className="text-sm font-spartan text-gray-500">With Cory Muscara, Omega</p>
              <p className="text-base font-regular font-spartan text-black mt-2">$240</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%]">
            <div className="relative">
              <img
                src="assets/home3.png"
                alt="Eat – Sleep – Retreat"
                className="w-full h-[384px]  object-cover rounded-lg" />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
                SOUL
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25C0;
                </button>
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25B6;
                </button>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-lexend font-regular">Eat – Sleep – Retreat</h3>
              <p className="text-sm font-spartan text-gray-500">
                Offline . LA . 7 days . Starting at Jun 28th
              </p>
              <p className="text-sm font-spartan text-gray-500">With Cory Muscara, Omega</p>
              <p className="text-base font-regular font-spartan text-black mt-2">$240</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full p-10 pt-5">

          <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%]">

            <div className="relative">
              <img
                src="assets/home1.png"
                alt="Rest + Reset"
                className="w-full h-[384px]  object-cover rounded-lg" />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
                MIND
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25C0;
                </button>
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25B6;
                </button>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-lexend font-regular">Rest + Reset</h3>
              <p className="text-sm font-spartan text-gray-500">
                Offline . LA . 7 days . Starting at Jun 28th
              </p>
              <p className="text-sm font-spartan text-gray-500">With Cory Muscara, Omega</p>
              <p className="text-base font-regular font-spartan text-black mt-2">$240</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%]">
            <div className="relative">
              <img
                src="assets/home2.png"
                alt="Nature Spa - Body, Mind & Soul"
                className="w-full h-[384px]  object-cover rounded-lg" />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
                BODY
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25C0;
                </button>
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25B6;
                </button>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-lexend font-regular">
                Nature Spa - Body, Mind & Soul
              </h3>
              <p className="text-sm font-spartan text-gray-500">
                Offline . LA . 7 days . Starting at Jun 28th
              </p>
              <p className="text-sm font-spartan text-gray-500">With Cory Muscara, Omega</p>
              <p className="text-base font-regular font-spartan text-black mt-2">$240</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%]">
            <div className="relative">
              <img
                src="assets/home3.png"
                alt="Eat – Sleep – Retreat"
                className="w-full h-[384px] object-cover rounded-lg" />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
                SOUL
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25C0;
                </button>
                <button className="bg-white rounded-full p-2 shadow-md">
                  &#x25B6;
                </button>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-lexend font-regular">Eat – Sleep – Retreat</h3>
              <p className="text-sm font-spartan text-gray-500">
                Offline . LA . 7 days . Starting at Jun 28th
              </p>
              <p className="text-sm font-spartan text-gray-500">With Cory Muscara, Omega</p>
              <p className="text-base font-regular font-spartan text-black mt-2">$240</p>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default App;
