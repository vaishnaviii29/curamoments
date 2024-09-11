import React from "react";
import NourishWell from "@/components/Wellness/nourish-well";
import NourishWell2 from "@/components/Wellness/nourish-well-sm";


const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="hidden md:block">
        <NourishWell/>
      </div>
      <div className="block md:hidden">
        <NourishWell2/>
      </div>
    </div>
  );
};

export default LandingPage;