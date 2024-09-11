import React from "react";

const WellnessBanner = () => {
  return (
    <><><div className="relative w-screen">
      <div
        className="w-full h-full absolute top-0 left-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/box.png')" }}
      ></div>

      <div className="relative max-w-6xl pl-6 pr-6 py-8 rounded-lg font-ledger text-white mt-8">
        <div className="pl-20 mb-4">
          <div className="text-5xl ">Spectrum ✦ Shift</div>
        </div>
        <h1 className="text-4xl pt-10 pl-20 mb-2">Hi Preeti, here is your curated path to wellness</h1>
        <p className="text-lg pl-20 mb-6">
          Holistic health is an approach to life that considers multidimensional wellness of body, mind, and soul.
        </p>
        <div className="flex pl-20 space-x-10 mb-4">
          <input
            type="text"
            placeholder="Help me Nourish Well"
            className="bg-white text-black placeholder-gray-600 p-3 rounded-lg w-2/3" />
          <select className="bg-white text-black p-3 w-1/3 rounded-lg">
            <option>Southern California</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="w-screen max-w-9xl mx-auto pl-20 pr-20">
          <div className="w-full pl-10 bg-black text-2xl text-white p-4 rounded-lg flex justify-between items-center -mb-20 ">
            <span>✦ Get 20% discount on booking all 3 plans</span>
            <button className="bg-white text-black py-3 px-4 rounded-full">
              Enroll In All Recommended Plans
            </button>
          </div>

        </div>
      </div>

    </div><div className="flex font-ledger pr-10  pt-20 rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col pl-4 md:pl-10 lg:pl-20 pt-6 md:pt-8 lg:pt-10 w-full md:w-1/4 bg-white border-r">
  <div className="flex items-center space-x-2 md:space-x-4 mb-4 md:mb-6">
    <div className="text-lg md:text-xl font-bold">For Body</div>
  </div>
  <div
    className="inline-block h-[150px] md:h-[200px] min-h-[1em] w-0.5 self-stretch bg-purple-600 dark:bg-white/10"></div>
  <div className="text-purple-600 pt-4 md:pt-5 font-semibold mb-2">Why are we recommending?</div>
  <p className="text-gray-600 mb-4 md:mb-6">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since.
  </p>
  <button className="text-black font-semibold flex items-center space-x-1">
    <span>Show Similar Programs</span> <span className="ml-1 md:ml-2">➔</span>
  </button>
</div>


        {/* Right Section */}
        <div className="flex  border-2 border-black rounded-lg w-3/4">
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between mb-10">
              <img src="assets/image 92.png" alt="Logo" className="h-8" />
              <button className="text-gray-400 hover:text-red-500">
                ♥
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-10">Detox Wellness Program</h2>
            <p className="text-gray-600 mb-4">
              We focus on educating people to ascertain the cause of disease, change unhealthful conditions, correct wrong
              habits, and assist nature in her effort to expel impurities and to restore right conditions in the body.
            </p>
            <p className="font-semibold">With Barbara Olinn</p>
            <p className="text-gray-600 mb-20">Offline / Online</p>
            <div className="flex items-center space-x-4">
              <button className="bg-black text-2xl text-white px-4 py-2 rounded-md">Enroll</button>
              <button className="flex items-center text-xl text-gray-800">
                Know More <span className="ml-2">➔</span>
              </button>
              <div className="text-3xl pl-80 font-bold">$299</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center  h-full">
            <img
              src="assets/bgcard1.png"
              alt="Instructor"
              className=" object-cover w-65 h-full " />

          </div>
        </div>
      </div></>
      <div className="flex font-ledger pr-10  pt-20 rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col pl-20 pt-10 w-1/4 bg-white border-r">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-xl font-bold">For Soul</div>
          </div>
          <div
            className="inline-block h-[200px] min-h-[1em] w-0.5 self-stretch bg-orange-600 dark:bg-white/10"></div>
          <div className="text-orange-600 pt-5 font-semibold mb-2">Why are we recommending?</div>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since.
          </p>
          <button className="text-black font-semibold flex items-center">
            Show Similar Programs <span className="ml-2">➔</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="flex  border-2 border-black rounded-lg w-3/4">
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between mb-10">
              <img src="assets/image 93.png" alt="Logo" className="h-30" />
              <button className="text-gray-400 hover:text-red-500">
                ♥
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-10">Detox Wellness Program</h2>
            <p className="text-gray-600 mb-4">
              We focus on educating people to ascertain the cause of disease, change unhealthful conditions, correct wrong
              habits, and assist nature in her effort to expel impurities and to restore right conditions in the body.
            </p>
            <p className="font-semibold">With Barbara Olinn</p>
            <p className="text-gray-600 mb-20">Offline / Online</p>
            <div className="flex items-center space-x-4">
              <button className="bg-black text-2xl text-white px-4 py-2 rounded-md">Enroll</button>
              <button className="flex items-center text-xl text-gray-800">
                Know More <span className="ml-2">➔</span>
              </button>
              <div className="text-3xl pl-80 font-bold">$299</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="assets/bgcard2.png"
              alt="Instructor"
              className=" object-cover w-65 h-full " />

          </div>
        </div>
      </div>
      <div className="flex font-ledger pr-10  pt-20 rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col pl-20 pt-10 w-1/4 bg-white border-r">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-xl font-bold">For Soul</div>
          </div>
          <div
            className="inline-block h-[200px] min-h-[1em] w-0.5 self-stretch bg-blue-600 dark:bg-white/10"></div>
          <div className="text-blue-600 pt-5 font-semibold mb-2">Why are we recommending?</div>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since.
          </p>
          <button className="text-black font-semibold flex items-center">
            Show Similar Programs <span className="ml-2">➔</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="flex  border-2 border-black rounded-lg w-3/4">
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between pl-10 mb-10">
              <img src="assets/image 94.png" alt="Logo" className="h-30" />
              <button className="text-gray-400 hover:text-red-500">
                ♥
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-10">Detox Wellness Program</h2>
            <p className="text-gray-600 mb-4">
              We focus on educating people to ascertain the cause of disease, change unhealthful conditions, correct wrong
              habits, and assist nature in her effort to expel impurities and to restore right conditions in the body.
            </p>
            <p className="font-semibold">With Barbara Olinn</p>
            <p className="text-gray-600 mb-20">Offline / Online</p>
            <div className="flex items-center space-x-4">
              <button className="bg-black text-2xl text-white px-4 py-2 rounded-md">Enroll</button>
              <button className="flex items-center text-xl text-gray-800">
                Know More <span className="ml-2">➔</span>
              </button>
              <div className="text-3xl pl-80 font-bold">$299</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center  h-full">
            <img
              src="assets/bgcard3.png"
              alt="Instructor"
              className=" object-cover w-65 h-full " />

          </div>
        </div>
      </div>
      </>
  
  );
};

export default WellnessBanner;
