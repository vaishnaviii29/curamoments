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
  
    <div className="hidden sm:block">
        <div className=" p-20  pb-5 pt-5">
          <div className=" mx-auto   rounded-lg ">
            {/* Image Row */}
            <div className="flex  justify-between space-x-4 mb-6">
              <img
                src="assets/retreat1.png"
                alt="Inner Engineering"
                className="w-1/3 rounded-lg" />
              <img
                src="assets/retreat2.png"
                alt="Meditation Session"
                className="w-1/3 rounded-lg" />
              <img
                src="assets/retreat3.png"
                alt="Yoga Session"
                className="w-1/3 rounded-lg" />
            </div>
            {/* Text Content */}
            <div className="text-left">



              {/* Wrapper for Intro and Details */}

              <div className=" flex flex-col md:flex-row justify-between ">
                {/* Introductory Text */}
                <div className=" mb-6 md:mb-0 md:w-1/2">
                  <h1 className="text-4xl font-goudy mb-4">A Yogi's Guide To Joy</h1>
                  <p className="text-base font-spartan text-[#4E4E4E] mb-6">
                    A Yogi’s Guide To Joy, drawn from Sadhguru’s wisdom, is a 15-day journey towards freedom from suffering, mastery of your thoughts and emotions, and lifelong bliss.
                  </p>
                  <a href="#" className="text-blue-600 font-semibold mb-6 inline-block">
                    The Curriculum
                  </a>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left md:w-1/2 border-2 pt-5 pb-5 rounded-lg p-20 pr-5 pl-5">
                  <div className="border-r border-gray-300 pr-6">
                    <span className="font-spartan text-base text-[#4E4E4E]">Location</span>
                    <p>20, Sands Lane, LA</p>
                  </div>
                  <div className="border-r border-gray-300 pr-6">
                    <span className="font-spartan text-base text-[#4E4E4E]">Dates</span>
                    <p>23rd - 30th July</p>
                  </div>
                  <div className="pr-3">
                    <span className="font-spartan text-base text-[#4E4E4E]">Activity Descriptions</span>
                    <p>Yoga+Meditation</p>
                  </div>

                  <div className="border-r border-gray-300 pr-6">
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
            <div className="text-xl sm:text-2xl pt-5 sm:pt-10 px-3 sm:px-5 w-full font-ledger text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-5 w-full -mb-px">
                <li className="flex-1">
                  <a href="#" className="block p-3 sm:p-4 text-black border-b-4 border-black rounded-t-lg text-center active dark:text-blue-500 dark:border-black" aria-current="page">About Retreat</a>
                </li>
                <li className="flex-1">
                  <a href="#" className="block p-3 sm:p-4 border-b-2 border-transparent rounded-t-lg text-center hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Retreat Details </a>
                </li>
                <li className="flex-1">
                  <a href="#" className="block p-3 sm:p-4 border-b-2 border-transparent rounded-t-lg text-center hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">The Curriculum</a>
                </li>
                <li className="flex-1">
                  <a href="#" className="block p-3 sm:p-4 border-b-2 border-transparent rounded-t-lg text-center hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">About Coach</a>
                </li>
              </ul>
            </div>
            <div className="flex h-screen overflow-hidden">
              {/* Left Scrollable Section */}
              <div className="w-2/3 overflow-y-auto scrollbar-hide font-ledger py-8 space-y-8">
                {/* Key Benefits Section */}
                <div className="space-y-4">
                  <h2 className="text-4xl font-goudy flex text-[#1E1E1E] items-start">
                    <span style={{ color: '#FF7A00' }}>✦</span> About Retreat
                  </h2>
                  <p className="text-[#4E4E4E] font-spartan">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    <br /> been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    <br /> galley of type and scrambled it to make a type specimen book. It has survived not only five
                    <br /> centuries,
                  </p>
                  <h2 className="text-xl font-lexend pt-5 pb-5 flex text-[#1E1E1E] items-start">
                    Key Benefits
                  </h2>

                  {/* Benefit Items */}
                  <div className="flex items-start text-lg space-x-4">
                    <img src="assets/line.png" alt="Holistic Health" className="h-8 w-8" />
                    <div>
                      <h3 className="font-spartan font-semibold text-[#181818] text-base">
                        Freedom from Suffering:
                      </h3>
                      <p className="font-spartan text-[#181818] text-base">
                        Learn to transcend suffering and embrace a life of perpetual joy and playfulness.
                      </p>
                    </div>
                  </div>
                  <div className="pr-10">
                  <hr className="w-full border-gray-300 " />
                  </div>
                  <div className="flex text-lg items-start space-x-4">
                    <img src="assets/line.png" alt="Natural Healing" className="h-8 w-8" />
                    <div>
                      <h3 className="font-spartan font-semibold text-[#181818] text-base">
                        Mastery of Thoughts and Emotions:
                      </h3>
                      <p className="font-spartan text-[#181818] text-base">
                        Gain insights and techniques to navigate and conquer your thoughts and emotions.
                      </p>
                    </div>
                  </div>
                  <div className="pr-10">
                  <hr className="w-full border-gray-300 " />
                  </div>
                  <div className="flex text-lg items-start space-x-4">
                    <img src="assets/line.png" alt="Natural Healing" className="h-8 w-8" />
                    <div>
                      <h3 className="font-spartan font-semibold text-[#181818] text-base">
                        Inner Peace and Stability:
                      </h3>
                      <p className="font-spartan text-[#181818] text-base">
                        Achieve true balance and stability in all areas of your life.
                      </p>
                    </div>
                  </div>
                  <div className="pr-10">
                  <hr className="w-full border-gray-300 " />
                  </div>
                  <div className="flex text-lg items-start space-x-4">
                    <img src="assets/line.png" alt="Natural Healing" className="h-8 w-8" />
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
                  <div className="pr-10">
                  <hr className="w-full border-gray-300 " />
                  </div>
                  <div className="flex text-lg items-start space-x-4">
                    <img src="assets/line.png" alt="Natural Healing" className="h-8 w-8" />
                    <div>
                      <h3 className="font-spartan font-semibold text-[#181818] text-base">
                        Personal Transformation:
                      </h3>
                      <p className="font-spartan text-[#181818] text-base">
                        Awaken a profound transformation in how you think, feel, and show up in the world.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-lexend pt-5 pb-5 flex text-[#1E1E1E] items-start">
                    Ideal For
                  </h2>

                  {/* Ideal For Items */}
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
                  <div className="pr-10">
                  <hr className="w-full border-gray-300 " />
                  </div>
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
                  <div className="pr-10">
                  <hr className="w-full border-gray-300 " />
                  </div>
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
                  <div className="pr-10">
                  <hr className="w-full border-gray-300 " />
                  </div>
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
                  <div className="pr-10">
                  <hr className="w-full border-gray-300 " />
                  </div>
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
                </div>
                <div className="space-y-4">
                <div className="pr-10">
                  <hr className="w-full border-black " />
                  </div>
                  <h2 className="text-4xl font-goudy pt-5 flex text-[#1E1E1E] items-start">
                    <span style={{ color: '#FF7A00' }}>✦</span>Retreat Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left md:w-3/4  pt-5 pb-5 rounded-lg ">
                    <div className="border-r border-gray-300 pr-6">
                      <span className="font-spartan text-semibold text-base text-[#181818]">Location</span>
                      <p className="font-spartan">20, Sands Lane, LA</p>
                    </div>
                    <div className="border-r border-gray-300 pr-6">
                      <span className="font-spartan text-semibold text-base text-[#181818]">Dates</span>
                      <p className="font-spartan">23rd - 30th July</p>
                    </div>
                    <div className="pr-6">
                      <span className="font-spartan text-semibold text-base text-[#181818]">Activity Descriptions</span>
                      <p className="font-spartan">Yoga+Meditation</p>
                    </div>

                    <div className="border-r border-gray-300 pr-6">
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

                  <div className="pr-10">
                  <hr className="w-full border-gray-300 " />
                  </div>
                  <h2 className="text-xl font-lexend">Price Breakdown</h2>
                  <h2 className="text-xl font-spartan font-semibold">105$ + Taxes</h2>
                  <p className="text-base text-[#181818] font-spartan">
                    Tax is additional. It includes shared room, 3 meals a day, basic facilities like mattress and washroom kit.
                  </p>

                  <div className="pr-10">
                  <hr className="w-full border-gray-300 " />
                  </div>
                  <h2 className="text-xl font-lexend">Accommodation & Logistics</h2>
                  <h2 className="text-base font-spartan font-semibold">Accommodation</h2>
                  <p className="text-base text-[#181818] font-spartan">
                    Shared room is included in the package. One can upgrade to private cabin with additional 10$ per night
                  </p>

                  <h2 className="text-base font-spartan font-semibold">Meals</h2>
                  <p className="text-base text-[#181818] font-spartan">
                    Satvik veg meals included.breakfast, lunch and early dinner.</p>

                  <h2 className="text-base font-spartan font-semibold">Transportation</h2>
                  <p className="text-base text-[#181818] font-spartan">
                    Not included.One can take the city transportation eg.bus, metro or tram from station ABC  </p>
                </div>

                <div className="pr-10">
                  <hr className="w-full border-gray-300 " />
                  </div>
                <h2 className="text-4xl font-goudy pt-5 flex text-[#1E1E1E] items-start">
                  <span style={{ color: '#FF7A00' }}>✦</span> The Curriculum
                </h2>
                <Accordion />
              
                <h2 className="text-4xl font-goudy pt-5 flex text-[#1E1E1E] items-start">
                  <span style={{ color: '#FF7A00' }}>✦</span> About Sadguru
                </h2>
                <img src="assets/retreatimg.png" alt="Description of the image" className="rounded-lg  w-full p-5 h-auto object-cover" />
                <p className="text-base text-[#4E4E4E] font-spartan p-5 pt-2  pb-0">
                  Sadhguru is a venerated yogi and visionary. Named one of India’s 50 most influential people, Sadhguru’s work has touched the lives of millions worldwide through his transformational programs.</p>
                <p className="text-base text-[#4E4E4E] font-spartan p-5 pb-0 pt-0">
                  Sadhguru has a unique ability to make the ancient yogic sciences relevant to contemporary minds. His approach does not ascribe to any belief system, but offers methods for self transformation that are both proven and powerful.</p>
                <p className="text-base text-[#4E4E4E] font-spartan p-5 pt-2 pb-0">
                  An internationally renowned speaker and author of the New York Times bestseller Inner Engineering: A Yogi’s Guide to Joy, Sadhguru has been an influential voice at major global forums including the United Nations and the World Economic Forum, addressing issues as diverse as socioeconomic development, leadership and spirituality.</p>
                <p className="text-base text-[#4E4E4E] font-spartan p-5 pt-2 pb-0">
                  He has also been invited to speak at leading educational institutions, including Oxford, London Business School, IMD, Stanford, Harvard, Yale, Wharton and MIT.</p>
                <p className="text-base text-[#4E4E4E] font-spartan p-5 pt-2">
                  In his first-ever Mindvalley program, Sadhguru presents his most beloved teachings on perhaps the most vital aspect of the human experience: the freedom from suffering, and the attainment of unconditional peace and joy.</p>
              </div>

              {/* Fixed Right Section */}
              <div className="pt-10 w-1/3">
                <div className=" bg-gray-100 p-5 rounded-lg shadow-md space-y-8">
                  {/* Heading */}
                  <h2 className="text-lg font-bold text-center leading-tight">
                    Embark on a profound adventure of discovery that reveals
                  </h2>

                  {/* Instructor Info */}
                  <div className="flex  justify-between space-x-2">
  <div className="flex items-center space-x-2">
    <img src="assets/pfp2.png" alt="Instructor" className="w-10 h-10 rounded-full" />
    <span className="font-medium text-gray-800">With Sadguru</span>
  </div>
  <div className="text-right">
    <span className="block text-2xl font-semibold">105$</span>
    <span className="block text-sm text-gray-500">+ Taxes</span>
  </div>
</div>


                  {/* Enroll Button */}
                  <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
                    Enroll Now
                  </button>

                  {/* Image Section */}
                  <div className="bg-white rounded-2xl">
                    <div className="rounded-t-sm overflow-hidden">
                      <img src="assets/retreat7.png" alt="Course Image" className="w-full rounded-t-sm" />
                    </div>

                    {/* Description */}
                    <p className="text-sm p-5 text-gray-600 leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>

                    {/* Instructor Details */}
                    <div className="font-semibold text-black p-5">
                      Preeti Mishra
                      <p className="text-sm text-gray-500 ">Living in alignment</p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-center space-x-4 items-center">
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

                  {/* Chat Section */}
                  <div className="flex justify-between items-center mt-4 bg-black text-white rounded-lg p-3">
                    <button className="text-sm font-medium">
                      Have some doubts?
                    </button>
                    <button className="text-sm font-medium flex items-center space-x-1">
                      <span>Chat With Us</span>
                      <i className="fa-brands fa-whatsapp w-5 h-5 "></i>
                    </button>
                  </div>

                </div>
              </div>

            </div>
            <div className="pt-20">
            <div className="">
                  <hr className="w-full border-black " />
                  </div>
              <h2 className="text-4xl font-goudy pt-5 flex text-[#1E1E1E] pt-10 items-start">
                <span style={{ color: '#FF7A00' }}>✦</span> FAQ
              </h2>
              <Accordion2></Accordion2>
            </div>
            <div className="pt-10">
            <div className="">
                  <hr className="w-full border-black " />
                  </div>

              <div className="w-full mx-auto py-8">
                <h2 className="text-center text-[#1E1E1E] text-4xl font-goudy mb-8">Your Holistic Wellness Journey</h2>
                <div className="flex justify-between w-full px-32">
      <span className="text-lg font-semibold">For Soul</span>
      <span className="text-lg font-semibold">For Body</span>
      <span className="text-lg font-semibold">For Mind</span>
    </div>
                <div className="custom-dashed-line my-4 pb-5"></div>


                <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8">
                  {/* For Soul */}
                  <div className="bg-white shadow-lg rounded-lg ">

                    <div className="relative mb-4">
                      <img src="assets/retreat5.png" alt="A Yogi's Guide to Joy" className="w-full h-full " />
                    </div>
                    <div className="pl-5 pt-3 ">
                      <h4 className="text-lg p-3 text-xs rounded-sm text-[#FB6A00] font-semibold font-spartan mb-2 bg-[#FFC700]/[0.32] inline-block">
                        SPIRITUAL WELLNESS
                      </h4>
                    </div>
                    <h4 className=" font-goudy text-xl pt-5 pl-5 mb-2">A Yogi's Guide to Joy</h4>
                    <div className="flex pt-5 items-start mb-4">
                      <img
                        src="assets/pfp.png"
                        alt="Event Image"
                        className="w-15 h-15 pl-5" />
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
                  <div className="bg-white shadow-lg rounded-lg ">

                    <div className="relative mb-4">
                      <img src="assets/retreat4.png" alt="A Yogi's Guide to Joy" className="w-full h-full " />
                    </div>
                    <div className="pl-5 pt-3 ">
                      <h4 className="text-lg p-3 text-xs rounded-sm text-[#88009E] font-semibold font-spartan mb-2 bg-[#C6A5EA]/[0.37] inline-block">
                        EXERCISE WELL
                      </h4>
                    </div>
                    <h4 className=" font-goudy text-xl pt-5 pl-5 mb-2">The Way of the Kettlebell</h4>
                    <div className="flex pt-5 items-start mb-4">
                      <img
                        src="assets/pfp.png"
                        alt="Event Image"
                        className="w-15 h-15 pl-5" />
                      <p className="text-sm text-gray-600 pl-3">
                        With Cory Muscara, Omega<br />
                        Offline - NewYork, Jun 28th to 30th, 2024,
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <a href="#" className="text-black pl-5 pt-5 pb-5 font-medium font-spartan text-base">Know More →</a>
                      <button className="text-gray-400 hover:text-gray-600 pr-5"><i className="fa-regular fa-heart"></i></button>
                    </div>
                  </div>

                  {/* For Mind */}
                  <div className="bg-white shadow-lg rounded-lg ">

                    <div className="relative mb-4">
                      <img src="assets/retreat6.png" alt="A Yogi's Guide to Joy" className="w-full h-full " />
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

                    <h4 className=" font-goudy text-xl pt-5 pl-5 mb-2">The Champion Mindset</h4>
                    <div className="flex pt-5 items-start mb-4">
                      <img
                        src="assets/pfp.png"
                        alt="Event Image"
                        className="w-15 h-15 pl-5" />
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

            


              <h2 className="text-[#1E1E1E]  text-center text-4xl  font-goudy pt-10"> Latest Blogs </h2>
              <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 ">

                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img src="assets/grid1.png" alt="Image description" className="w-full h-60 object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-lexend font-light mb-2">Lorem Ipsum is simply dummy text <br />of the printing</h2>
                    <p className="text-[#5B5C66] text-base font-spartan mb-4">By Will Smith • Omega</p>
                    <div className="flex justify-between items-center">
                      <a href="#" className="text-black font-lexend  pt-10 text-base">Read <span className="ml-1">→</span></a>

                    </div>
                  </div>
                </div>



                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img src="assets/grid2.png" alt="Image description" className="w-full h-60 object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-lexend font-light mb-2">Lorem Ipsum is simply dummy text <br />of the printing</h2>
                    <p className="text-[#5B5C66] text-base font-spartan mb-4">By Will Smith • Omega</p>
                    <div className="flex justify-between items-center">
                      <a href="#" className="text-black font-lexend  pt-10 text-base">Read <span className="ml-1">→</span></a>

                    </div>
                  </div>
                </div>

                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img src="assets/grid3.png" alt="Image description" className="w-full h-60 object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-lexend font-light mb-2">Lorem Ipsum is simply dummy text <br />of the printing</h2>
                    <p className="text-[#5B5C66] text-base font-spartan mb-4">By Will Smith • Omega</p>
                    <div className="flex justify-between items-center">
                      <a href="#" className="text-black font-lexend  pt-10 text-base">Read <span className="ml-1">→</span></a>

                    </div>
                  </div>
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
