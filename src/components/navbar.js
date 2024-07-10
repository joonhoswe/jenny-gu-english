import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react"; 
import { motion, AnimatePresence } from 'framer-motion';
import { Fade as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Login from '@components/login';
import Link from 'next/link';
import cart from '../assets/shopping_cart.png';
import notLoggedIn from '../assets/notLoggedIn.png';


export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const { isAuthenticated } = useAuth0();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const navLinks = [
    { title: "Logo / 홈", path: "/home"},
    { title: "제니쌤 소개", path: "/home" },
    { title: "프로그램 설명", path: "/home" },
    { title: "수강후기", path: "/home" },
    { title: "수강신청", path: "/home" },
    { title: "FAQ", path: "/faq"}
  ];

  const sidebarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  return (
    <div className="flex items-center justify-between w-full h-14 sticky top-0 z-50 text-black bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <div className='items-center justify-between w-full h-14 hidden md:flex'>
        
        <div className="flex items-center justify-center space-x-6 ml-4">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.path} className="transition duration-300 ease-in-out hover:font-bold hover:text-green-150">
              {link.title}
            </Link>
          ))}
        </div>
        <div className='mr-4 flex items-center justify-center space-x-6'>
            {/* <div className='flex flex-row space-x-1'>
              <button className='transition duration-300 ease-in-out hover:font-bold hover:text-green-150'> 장바구니 </button>
              <Image src={cart} alt='cart' className='w-6 h-6'/>
            </div> */}
            
            <div className='flex flex-row space-x-1'>
              <Login />
              {
                isAuthenticated ? (
                  <></>
                ) : (
                  <Image src={notLoggedIn} alt='Not Logged In' className='w-6 h-6' />
                )
              }
              
            </div>
        </div>
      </div>

      <div className='flex items-center justify-between w-full h-14 md:hidden'>

        <Link href='/home' className='ml-4 text-sm transition duration-300 ease-in-out hover:font-bold hover:text-green-150'> Logo / 홈 </Link>
        <div className='flex items-center flex-row'>

            {/* <div className='flex flex-row space-x-1'>
              <button className='transition duration-300 ease-in-out hover:font-bold hover:text-green-150'> 장바구니 </button>
              <Image src={cart} alt='cart' className='w-6 h-6'/>
            </div> */}
            <div className='flex flex-row space-x-1'>
              <Login />
              {
                isAuthenticated ? (
                  <></>
                ) : (
                  <Image src={notLoggedIn} alt='Not Logged In' className='w-6 h-6' />
                )
              }
              
            </div>
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
                className="z-20 pt-12 pb-28 absolute top-full right-0 h-screen w-full bg-gray-300 flex flex-col justify-between"
              >
                {/* Website Section Links */}
                <div className='flex flex-col space-y-6'>
                  {navLinks.map((link) => (
                    <button key={link.title} className="">
                      {link.title}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence> 
        </div>
        
      </div>
    </div>
  );
};
