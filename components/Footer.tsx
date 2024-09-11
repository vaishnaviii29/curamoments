import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white w-full ">
        <div className="p-20 pb-5 pt-10">
  <hr className="border-t border-gray-600" />
</div>

      <div className="p-20 pb-5 pt-5 flex flex-col lg:flex-row justify-between items-center lg:items-start  lg:space-y-0">
      <div className="flex items-center lg:items-start">
  <img
    src="../assets/logo.png" // replace with your logo path
    alt="Cura Moments"
    className="mr-4  pt-3 hidden sm:block" // Add margin-right to create space between image and text
  />
  <p className="text-4xl font-regular font-goudy hidden sm:block">
    cura <br /> moments
  </p>
</div>


        <div className="flex space-x-8 text-lg font-lexend">
          <div className="space-y-2">
            <h5 className="text-gray-400">Company</h5>
            <a href="#" className="text-black block">About</a>
            <a href="#" className="text-black block">Career</a>
          </div>
          <div className="space-y-2">
            <h5 className="text-gray-400">Wellness</h5>
            <a href="#" className="text-black block">Get Fit</a>
            <a href="#" className="text-black block">Nourish Well</a>
            <a href="#" className="text-black block">Sleep Well</a>
            <a href="#" className="text-black block">Manage Stress</a>
            <a href="#" className="text-black block">Manage Conditions</a>
          </div>
          <div className="space-y-2">
            <h5 className="text-gray-400">Alternative Medicine</h5>
            <a href="#" className="text-black block">Ayurveda</a>
            <a href="#" className="text-black block">Naturopathy</a>
            <a href="#" className="text-black block">Homeopathy</a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-start p-20 pt-2 pb-10 text-base font-lexend space-y-4">
  <div className="flex space-x-6 pb-5">
    <a href="#" aria-label="Facebook">
      <i className="fab fa-facebook fa-lg"></i>
    </a>
    <a href="#" aria-label="Twitter">
      <i className="fab fa-twitter fa-lg"></i>
    </a>
    <a href="#" aria-label="LinkedIn">
      <i className="fab fa-linkedin fa-lg"></i>
    </a>
    <a href="#" aria-label="Instagram">
      <i className="fab fa-instagram fa-lg"></i>
    </a>
    <a href="#" aria-label="YouTube">
      <i className="fab fa-youtube fa-lg"></i>
    </a>
  </div>
  <div className="flex space-x-4">
    <a href="#" className="hover:underline">Privacy policy</a>
    <a href="#" className="hover:underline">Terms of use</a>
    <a href="#" className="hover:underline">Money Back Guarantee</a>
  </div>
</div>

    
    </footer>
  );
};

export default Footer;
