import React from "react";
import Login from "@/components/Login/login";
import Login2 from "@/components/Login/login-sm";




const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
   <div className="hidden md:block">
   <Login />
   </div>

   <div className="block md:hidden">
  <Login2/>
   </div>
      

    </div>
  );
};

export default LandingPage;