import React from 'react';
import Accordion from './accordion1';
import Accordion2 from './accordion2';

import { useState } from 'react';

const YogiGuide = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
 
  return (
  <>
    <div className="block sm:hidden">
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide p-10 space-x-4 ">
  <img
    src="assets/retreat1.png"
    alt="Inner Engineering"
    className="rounded-lg flex-shrink-0" 
  />
  <img
    src="assets/retreat2.png"
    alt="Meditation Session"
    className=" rounded-lg flex-shrink-0" 
  />
  <img
    src="assets/retreat3.png"
    alt="Yoga Session"
    className=" rounded-lg flex-shrink-0" 
  />
      </div>
      <div className="text-left">



{/* Wrapper for Intro and Details */}

<div className=" flex flex-col md:flex-row justify-between p-10 pb-2 bg-[#FAFAFA] ">
  {/* Introductory Text */}
  <div className=" ">
    <h1 className="text-4xl font-goudy mb-4">A Yogi's Guide To Joy</h1>
    <p className="text-base font-spartan text-[#4E4E4E] mb-6">
      A Yogi’s Guide To Joy, drawn from Sadhguru’s wisdom, is a 15-day journey towards freedom from suffering, mastery of your thoughts and emotions, and lifelong bliss.
    </p>
    <a href="#" className="text-black font-semibold mb-6 inline-block">
      The Curriculum ↘
    </a>
  </div>

  {/* Details Section */}
  <div className="grid grid-cols-2  gap-6 text-left md:w-1/2 pt-5 pb-5 rounded-lg">
    <div className="border-r border-gray-300 pr-6">
      <span className="font-spartan text-base text-[#4E4E4E]">Location</span>
      <p>20, Sands Lane, LA</p>
    </div>
    <div className="border-gray-300 pr-6">
      <span className="font-spartan text-base text-[#4E4E4E]">Dates</span>
      <p>23rd - 30th July</p>
    </div>
    <div className="pr-6 border-r">
      <span className="font-spartan  text-base text-[#4E4E4E]">Activity Descriptions</span>
      <p>Yoga+Meditation</p>
    </div>

    <div className=" border-gray-300 pr-6">
      <span className="font-spartan text-base text-[#4E4E4E]">Skill Level</span>
      <p>Moderate</p>
    </div>
    <div className="border-r border-gray-300 pr-6">
      <span className="font-spartan text-base text-[#4E4E4E]">Retreat Size</span>
      <p>20 Individuals</p>
    </div>
    <div>
      <span className="font-spartan text-base text-[#4E4E4E]">Price</span>
      <p>105$ + Taxes</p>
    </div>
  </div>

</div>
      </div>
      <div className="p-10 pb-2">
                <div className=" bg-gray-100 p-5 rounded-lg shadow-md space-y-8">
                  {/* Heading */}
                  <h2 className="text-lg font-bold text-center leading-tight">
                    Embark on a profound adventure of discovery that reveals
                  </h2>

               {/* Instructor Info and Price Section */}
<div className="flex justify-between items-center">
  <div className="flex items-center space-x-2">
    <img src="assets/pfp2.png" alt="Instructor" className="w-10 h-10 rounded-full" />
    <span className="font-medium text-gray-800">With Sadguru</span>
  </div>

  {/* Price Section */}
  <div className="flex flex-col items-end">
    <span className="text-2xl font-semibold">105$</span>
    <span className="text-sm text-gray-500">+ Taxes</span>
  </div>
</div>


                  {/* Enroll Button */}
                  <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
                    Enroll Now
                  </button>
                  </div>
      </div>
      <div className="p-10 pb-2">
    <h2 className="text-4xl font-goudy flex text-[#1E1E1E] items-start">
                    <span style={{ color: '#FF7A00' }}>✦</span> About Retreat
                  </h2>
                  <p className="text-[#4E4E4E] font-spartan pt-5 ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    <br /> been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    <br /> galley of type and scrambled it to make a type specimen book. It has survived not only five
                    <br /> centuries,
                  </p>
      </div>
      <div className="space-y-4 p-10 pb-2">
                 
                  <h2 className="text-xl font-lexend pt-5 pb-5 flex text-[#1E1E1E] items-start">
                    Key Benefits
                  </h2>

                  {/* Benefit Items */}
      {/* First two items */}
      <div className="flex items-start text-lg space-x-4">
        <img src="assets/line.png" alt="Freedom from Suffering" className="h-8 w-8" />
        <div>
          <h3 className="font-spartan font-semibold text-[#181818] text-base">
            Freedom from Suffering:
          </h3>
          <p className="font-spartan text-[#181818] text-base">
            Learn to transcend suffering and embrace a life of perpetual joy and playfulness.
          </p>
        </div>
      </div>
      <hr className="w-3/4 border-gray-300 " />
      <div className="flex text-lg items-start space-x-4">
        <img src="assets/line.png" alt="Mastery of Thoughts and Emotions" className="h-8 w-8" />
        <div>
          <h3 className="font-spartan font-semibold text-[#181818] text-base">
            Mastery of Thoughts and Emotions:
          </h3>
          <p className="font-spartan text-[#181818] text-base">
            Gain insights and techniques to navigate and conquer your thoughts and emotions.
          </p>
        </div>
      </div>

      {/* Additional items, hidden unless expanded */}
      {isExpanded && (
        <>
          <hr className="w-3/4 border-gray-300 " />
          <div className="flex text-lg items-start space-x-4">
            <img src="assets/line.png" alt="Inner Peace and Stability" className="h-8 w-8" />
            <div>
              <h3 className="font-spartan font-semibold text-[#181818] text-base">
                Inner Peace and Stability:
              </h3>
              <p className="font-spartan text-[#181818] text-base">
                Achieve true balance and stability in all areas of your life.
              </p>
            </div>
          </div>
          <hr className="w-3/4 border-gray-300 " />
          <div className="flex text-lg items-start space-x-4">
            <img src="assets/line.png" alt="Unconditional Love and Joy" className="h-8 w-8" />
            <div>
              <h3 className="font-spartan font-semibold text-[#181818] text-base">
                Unconditional Love and Joy:
              </h3>
              <p className="font-spartan text-[#181818] text-base">
                Cultivate a deep sense of love for yourself and others, and live with a constant smile and
                <br /> kind thought.
              </p>
            </div>
          </div>
          <hr className="w-3/4 border-gray-300 " />
          <div className="flex text-lg items-start space-x-4">
            <img src="assets/line.png" alt="Personal Transformation" className="h-8 w-8" />
            <div>
              <h3 className="font-spartan font-semibold text-[#181818] text-base">
                Personal Transformation:
              </h3>
              <p className="font-spartan text-[#181818] text-base">
                Awaken a profound transformation in how you think, feel, and show up in the world.
              </p>
            </div>
          </div>
        </>
      )}

      {/* View All button */}
      <button 
  onClick={toggleExpand} 
  className="text-black mt-4 focus:outline-none underline text-right w-full"
>
  {isExpanded ? 'View Less' : 'View All'}
</button>
      </div>
      <div className="space-y-4 p-10 pb-2">
      <h2 className="text-xl font-lexend pt-5 pb-5 flex text-[#1E1E1E] items-start">
        Ideal For
      </h2>

      {/* First two items */}
      <div className="flex items-start text-lg space-x-4">
        <img src="assets/line.png" alt="Holistic Health" className="h-8 w-8" />
        <div>
          <h3 className="font-spartan font-semibold text-[#181818] text-base">
            Individuals Seeking Inner Peace:
          </h3>
          <p className="font-spartan text-[#181818] text-base">
            Those who want to overcome stress, anxiety, and inner turmoil.
          </p>
        </div>
      </div>
      <hr className="w-3/4 border-gray-300 " />
      <div className="flex text-lg items-start space-x-4">
        <img src="assets/line.png" alt="Natural Healing" className="h-8 w-8" />
        <div>
          <h3 className="font-spartan font-semibold text-[#181818] text-base">
            Spiritual Seekers:
          </h3>
          <p className="font-spartan text-[#181818] text-base">
            People looking for a deeper understanding of themselves and their place in the cosmos.
          </p>
        </div>
      </div>

      {/* Additional items, hidden unless expanded */}
      {isExpanded && (
        <>
          <hr className="w-3/4 border-gray-300 " />
          <div className="flex text-lg items-start space-x-4">
            <img src="assets/line.png" alt="Natural Healing" className="h-8 w-8" />
            <div>
              <h3 className="font-spartan font-semibold text-[#181818] text-base">
                Self-Improvement Enthusiasts:
              </h3>
              <p className="font-spartan text-[#181818] text-base">
                Anyone eager to master their thoughts and emotions and improve their quality of life.
              </p>
            </div>
          </div>
          <hr className="w-3/4 border-gray-300 " />
          <div className="flex text-lg items-start space-x-4">
            <img src="assets/line.png" alt="Natural Healing" className="h-8 w-8" />
            <div>
              <h3 className="font-spartan font-semibold text-[#181818] text-base">
                Those Experiencing Life Changes:
              </h3>
              <p className="font-spartan text-[#181818] text-base">
                Individuals facing significant life changes and seeking ways to navigate them without
                <br /> suffering.
              </p>
            </div>
          </div>
          <hr className="w-3/4 border-gray-300 " />
          <div className="flex text-lg items-start space-x-4">
            <img src="assets/line.png" alt="Natural Healing" className="h-8 w-8" />
            <div>
              <h3 className="font-spartan font-semibold text-[#181818] text-base">
                People Seeking Joy and Fulfillment:
              </h3>
              <p className="font-spartan text-[#181818] text-base">
                Those who want to live in perpetual joy and achieve true freedom and fulfillment.
              </p>
            </div>
          </div>
        </>
      )}

      {/* View All button */}
      <button 
  onClick={toggleExpand} 
  className="text-black mt-4 focus:outline-none underline text-right w-full"
>
  {isExpanded ? 'View Less' : 'View All'}
</button>

      </div>
      <div className="pt-10">
    <hr className="border-black mx-25" />

              <h2 className="text-4xl font-goudy pt-5 flex text-[#1E1E1E] p-10 pb-5 items-start">
                <span style={{ color: '#FF7A00' }}>✦</span> Retreat Details
              </h2>
              <div className="p-10 pt-2">
    <div className="grid grid-cols-2  gap-6 text-left md:w-3/4 rounded-lg ">
                    <div className="border-r border-gray-300 pr-6">
                      <span className="font-spartan text-semibold text-base text-[#181818]">Location</span>
                      <p className="font-spartan">20, Sands Lane, LA</p>
                    </div>
                    <div className=" border-gray-300 pr-6">
                      <span className="font-spartan text-semibold text-base text-[#181818]">Dates</span>
                      <p className="font-spartan">23rd - 30th July</p>
                    </div>
                    <div className=" border-r pr-6">
                      <span className="  font-spartan text-semibold text-base text-[#181818]">Activity Descriptions</span>
                      <p className="font-spartan">Yoga+Meditation</p>
                    </div>

                    <div className=" border-gray-300 pr-6">
                      <span className="font-spartan text-semibold text-base text-[#181818]">Skill Level</span>
                      <p className="font-spartan">Moderate</p>
                    </div>
                    <div className="border-r border-gray-300 pr-6">
                      <span className="font-spartan  text-semibold text-base text-[#181818]">Retreat Size</span>
                      <p className="font-spartan">20 Individuals</p>
                    </div>
                    <div>
                      <span className="font-spartan text-semibold text-base text-[#181818]">Price</span>
                      <p className="font-spartan">105$ + Taxes</p>
                    </div>
                  </div>
                  </div>
              <div className="p-10 pb-2 pt-2">
              <hr className="w-full border-gray-300 " />
                  <h2 className="text-xl pt-5 font-lexend">Price Breakdown</h2>
                  <h2 className="text-xl  pt-5 font-spartan font-semibold">105$ + Taxes</h2>
                  <p className="text-base pt-5 text-[#181818] font-spartan">
                    Tax is additional. It includes shared room, 3 meals a day, basic facilities like mattress and washroom kit.
                  </p>
                  </div>
              <div className="p-10 pt-2">
              <hr className="w-full border-gray-300 " />
                  <h2 className="text-xl pt-5 font-lexend">Accommodation & Logistics</h2>
                  <h2 className="text-base pt-5  font-spartan font-semibold">Accommodation</h2>
                  <p className="text-base text-[#181818] font-spartan">
                    Shared room is included in the package. One can upgrade to private cabin with additional 10$ per night
                  </p>

                  <h2 className="text-base pt-5  font-spartan font-semibold">Meals</h2>
                  <p className="text-base text-[#181818] font-spartan">
                    Satvik veg meals included.breakfast, lunch and early dinner.</p>

                  <h2 className="text-base pt-5 font-spartan font-semibold">Transportation</h2>
                  <p className="text-base text-[#181818] font-spartan">
                    Not included.One can take the city transportation eg.bus, metro or tram from station ABC  </p>
                    </div>
      </div>
      <div className="pt-10">
    <hr className="border-black mx-25" />

              <h2 className="text-4xl font-goudy  flex text-[#1E1E1E] p-10 pt-5 pb-5 items-start">
                <span style={{ color: '#FF7A00' }}>✦</span> The Curriculum
              </h2>
              <div className="p-10 pt-2">
              <Accordion ></Accordion>
              </div>
      </div>
      <div className="pt-10">
    <hr className="border-black mx-25" />

              <h2 className="text-4xl font-goudy  flex text-[#1E1E1E] p-10 pt-5 pb-5 items-start">
                <span style={{ color: '#FF7A00' }}>✦</span> About Sadguru
              </h2>
              <img src="assets/retreatimg.png" alt="Description of the image" className="rounded-lg  w-full p-10 h-auto object-cover" />
                <p className="text-base text-[#4E4E4E] font-spartan p-10 pb-2 pt-2">
                  Sadhguru is a venerated yogi and visionary. Named one of India’s 50 most influential people, Sadhguru’s work has touched the lives of millions worldwide through his transformational programs.</p>
                <p className="text-base text-[#4E4E4E] font-spartan p-10 pb-2  pt-2">
                  Sadhguru has a unique ability to make the ancient yogic sciences relevant to contemporary minds. His approach does not ascribe to any belief system, but offers methods for self transformation that are both proven and powerful.</p>
                <p className="text-base text-[#4E4E4E] font-spartan p-10 pb-2  pt-2">
                  An internationally renowned speaker and author of the New York Times bestseller Inner Engineering: A Yogi’s Guide to Joy, Sadhguru has been an influential voice at major global forums including the United Nations and the World Economic Forum, addressing issues as diverse as socioeconomic development, leadership and spirituality.</p>
                <p className="text-base text-[#4E4E4E] font-spartan p-10 pb-2  pt-2">
                  He has also been invited to speak at leading educational institutions, including Oxford, London Business School, IMD, Stanford, Harvard, Yale, Wharton and MIT.</p>
                <p className="text-base text-[#4E4E4E] font-spartan p-10 pb-2  pt-2">
                  In his first-ever Mindvalley program, Sadhguru presents his most beloved teachings on perhaps the most vital aspect of the human experience: the freedom from suffering, and the attainment of unconditional peace and joy.</p> 
      </div>
      <div className="pt-10">
    <hr className="border-black mx-25" />

              <h2 className="text-4xl font-goudy pt-5 flex text-[#1E1E1E] p-10 pb-5 items-start">
                <span style={{ color: '#FF7A00' }}>✦</span> FAQ
              </h2>
              <div className="p-10 pt-2">
              <Accordion2 ></Accordion2>
              </div>
      </div>
      <h2 className="text-[#1E1E1E]  text-2xl p-10 font-goudy pb-5 pt-5" > Your Holistic Wellness Journey </h2>
      <div className="flex">
  <div className="custom-dashed-line2"></div>
  
  <div className="p-10 pt-5 grid w-full grid-cols-1  gap-8">
    {/* For Soul */}
    <div className="bg-white shadow-lg rounded-lg h-[450px]">
      <div className="relative mb-4">
        <img src="assets/retreat5.png" alt="A Yogi's Guide to Joy" className="w-full h-full" />
      </div>
      <div className="pl-5 pt-3">
        <h4 className="text-lg p-3 text-xs rounded-sm text-[#FB6A00] font-semibold font-spartan mb-2 bg-[#FFC700]/[0.32] inline-block">
          SPIRITUAL WELLNESS
        </h4>
      </div>
      <h4 className="font-goudy text-xl pt-5 pl-5 mb-2">A Yogi's Guide to Joy</h4>
      <div className="flex pt-5 items-start mb-4">
        <img src="assets/pfp.png" alt="Event Image" className="w-15 h-15 pl-5" />
        <p className="text-sm text-gray-600 pl-3">
          With Cory Muscara, Omega<br />
          Offline - LA, Jun 28th to 30th, 2024
        </p>
      </div>
      <div className="flex justify-between items-center">
        <a href="#" className="text-black pl-5 pt-5 pb-5 font-medium font-spartan text-base">Know More →</a>
        <button className="text-gray-400 hover:text-gray-600 pr-5"><i className="fa-regular fa-heart"></i></button>
      </div>
    </div>

    {/* For Body */}
    <div className="bg-white shadow-lg rounded-lg h-[450px]">
      <div className="relative mb-4">
        <img src="assets/retreat4.png" alt="A Yogi's Guide to Joy" className="w-full h-full" />
      </div>
      <div className="pl-5 pt-3">
        <h4 className="text-lg p-3 text-xs rounded-sm text-[#88009E] font-semibold font-spartan mb-2 bg-[#C6A5EA]/[0.37] inline-block">
          EXERCISE WELL
        </h4>
      </div>
      <h4 className="font-goudy text-xl pt-5 pl-5 mb-2">The Way of the Kettlebell</h4>
      <div className="flex pt-5 items-start mb-4">
        <img src="assets/pfp.png" alt="Event Image" className="w-15 h-15 pl-5" />
        <p className="text-sm text-gray-600 pl-3">
          With Cory Muscara, Omega<br />
          Offline - New York, Jun 28th to 30th, 2024,
        </p>
      </div>
      <div className="flex justify-between items-center">
        <a href="#" className="text-black pl-5 pt-5 pb-5 font-medium font-spartan text-base">Know More →</a>
        <button className="text-gray-400 hover:text-gray-600 pr-5"><i className="fa-regular fa-heart"></i></button>
      </div>
    </div>

    {/* For Mind */}
    <div className="bg-white shadow-lg rounded-lg h-[450px]">
      <div className="relative mb-4">
        <img src="assets/retreat6.png" alt="A Yogi's Guide to Joy" className="w-full h-full" />
      </div>
      <div className="flex pl-5 pt-3 space-x-4">
        <div>
          <h4 className="text-lg p-3 text-xs rounded-sm text-[#BF3818] font-semibold font-spartan mb-2 bg-[#F28368]/[0.22] inline-block">
            MANAGE STRESS
          </h4>
        </div>
        <div>
          <h4 className="text-lg p-3 pl-5 text-xs rounded-sm text-[#BF3818] font-semibold font-spartan mb-2 bg-[#F28368]/[0.22] inline-block">
            SLEEP WELL
          </h4>
        </div>
      </div>
      <h4 className="font-goudy text-xl pt-5 pl-5 mb-2">The Champion Mindset</h4>
      <div className="flex pt-5 items-start mb-4">
        <img src="assets/pfp.png" alt="Event Image" className="w-15 h-15 pl-5" />
        <p className="text-sm text-gray-600 pl-3">
          With Cory Muscara, Omega<br />
          Online
        </p>
      </div>
      <div className="flex justify-between items-center">
        <a href="#" className="text-black pl-5 pt-5 pb-5 font-medium font-spartan text-base">Know More →</a>
        <button className="text-gray-400 hover:text-gray-600 pr-5"><i className="fa-regular fa-heart"></i></button>
      </div>
    </div>
  </div>
      </div>
      <h2 className="text-[#1E1E1E]  text-2xl p-10 font-goudy pb-5 pt-5" > Latest Blogs </h2>
      <div className="overflow-x-auto scrollbar-hide p-5 ">
  <div className="flex space-x-3 p-5">
    <div className="bg-white shadow rounded-lg flex-shrink-0 w-80">
      <img src="assets/grid1.png" alt="Image description" className="w-full h-60 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-lexend font-light mb-2">Lorem Ipsum is simply dummy text <br />of the printing</h2>
        <p className="text-[#5B5C66] text-base font-spartan mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-lexend pt-10 text-base">Read <span className="ml-1">→</span></a>
        </div>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg flex-shrink-0 w-80">
      <img src="assets/grid2.png" alt="Image description" className="w-full h-60 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-lexend font-light mb-2">Lorem Ipsum is simply dummy text <br />of the printing</h2>
        <p className="text-[#5B5C66] text-base font-spartan mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-lexend pt-10 text-base">Read <span className="ml-1">→</span></a>
        </div>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg flex-shrink-0 w-80">
      <img src="assets/grid3.png" alt="Image description" className="w-full h-60 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-lexend font-light mb-2">Lorem Ipsum is simply dummy text <br />of the printing</h2>
        <p className="text-[#5B5C66] text-base font-spartan mb-4">By Will Smith • Omega</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-black font-lexend pt-10 text-base">Read <span className="ml-1">→</span></a>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>   
  </>
  );
};

export default YogiGuide;
