import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

// const Navbar = () => {
function Navbar() {

  const [sideNav, setSideNav] = useState(false);

  const handleSideNav = () => {
    setSideNav(!sideNav);
  }

  return (
    // <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
    <div className='flex items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Resources</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleSideNav} className='block md:hidden'>
            {sideNav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <ul className={sideNav ? 'fixed left-0 top-0 min-w-[45%] sm:min-w-[30%] h-full md:hidden border-r border-r-neutral-800 bg-[#000300]  ease-in-out duration-1000 uppercase' : 'hidden ease-in-out duration-1000 uppercase'}> {/* ease-in-out duration-1000 fixed left-[-100%] uppercase */}
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 mt-7.5'>REACT.</h1>
            <li className="p-4 border-b border-neutral-800 pl-6.5">Home</li>
            <li className="p-4 border-b border-neutral-800 pl-6.5">Company</li>
            <li className="p-4 border-b border-neutral-800 pl-6.5">Resources</li>
            <li className="p-4 border-b border-neutral-800 pl-6.5">About</li>
            <li className="p-4 border-b border-neutral-800 pl-6.5">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar;
