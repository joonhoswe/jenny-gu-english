'use client';
import React from 'react';
import Home from './home';
import { useRef } from 'react';

const page = () => {

  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const WorkRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  return (
   <div className='bg-gray-900'>
        {/* <Navbar HomeRef = {HomeRef} AboutRef = {AboutRef} WorkRef = {WorkRef} ProjectsRef = {ProjectsRef} ContactRef = {ContactRef}/> */}
        <Home ref = {HomeRef} AboutRef = {AboutRef} ProjectsRef = {ProjectsRef}/>
        {/* <About ref = {AboutRef}/> */}

        {/* <Work ref = {WorkRef}/> */}

        {/* <Projects ref = {ProjectsRef}/>
        <Contact ref = {ContactRef}/> */}
  </div>
  );
};

export default page;
