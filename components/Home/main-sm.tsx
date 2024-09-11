import React from 'react';

const Home: React.FC = () => {
  return (
    <>
    <div className="block sm:hidden">
      <div className="relative  pt-5 pb-5 rounded-lg overflow-hidden">
          <video className="w-full h-full " autoPlay loop muted>
            <source src="assets/2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-3xl font-goudy p-4 text-center">
              Your journey to wholeness <br /> begins here
            </span>
            <div className="mt-2 flex items-center bg-white rounded-full p-2 shadow-md w-3/4">
  <div className="flex items-center flex-1 pl-5">
  
    <div className="text-base font-lexend text-[#1E1E1E] ">Goal</div>
    <div className="mx-3 border-l border-black h-6"></div>
    <input
      type="text"
      placeholder="What you want to attain"
      className="text-sm font-lexend text-[#BCBCBC] bg-transparent outline-none w-full"
    />
  </div>
  
  <button className="ml-3 bg-orange-500 text-white rounded-full p-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 17a6 6 0 100-12 6 6 0 000 12z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 20l-4-4"
      />
    </svg>
  </button>
</div>


          </div>
      </div>
      <h2 className="text-2xl p-5  text-[#1E1E1E] font-goudy pl-10">Featured</h2>
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
      <h2 className="text-2xl p-5 text-[#1E1E1E] font-goudy pl-10">Choose Your Goal</h2>
      <div className="flex flex-col items-center">

  <div className="overflow-x-auto scrollbar-hide w-full">

    <div className="flex w-max space-x-10 p-10 pt-10 pb-10">
    
      <div className="relative min-w-[200px]">
        <img src="assets/home5.png" alt="Get Fit" className="rounded-lg object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
          <p className="text-white font-regular font-lexend text-lg">Get Fit</p>
        </div>
      </div>

    
      <div className="relative min-w-[200px]">
        <img src="assets/home5.png" alt="Nourish Well" className="rounded-lg object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
          <p className="text-white font-regular font-lexend text-lg">Nourish Well</p>
        </div>
      </div>


      <div className="relative min-w-[200px]">
        <img src="assets/home6.png" alt="Sleep Well" className="rounded-lg object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
          <p className="text-white font-regular font-lexend text-lg">Sleep Well</p>
        </div>
      </div>

     
      <div className="relative min-w-[200px]">
        <img src="assets/home7.png" alt="Manage Stress" className="rounded-lg object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
          <p className="text-white font-regular font-lexend text-lg">Manage Stress</p>
        </div>
      </div>

      <div className="relative min-w-[200px]">
        <img src="assets/home8.png" alt="Manage Conditions" className="rounded-lg object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
          <p className="text-white font-regular font-lexend text-lg">Manage Conditions</p>
        </div>
      </div>
    </div>
  </div>
      </div>
      <h2 className="text-2xl p-5 text-[#1E1E1E] font-goudy pl-10">Popular</h2>
      <div className="flex overflow-x-auto scrollbar-hide w-full p-10 pt-10">
  <div className="flex space-x-10">
   \
    <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%] min-w-[250px]">
      <div className="relative">
        <img
          src="assets/home9.png"
          alt="Rest + Reset"
          className="w-full h-full object-cover rounded-t-lg" />
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-lexend font-regular">Popular Meditation Retreats</h3>
        <p className="text-sm font-spartan text-[#000000]">
          Starting from $24
        </p>
      </div>
    </div>

 
    <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%] min-w-[250px]">
      <div className="relative">
        <img
          src="assets/home10.png"
          alt="Nature Spa - Body, Mind & Soul"
          className="w-full h-full object-cover rounded-t-lg" />
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-lexend font-regular">
          Popular Nourishment Retreats
        </h3>
        <p className="text-sm font-spartan text-gray-500">
          Starting from $24
        </p>
      </div>
    </div>

   
    <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%] min-w-[250px]">
      <div className="relative">
        <img
          src="assets/home11.png"
          alt="Eat – Sleep – Retreat"
          className="w-full h-full object-cover rounded-t-lg" />
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-lexend font-regular">Popular Yoga Retreats</h3>
        <p className="text-sm font-spartan text-gray-500">
          Starting from $24
        </p>
      </div>
    </div>
  </div>




      </div>
      <div className="bg-orange-500   ">
            <div className=" text-white px-10 py-10 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-goudy mb-2">
                  Struggling to find a retreat that truly <br /> resonates with you?
                </h2>
                <p className="text-lg font-lexend mb-4">
                  Take a quick test to get a personalized solution tailored to your needs!
                </p>
                <button className="bg-white text-black font-lexend text-base px-6 py-2 rounded-full">
                  Take A Quiz
                </button>
              </div>
             
            </div>
      </div>
      <h2 className="text-2xl p-10 text-[#1E1E1E] font-goudy pl-10">Shared Wisdom</h2>
      <div className="flex overflow-x-auto scrollbar-hide pl-10 p-10 pt-1 space-x-4">
      <div className="bg-white shadow rounded-lg overflow-hidden flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] min-w-[300px]">
    <img src="assets/grid1.png" alt="Image description" className="w-full h-60 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy <br /> text of the printing</h2>
      <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
      <div className="flex justify-between items-center">
        <a href="#" className="text-[#000000] font-lexend">Read <span className="ml-1">→</span></a>
      </div>
    </div>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] min-w-[300px]">
    <img src="assets/grid2.png" alt="Image description" className="w-full h-60 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy <br /> text of the printing</h2>
      <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
      <div className="flex justify-between items-center">
        <a href="#" className="text-[#000000] font-lexend">Read <span className="ml-1">→</span></a>
      </div>
    </div>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] min-w-[300px]">
    <img src="assets/grid3.png" alt="Image description" className="w-full h-60 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy <br />text of the printing</h2>
      <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
      <div className="flex justify-between items-center">
        <a href="#" className="text-[#000000] font-lexend">Read <span className="ml-1">→</span></a>
      </div>
    </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Home;
