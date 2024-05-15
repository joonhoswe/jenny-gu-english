import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade as Hamburger } from 'hamburger-react';
import Login from '@components/login';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const navLinks = [
    { title: "제니쌤 소개" },
    { title: "프로그램 설명" },
    { title: "수강후기" },
    { title: "수강신청" },
    { title: "FAQ" }
  ];

  const sidebarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  return (
    <div className="flex items-center justify-between w-full h-14 sticky top-0 z-50 text-black bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <div className='items-center justify-between w-full h-14 hidden md:flex'>
        
        <div className="flex items-center justify-center space-x-6 ml-4">
        <p> Logo </p>
          {navLinks.map((link) => (
            <button key={link.title} className="">
              {link.title}
            </button>
          ))}
        </div>
        <div className='mr-4 flex items-center justify-center space-x-6'>
            <button> 장바구니 </button>
            {/* <button> 로그인 / 회원가입 </button> */}
            <Login />
        </div>
      </div>

      <div className='flex items-center justify-between w-full h-14 md:hidden'>

        <p className='ml-4'> Logo </p>
        {/* Mobile NavBar Icon */}
        <Hamburger rounded size={24} duration={0.4} distance='lg' hideOutline={false} onToggle={toggleMenu} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              transition={{ duration: 0.4 }}
              className="z-20 pt-12 pb-28 absolute top-full right-0 h-screen w-1/3 bg-gray-300 flex flex-col justify-between"
            >
              {/* Website Section Links */}
              <div className='flex flex-col space-y-6'>
                {navLinks.map((link) => (
                  <button key={link.title} className="">
                    {link.title}
                  </button>
                ))}
              </div>

              <div className='flex flex-col space-y-6'>
                  <button> 장바구니 </button>
                  <button> 로그인/회원가입 </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence> 
      </div>
    </div>
  );
};
