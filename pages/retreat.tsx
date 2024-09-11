import React from "react";
import Retreat1 from "@/components/Retreat/retreat";
import Retreat2 from "@/components/Retreat/retreat-sm";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Retreat1 will only be visible on medium screens and larger */}
      <div className="hidden md:block">
        <Retreat1 />
      </div>
      {/* Retreat2 will be visible on mobile screens only */}
      <div className="block md:hidden">
        <Retreat2 />
      </div>
    </div>
  );
};

export default LandingPage;
