import React from "react";
import Main from "@/components/Home/main";
import Main2 from "@/components/Home/main-sm";
import { MdAllInbox } from "react-icons/md";


const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
       <div className="hidden md:block">
        <Main />
      </div>
      <div className="block md:hidden">
        <Main2 />
      </div>
    </div>
  );
};

export default LandingPage;
