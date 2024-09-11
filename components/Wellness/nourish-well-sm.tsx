import React from 'react';

const CartPage = () => {
  return (
    <>
    <div className="block sm:hidden">
      <div className="w-full p-10">
    <img
      src="../assets/wellness1.png"
      alt="Avocado dish"
      className="rounded-3xl shadow-md object-cover w-full h-[200px] "
    />
      </div>
      <div className="flex flex-col p-10 pt-0 pb-0 md:flex-row items-start gap-8 bg-white rounded-lg ">
  {/* Back Button */}
  <div className="w-full md:w-1/2">
  <button className="text-gray-600 flex items-center mb-4">
  <i className="fas fa-arrow-left"></i>
  <span className="ml-2">Back</span>
</button>

    
    {/* Main Content */}
    <h1 className="text-4xl font-goudy text-gray-900 mb-4">Nourish Your Body</h1>
    <p className="text-gray-600 mb-6">
      Naturopathy takes a holistic approach to wellness. Naturopathy supports a person to live a healthy lifestyle. The foundations of naturopathy are based on the importance of a healthy diet, clean fresh water, sunlight, exercise and stress management.
    </p>
    <p className="text-gray-600 mb-6">
      Naturopathy aims to educate the person to look after their own health and the health of their family, minimising symptoms of any illness, supporting the body’s capacity to heal, and balancing the body so that illness is less likely to occur in the future.
    </p>

    {/* Links */}
    <div className="space-y-8 w-full p-10 pr-0 pl-0 pt-5">
      <div className="flex justify-between items-center border-b pb-2">
        <span className="text-gray-900">Key Benefits</span>
        <span className="fas fa-arrow-right text-orange-500 transform rotate-45"></span>
      </div>
      <div className="flex justify-between items-center border-b pb-2">
        <span className="text-gray-900">Ideal for</span>
        <span className="fas fa-arrow-right text-orange-500 transform rotate-45"></span>
      </div>
      <div className="flex justify-between items-center border-b pb-2">
        <span className="text-gray-900">How It Works</span>
        <span className="fas fa-arrow-right text-orange-500 transform rotate-45"></span>
      </div>
    </div>
  </div>
      </div>
      <div className="pt-0 p-10">
                <div className=" bg-gray-100 p-4   rounded-lg shadow-md space-y-4">
                  {/* Heading */}
                  <h2 className="text-lg  pb-2 font-bold text-center leading-tight">
                  Assessment by a Naturopath
                  </h2>

                  <p className="font-spartan p-5 pt-2 pb-2 text-[#5D5C5C] text-base">
                  A well-trained naturopath will ask you about your diet, lifestyle, family background and environment, as well as the history of any illnesses or complaints.
                      </p>

                 

                  {/* Enroll Button */}
                  <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
                  Book Appointment
                  </button>

                  {/* Image Section */}
                  <div className="bg-white rounded-lg">
                    <div className="rounded-lg overflow-hidden">
                      <img src="../assets/retreat7.png" alt="Course Image" className="w-full" />
                    </div>

                    {/* Description */}
                    <p className="text-sm p-5 text-gray-600 leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>

                    {/* Instructor Details */}
                    <div className="font-semibold  text-base text-black p-5 pt-2">
                      Preeti Mishra
                      <p className="text-sm text-gray-500 ">Living in alignment</p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-center space-x-4  items-center">
                    <button className="p-2 bg-gray-200 rounded-full">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <div className="flex space-x-1">
                      <span className="block h-1 w-3 bg-black rounded-full"></span>
                      <span className="block h-1 w-3 bg-gray-300 rounded-full"></span>
                      <span className="block h-1 w-3 bg-gray-300 rounded-full"></span>
                      <span className="block h-1 w-3 bg-gray-300 rounded-full"></span>
                    </div>
                    <button className="p-2 bg-gray-200 rounded-full">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                  </div>

           
              

                </div>
      </div>
      <div className="p-10 pt-0 overflow-y-auto scrollbar-hide font-ledger py-8 space-y-8">
                {/* Key Benefits Section */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-goudy flex text-[#1E1E1E] items-start pb-5">
                    <span style={{ color: '#FF7A00' }}>✦</span> Key Benefits 
                  </h2>
                 

                  {/* Benefit Items */}
                  <div className="flex items-start text-lg space-x-4">
                    <img src="../assets/line.png" alt="Holistic Health" className="h-8 w-8" />
                    <div>
                      <h3 className="font-spartan font-semibold text-[#181818] text-base">
                      Holistic Health: 
                      </h3>
                      <p className="font-spartan text-[#181818] text-base">
                      Treats the whole person, not just symptoms.
                      </p>
                    </div>
                  </div>
                  <hr className="w-3/4 border-gray-300 " />
                  <div className="flex text-lg items-start space-x-4">
                    <img src="../assets/line.png" alt="Natural Healing" className="h-8 w-8" />
                    <div>
                      <h3 className="font-spartan font-semibold text-[#181818] text-base">
                      Natural Healing:
                      </h3>
                      <p className="font-spartan text-[#181818] text-base">
                      Uses herbal medicine, nutrition, and lifestyle changes.
                      </p>
                    </div>
                  </div>
                  <hr className="w-3/4 border-gray-300 " />
                  <div className="flex text-lg items-start space-x-4">
                    <img src="../assets/line.png" alt="Natural Healing" className="h-8 w-8" />
                    <div>
                      <h3 className="font-spartan font-semibold text-[#181818] text-base">
                      Preventative Care: 
                      </h3>
                      <p className="font-spartan text-[#181818] text-base">
                      Emphasizes prevention to reduce chronic disease risks.
                      </p>
                    </div>
                  </div>
                 
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-goudy flex text-[#1E1E1E] items-start pb-5">
                    <span style={{ color: '#FF7A00' }}>✦</span> Ideal for
                  </h2>
                 

                  {/* Benefit Items */}
                  <div className="flex items-start text-lg space-x-4">
                    <img src="../assets/line.png" alt="Holistic Health" className="h-8 w-8" />
                    <div>
                     
                      <p className="font-spartan text-[#181818] text-base">
                      Individuals seeking natural, non-invasive treatments.
                      </p>
                    </div>
                  </div>
                  <hr className="w-3/4 border-gray-300 " />
                  <div className="flex text-lg items-start space-x-4">
                    <img src="../assets/line.png" alt="Natural Healing" className="h-8 w-8" />
                    <div>
                     
                      <p className="font-spartan text-[#181818] text-base">
                      People with chronic conditions needing complementary care.
                      </p>
                    </div>
                  </div>
                  <hr className="w-3/4 border-gray-300 " />
                  <div className="flex text-lg items-start space-x-4">
                    <img src="../assets/line.png" alt="Natural Healing" className="h-8 w-8" />
                    <div>
                      
                      <p className="font-spartan text-[#181818] text-base">
                      Those focused on long-term health and dealing with stress or lifestyle issues.
                      </p>
                    </div>
                  </div>
                 
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-goudy flex text-[#1E1E1E] items-start pb-5">
                    <span style={{ color: '#FF7A00' }}>✦</span> How It Works
                  </h2>
                 

                  {/* Benefit Items */}
                  <div className="flex items-start text-lg space-x-4">
                    <img src="../assets/line.png" alt="Holistic Health" className="h-8 w-8" />
                    <div>
                      
                      <p className="font-spartan text-[#181818] text-base">
                      Personalized treatment plans based on comprehensive assessments.
                      </p>
                    </div>
                  </div>
                  <hr className="w-3/4 border-gray-300 " />
                  <div className="flex text-lg items-start space-x-4">
                    <img src="../assets/line.png" alt="Natural Healing" className="h-8 w-8" />
                    <div>
                      
                      <p className="font-spartan text-[#181818] text-base">
                      Incorporates natural therapies like nutrition counseling and herbal medicine.
                      </p>
                    </div>
                  </div>
                  <hr className="w-3/4 border-gray-300 " />
                  <div className="flex text-lg items-start space-x-4">
                    <img src="../assets/line.png" alt="Natural Healing" className="h-8 w-8" />
                    <div>
                      
                      <p className="font-spartan text-[#181818] text-base">
                      Aims to restore balance and support natural healing processes.
                      </p>
                    </div>
                  </div>
                 
                </div>

      </div>
      <h2 className="text-2xl p-5  text-[#1E1E1E] font-goudy pl-10">Relevant Retreat</h2>
      <div className="flex overflow-x-auto w-full scrollbar-hide p-10 pb-10 pt-5">
  <div className="flex space-x-4">
 
    <div className="bg-white rounded-lg w-[90%] sm:w-[90%] md:w-[30%] min-w-[300px]">
      <div className="relative">
        <img
          src="../assets/home1.png"
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
          src="../assets/home2.png"
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
          src="../assets/home3.png"
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
      <h2 className="text-2xl p-10 text-[#1E1E1E] font-goudy pl-10">Relevant Wisdom</h2>
      <div className="flex overflow-x-auto scrollbar-hide pl-10 p-10 pt-1 space-x-4">
      <div className="bg-white shadow rounded-lg overflow-hidden flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] min-w-[300px]">
    <img src="../assets/grid1.png" alt="Image description" className="w-full h-60 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy <br /> text of the printing</h2>
      <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
      <div className="flex justify-between items-center">
        <a href="#" className="text-[#000000] font-lexend">Read <span className="ml-1">→</span></a>
      </div>
    </div>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] min-w-[300px]">
    <img src="../assets/grid2.png" alt="Image description" className="w-full h-60 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-ledger mb-2">Lorem Ipsum is simply dummy <br /> text of the printing</h2>
      <p className="text-[#5B5C66] font-spartan text-base mb-4">By Will Smith • Omega</p>
      <div className="flex justify-between items-center">
        <a href="#" className="text-[#000000] font-lexend">Read <span className="ml-1">→</span></a>
      </div>
    </div>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] min-w-[300px]">
    <img src="../assets/grid3.png" alt="Image description" className="w-full h-60 object-cover" />
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
};

export default CartPage;