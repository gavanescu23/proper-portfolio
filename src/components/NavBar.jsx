import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { BiLastPage } from 'react-icons/bi';

const NavBar = () => {

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if( latest > previous) {
      setHidden(true)
    }
    else {
      setHidden(false)
    }
  })

  const [hidden, setHidden] = useState(false);

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    },
    
  ]
  return (
    <motion.div 
    variants={{
      visible: { y: 0},
      hidden: { y: "-100%"},
    }}
    animate={hidden ? "hidden" : "visible"}
    transition={{duration: 0.35, ease: "easeInOut"}}
    className="flex justify-between w-full h-20 items-center px-6 fixed bg-bodyColor text-white  z-50">
      <div className="font-logofont">
        <h1 className='text-5xl ml-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-cyan-300 to-purple-500'>Găvă.</h1>
      </div>
      <ul className='text-2xl font-bodyfont capitalize hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer text-gray-500 hover:scale-105 hover:text-gray-200 duration-200'>
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 pr-4 text-gray-500 md:hidden">{nav ? <FaTimes size={30} /> : <FaBars size={30} />}</div>

      {nav && (
        <div className="flex flex-col justify-center font-bodyfont items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-gray-800 to-gray-700 rounded-lg">
          <ul className="items-center ">
            {links.map(({ id, link }) => (
              <li key={id} 
              className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-105 hover:text-gray-200 duration-200'>
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div >
  )
}

export default NavBar