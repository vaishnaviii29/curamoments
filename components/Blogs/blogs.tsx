import React from 'react';


const CartPage = () => {
  return (
    <><div className="bg-gray-50 "></div>
      <div className="relative bg-cover  h-[500px] bg-center bg-no-repeat p-4 rounded-lg" style={{ backgroundImage: `url('assets/box2.png')` }}>
  <h1 className="text-black font-ledger text-2xl md:text-4xl pl-4 md:pl-20 pt-11 mb-2">Holistic Wellness Blogs</h1>
  <div className="p-20 pt-10">
  <div className="flex flex-col md:flex-row font-ledger rounded-lg shadow-md bg-[#F7F7F7] w-full">
    <div className="flex-shrink-0">
      <img className="h-full w-full  rounded-l-lg  object-cover" src="assets/blogs.png" alt="Person smiling" />
    </div>
    <div className="ml-0 md:ml-6 mt-6 md:mt-5">
    <span className=" bg-black text-white text-xs px-2 py-1 font-spartan font-semibold rounded">
    FEATURED
              </span>
      <h2 className="text-2xl mb-4 md:mb-10 pt-5 font-ledger text-black">International Yoga Day: How to Prepare for Your First Yoga Session</h2>
      <p className="mt-2 mb-4 md:mb-10 text-lg md:pr-10 text-[#5B5C66] font-spartan">
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


<div className="flex p-20 pb-5 items-start  pt-10 space-x-8">
      <select className="bg-[#F2F2F7] text-black rounded-full pr-10 py-2 px-4 w-72 ">
        <option value="1">Category</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <select className="bg-[#F2F2F7] text-black rounded-full pr-10 py-2 px-4 w-72">
        <option value="1">Vertical</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <select className="bg-[#F2F2F7] text-black rounded-full pr-10 py-2 px-4 w-72">
        <option value="1">Author</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
    <div className="container pt-5 mx-auto ">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid1.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-gray-600 text-sm mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600 font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

  
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid2.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-gray-600 text-sm mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600 font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid3.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-gray-600 text-sm mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600 font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid4.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-gray-600 text-sm mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600 font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>


    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid5.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-gray-600 text-sm mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600 font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>


    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid6.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-gray-600 text-sm mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600 font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
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
        <h2 className="text-lg font-semibold mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-gray-600 text-sm mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600 font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

  
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid2.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-gray-600 text-sm mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600 font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid3.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-gray-600 text-sm mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600 font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid4.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-gray-600 text-sm mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600 font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>


    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid5.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-gray-600 text-sm mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600 font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>


    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src="assets/grid6.png" alt="Image description" className="w-full h-60 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Lorem Ipsum is simply dummy text of the printing</h2>
        <p className="text-gray-600 text-sm mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-600 font-semibold">Read <span className="ml-1">→</span></a>
          <button className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
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