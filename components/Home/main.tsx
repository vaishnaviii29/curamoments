
import  React from 'react';
import { useState } from 'react';
import Link from 'next/link';
const Dropdown: React.FC<{ label: string, options: string[] }> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
    <button
      className="relative inline-flex justify-start w-full px-20 text-left  py-2 bg-gray-100 text-black font-medium text-sm rounded-full hover:bg-gray-200 focus:outline-none"
      onClick={toggleDropdown}
    >
      {label}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </button>
  
    {isOpen && (
      <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {options.map((option, index) => (
            <a href="#" key={index} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              {option}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
  
  );
};



const Home: React.FC = () => {



  return (
    <>
    <div className="hidden sm:block">
        <div className="relative p-20 pt-5 pb-5 rounded-lg overflow-hidden">
        <div className="relative w-full max-h-90 rounded-3xl overflow-hidden">
  <video className="w-full max-h-90 rounded-3xl" autoPlay loop muted>
    <source src="assets/2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-gradient-to-t from-[#494949] to-[#AFAFAF] opacity-50"></div>
</div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-7xl font-goudy p-4 text-center">
              Your journey to wholeness <br /> begins here
            </span>
            <span className="text-white text-xl font-goudy p-4 pb-1 text-center">
            Unlock Your Best Self
            </span>
            <span className="text-white text-sm font-goudy p-4  pt-1 text-center">
            Looking to boost mental clarity, get active, or find balance? We'll match you with <br/>the ideal wellness retreats to reach your goals
            </span>
            <div className="mt-4 flex items-center bg-white rounded-full p-3 shadow-md w-2/3">
              <div className="flex-1">
                
                <input
                  type="text"
                  placeholder="What goal do you want to achieve?"
                  className="text-base font-lexend pl-5 text-[#5B5C66] bg-transparent outline-none w-full mt-1" />
              </div>
              
             
              
             
              <button className="ml-3 bg-orange-500 text-white rounded-full p-3 px-20">
                <h2 className="text-base">Discover Your Wellness Path</h2>
              </button>
            </div>

          </div>
        </div>
        <div className="w-full p-20 pt-5 pb-5  flex space-x-4 text-left">
      {/* Each button has different dropdown options */}
      <div className="flex flex-col w-full md:flex-row pb-0 items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 justify-between">
  <select className="bg-[#F2F2F7] text-black rounded-full pr-10 py-2 px-4 w-full md:w-1/5 appearance-none" style={{ backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M7 10l5 5 5-5H7z"/></svg>')`, backgroundPosition: 'right 1rem center', backgroundSize: '2rem', backgroundRepeat: 'no-repeat' }}>
    <option value="1">Goal</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  
  <select className="bg-[#F2F2F7] text-black rounded-full pr-10 py-2 px-4 w-full md:w-1/5 appearance-none" style={{ backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M7 10l5 5 5-5H7z"/></svg>')`, backgroundPosition: 'right 1rem center', backgroundSize: '2rem', backgroundRepeat: 'no-repeat' }}>
    <option value="1">Location</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  
  <select className="bg-[#F2F2F7] text-black rounded-full pr-10 py-2 px-4 w-full md:w-1/5 appearance-none" style={{ backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M7 10l5 5 5-5H7z"/></svg>')`, backgroundPosition: 'right 1rem center', backgroundSize: '2rem', backgroundRepeat: 'no-repeat' }}>
    <option value="1">Dates</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  
  <select className="bg-[#F2F2F7] text-black rounded-full pr-10 py-2 px-4 w-full md:w-1/5 appearance-none" style={{ backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M7 10l5 5 5-5H7z"/></svg>')`, backgroundPosition: 'right 1rem center', backgroundSize: '2rem', backgroundRepeat: 'no-repeat' }}>
    <option value="1">Skill Level</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  
  <select className="bg-[#F2F2F7] text-black rounded-full pr-10 py-2 px-4 w-full md:w-1/5 appearance-none" style={{ backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M7 10l5 5 5-5H7z"/></svg>')`, backgroundPosition: 'right 1rem center', backgroundSize: '2rem', backgroundRepeat: 'no-repeat' }}>
    <option value="1">Price</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>


    </div>
        {/* <h2 className="pl-20 p-5 font-goudy text-4xl text-[#1E1E1E]">Featured</h2> */}
        <div className="flex flex-wrap justify-between gap-4 w-full  p-20 pb-10 pt-5">
        <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[23%]">
  <div className="relative group">
    <img
      src="assets/home1.png"
      alt="Rest + Reset"
      className="w-full h-[300px] object-cover rounded-lg"
    />
    
    <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
      </svg>
    </button>

    {/* Arrow buttons container */}
    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

<div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[23%]">
  <div className="relative">
    <img
      src="assets/home2.png"
      alt="Rest + Reset"
      className="w-full h-[300px] object-cover rounded-lg"
    />
 <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
      </svg>
    </button>

   
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

<div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[23%]">
  <div className="relative">
    <img
      src="assets/home3.png"
      alt="Rest + Reset"
      className="w-full h-[300px] object-cover rounded-lg"
    />

<button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
      </svg>
    </button>

    
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

<div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[23%]">
  <div className="relative">
    <img
      src="assets/home5.png"
      alt="Rest + Reset"
      className="w-full h-[300px] object-cover rounded-lg"
    />

<button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
      </svg>
    </button>

  
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

</div>

        {/* <h2 className="text-4xl  text-[#1E1E1E] font-goudy pl-20">Choose Your Goal</h2>
        <div className="flex flex-col   items-center ">

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-20 pt-10 pb-10 gap-10">
            <div className="relative">
              <img src="assets/home5.png" alt="Get Fit" className="rounded-lg object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                <p className="text-white font-regular font-lexend text-lg">Get Fit</p>
              </div>
            </div>
            <div className="relative">
              <img src="assets/home5.png" alt="Nourish Well" className="rounded-lg object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                <p className="text-white font-regular font-lexend text-lg">Nourish Well</p>
              </div>
            </div>
            <div className="relative">
              <img src="assets/home6.png" alt="Sleep Well" className="rounded-lg object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                <p className="text-white font-regular font-lexend text-lg">Sleep Well</p>
              </div>
            </div>
            <div className="relative">
              <img src="assets/home7.png" alt="Manage Stress" className="rounded-lg object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                <p className="text-white font-regular font-lexend text-lg">Manage Stress</p>
              </div>
            </div>
            <div className="relative">
              <img src="assets/home8.png" alt="Manage Conditions" className="rounded-lg object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                <p className="text-white font-regular font-lexend text-lg">Manage Conditions</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-4xl pt-5 text-[#1E1E1E] font-goudy pl-20">Popular</h2>
        <div className="flex flex-wrap justify-between  w-full p-20 pt-10 ">

          <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%]">

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

          <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%]">
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

          <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[30%]">
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
        </div> */}
        <div className="pl-20 pr-20">
        <div className="bg-orange-500 rounded-2xl  mx-auto max-w-8xl ">
            <div className=" text-white px-10 py-10 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-goudy mb-2">
                  Struggling to find a retreat that truly <br /> resonates with you?
                </h2>
                <p className="text-lg font-lexend mb-4">
                  Take a quick test to get a personalized solution tailored to your needs!
                </p>
                <Link href="/quiz">
  <button className="bg-white text-black font-lexend text-base px-6 py-2 rounded-full">
    Take A Quiz
  </button>
</Link>
              </div>
              <div>
                <img
                  src="assets/union.png"
                  alt="Logo"
                  className="w-full h-full" />
              </div>
            </div>
        </div>
        </div>
        <h2 className="text-4xl pt-10 text-[#1E1E1E] font-goudy text-center">Shared Wisdom</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:px-20 pt-10">

  {/* Card 1 */}
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <img src="assets/grid1.png" alt="Image description" className="w-full h-60 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy <br /> text of the printing</h2>
      <p className="text-[#5B5C66]  font-spartan text-sm mb-4">By Will Smith • Omega</p>
      <div className="flex justify-between items-center">
        <a href="#" className="text-[#000000] font-lexend flex items-center">
          Read <span className="ml-1">→</span>
        </a>
        <span className="text-gray-500"><i className="far fa-heart"></i></span>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <img src="assets/grid2.png" alt="Image description" className="w-full h-60 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy <br /> text of the printing</h2>
      <p className="text-[#5B5C66]  font-spartan text-sm mb-4">By Will Smith • Omega</p>
      <div className="flex justify-between items-center">
        <a href="#" className="text-[#000000] font-lexend flex items-center">
          Read <span className="ml-1">→</span>
        </a>
        <span className="text-gray-500"><i className="far fa-heart"></i></span>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <img src="assets/grid3.png" alt="Image description" className="w-full h-60 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy <br />text of the printing</h2>
      <p className="text-[#5B5C66]  font-spartan text-sm mb-4">By Will Smith • Omega</p>
      <div className="flex justify-between items-center">
        <a href="#" className="text-[#000000] font-lexend flex items-center">
          Read <span className="ml-1">→</span>
        </a>
        <span className="text-gray-500"><i className="far fa-heart"></i></span>
      </div>
    </div>
  </div>

</div>

{/* View All Button */}
<div className="flex justify-center pt-8">
  <button className="bg-gray-200 hover:bg-gray-300 text-black font-lexend py-2 px-6 rounded-full">
    View All
  </button>
</div>

    </div>
    </>
  );
}

export default Home;
