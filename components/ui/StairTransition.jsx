"use client"

import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from './Stairs'; // Ensure this path is correct

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className='fixed top-0 left-0 z-0 flex w-screen h-screen pointer-events-none'>
            <Stairs />
          </div>
          
          <motion.div className="fixed top-0 w-screen h-screen pointer-events-none bg-primary"
          initial={{opacity: 1}}
          animate={{
            opacity:0,
            transition:{delay:1, duration:0.4, ease:"easeInOut"},
          }} 
          />         
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
