import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/assets/logo1.png';


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className={'relative flex justify-between items-center px-5 sm:px-15 py-4'} style={{ opacity: 1, transition: 'opacity 0.3s ease' }}>
        <div>
        <Link href="/">
        <div className='flex items-center gap-3 pl-8 md:pl-20 sm:pl-2'>
  <Image src={Logo} alt="Logo" width={150} height={100} />

</div>

</Link>

        </div>
        <nav className="hidden md:flex space-x-8 pr-20 items-center font-inter relative">
          
          <Link href="/blogs" className="text-[1E1E1E] text-base hover:text-gray-900 font-lexend">Wisdom</Link>
          <Link href="/wellness" className="text-[1E1E1E] text-base hover:text-gray-900 font-lexend" >Wellness</Link>
          <Link href="/login" className="text-[1E1E1E] text-base hover:text-gray-900 font-lexend" >Login</Link>
          <Link href="/quiz" className="text-white p-2 px-5 text-base rounded-full font-lexend bg-[#FF7A00]">Guide Me</Link>

        </nav>
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <><nav>
          

            <Link href="/blogs" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">Wisdom</Link>
            <Link href="/wellness" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">Wellness</Link>
            <Link href="/login" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">My Account</Link>

          </nav></>
      )}
    </>
  );
};

export default Header;