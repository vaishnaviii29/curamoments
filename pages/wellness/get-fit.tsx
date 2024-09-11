import React from "react";
import GetFit from "@/components/Wellness/get-fit";
import GetFit2 from "@/components/Wellness/get-fit-sm";


const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
     <div className="hidden md:block">
        <GetFit/>
      </div>
      <div className="block md:hidden">
        <GetFit2/>
      </div>

    </div>
  );
};

export default LandingPage;