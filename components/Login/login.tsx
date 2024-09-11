import React, { useState, useEffect } from "react";

const WellnessPathLogin = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(23); // Initial timer value

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  return (

  <>
    <div className="hidden sm:block">
      <div className="flex h-screen">
        {/* Left side with the image */}
        <div className="hidden md:flex w-2/3 h-full p-10  pr-0">
          <img
            src="../assets/login.png"
            alt="Holistic Wellness"
            className="object-cover rounded-3xl h-full w-full" />
        </div>
        {/* Right side with the form */}
        <div className="flex flex-col justify-center w-full md:w-3/4 p-8 pl-2 bg-white">
          <div className=" p-10 mx-auto">
            <div className="flex items-center justify-between p-4">

              <div className="flex items-center">


                <img
                  src="../assets/logo.png"
                  alt="logo"
                  className="object-contain h-20 w-20" />
                <div className="ml-2">
                  <p className="font-serif text-lg">cura</p>
                  <p className="font-serif text-lg">moments</p>
                </div>
              </div>


              <div className="text-6xl text-gray-800 font-light cursor-pointer">
                &times;
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-goudy ">Login to holistic wellness</h1>

            </div>
            <p className="text-gray-600 font-spartan text-base mb-6">
              Holistic health goes beyond the plate! Explore personalized plans for body, mind, and soul emphasizes the holistic approach that goes beyond just physical health.
            </p>

            {/* Full Name (Read Only) */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full border border-[#070707] rounded-full py-3 px-4"
                placeholder="Preeti Chopra"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>

            {/* Phone Number and Send OTP */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <div className="flex">
                <div className="flex items-center border border-black border-r-0 rounded-l-full">
                  <select className="border-black py-3 px-4 rounded-full outline-none">
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                  </select>
                </div>
                <div className="relative flex-grow">
                  <input
                    type="text"
                    className="w-full border border-black border-l-0 rounded-r-full py-3 px-4 pr-24"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9892 989 989" />
                  <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white rounded-full px-6 py-3"> {/* Adjusted padding */}
                    Send OTP
                  </button>
                </div>
              </div>
            </div>




            {/* OTP Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter Verification Code</label>
              <input
                type="text"
                className="w-full border border-black rounded-full py-3 px-4"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="0-0-0-0" />
              <p className="text-gray-500 text-sm mt-2">
                Verification code sent on ******89@gmail.com
              </p>
            </div>

            {/* Resend Code and Timer */}
            {/* <div className="flex justify-between items-center mb-6">
      <button
        className="text-black text-lg flex items-center"
        disabled={resendTimer > 0}
        onClick={() => setResendTimer(23)}
      >
        <span className="mr-2">&#x21bb;</span>
        Resend Code {resendTimer < 10 ? `0${resendTimer}` : resendTimer}
      </button>
    </div> */}

            {/* Continue Button */}
            <button className="w-1/4 bg-black text-white py-3 rounded-full font-semibold">
              Continue
            </button>
          </div>
        </div>
      </div>
   </div>
  </>
  );
};

export default WellnessPathLogin;
