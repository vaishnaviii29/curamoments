import React from "react";
import Verticals from "@/components/Wellness/wellness";
import Verticals2 from "@/components/Wellness/wellness-sm";


const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
        <div className="hidden md:block">
        <Verticals />
      </div>
      <div className="block md:hidden">
      <Verticals2 />
      </div>
    </div>
  );
};

export default LandingPage;