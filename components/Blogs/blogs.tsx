import React from 'react';


const CartPage = () => {
  return (
    <><div className="bg-gray-50 "></div>
      <div className="relative bg-cover  h-auto bg-center bg-no-repeat p-5 rounded-lg" style={{ backgroundImage: `url('assets/box2.png')` }}>
  <h1 className="text-black font-ledger text-4xl pl-10   md:pl-20 pt-11 mb-2">Holistic Wellness Blogs</h1>
  <div className="md:p-20 p-10 pt-10">
  <div className="flex flex-col md:flex-row font-ledger rounded-lg bg-[#FFFFFF] w-full ">
    <div className="flex-shrink-0">
      <img className="h-full w-full  rounded-l-lg  object-cover" src="assets/blogs.png" alt="Person smiling" />
    </div>
    <div className="ml-3 md:ml-6 mt-6 md:mt-5">
    <span className=" bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
    FEATURED
              </span>
      <h2 className="text-2xl mb-4 md:mb-10 pt-5 font-ledger text-black">International Yoga Day: How to Prepare for Your First Yoga Session</h2>
      <p className="mt-2 mb-4 md:mb-10 text-base md:pr-10 text-[#5B5C66] font-spartan ">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...
      </p>
      <div className="flex justify-between items-center pb-5 ">
          <a href="#" className="text-black font-spartan font-medium">Read Now <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            
          </button>
        </div>
    </div>
  </div>
      </div>
 
</div>

<div className="flex flex-col md:flex-row p-20 pb-0 items-start md:items-center pt-10 space-y-4 md:space-y-0 md:space-x-8">
  <select className="bg-[#F2F2F7] text-black rounded-full pr-10 py-2 px-4 w-full md:w-72 appearance-none" style={{ backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M7 10l5 5 5-5H7z"/></svg>')`, backgroundPosition: 'right 1rem center', backgroundSize: '2rem', backgroundRepeat: 'no-repeat' }}>
    <option value="1">Category</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  <select className="bg-[#F2F2F7] text-black rounded-full pr-10 py-2 px-4 w-full md:w-72 appearance-none" style={{ backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M7 10l5 5 5-5H7z"/></svg>')`, backgroundPosition: 'right 1rem center', backgroundSize: '2rem', backgroundRepeat: 'no-repeat' }}>
    <option value="1">Vertical</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  <select className="bg-[#F2F2F7] text-black rounded-full pr-10 py-2 px-4 w-full md:w-72 appearance-none" style={{ backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M7 10l5 5 5-5H7z"/></svg>')`, backgroundPosition: 'right 1rem center', backgroundSize: '2rem', backgroundRepeat: 'no-repeat' }}>
    <option value="1">Author</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>


<div className="p-10 md:pt-10 md:p-20 md:pb-5 w-full">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10">

    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid1.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
        </div>
      </div>
    </div>

  
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid2.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
        </div>
      </div>
    </div>

    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid3.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
        </div>
      </div>
    </div>

    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid4.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
        </div>
      </div>
    </div>


    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid5.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
        </div>
      </div>
    </div>


    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid6.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
        </div>
      </div>
    </div>

  </div>
  <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid1.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
        </div>
      </div>
    </div>

  
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid2.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
        </div>
      </div>
    </div>

    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid3.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
        </div>
      </div>
    </div>

    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid4.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
        </div>
      </div>
    </div>


    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid5.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
        </div>
      </div>
    </div>


    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid6.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
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