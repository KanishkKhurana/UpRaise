import React, {useState} from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import CompanyLogo from '../../images/CompanyLogo.png'
import { Link } from 'react-router-dom'

const NavbarItem = ({title, classProps}) => (
        <a href={title === " Transactions" ? "https://mumbai.polygonscan.com/" : "hi"}>
        <li className={`mx-4 cursor-pointer ${classProps}`}>
          {title}
        </li>
        </a>
    
);

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-1">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={CompanyLogo} alt="logo" className="w-3/4 cursor-pointer" />
      </div>
      <ul className="text-blue-900 font-medium md:flex hidden list-none flex-row justify-evenly items-center flex-initial">
      <li className={`mx-4 cursor-pointer `}>
          <Link to="/invest" rel=''> Invest </Link>
        </li>
      <li className={`mx-4 cursor-pointer `}>
          <a href="https://mumbai.polygonscan.com/" rel=''> Transactions </a>
        </li>
      <li className={`mx-4 cursor-pointer `}>
          <a href="https://metamask.io/" rel=''> MetaMask </a>
        </li>
      <li className={`mx-4 cursor-pointer `}>
          <a href="https://remix-project.org/" rel=''> Remix </a>
        </li>
        {/* <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Login
        </li> */}
      </ul>
      <div className="flex relative">
      {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={()=> setToggleMenu(false)}/></li>
              <li className={`mx-4 cursor-pointer `}>
          <a href="https://mumbai.polygonscan.com/" rel=''> Transactions </a>
        </li>
      <li className={`mx-4 cursor-pointer `}>
          <a href="https://metamask.io/" rel=''> MetaMask </a>
        </li>
      <li className={`mx-4 cursor-pointer `}>
          <a href="https://remix-project.org/" rel=''> Remix </a>
        </li>

          </ul>
        )}
      </div>

    </nav>
  );
};
