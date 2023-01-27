import React from "react";

import CompanyLogo from "../../images/CompanyLogo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={CompanyLogo} alt="logo" className="w-64" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
      
      <div className={`mx-4 cursor-pointer `}>
          <a href="https://mumbai.polygonscan.com/" rel=''> Transactions </a>
        </div>
      <div className={`mx-4 cursor-pointer `}>
          <a href="https://metamask.io/" rel=''> MetaMask </a>
        </div>
      <div className={`mx-4 cursor-pointer `}>
          <a href="https://remix-project.org/" rel=''> Remix </a>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-black text-sm text-center">Reach out to us and get to know more!</p>
      <p className="text-black text-sm text-center font-medium mt-2">kanishkkhurana152@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-black text-left text-xs">@KanishkKhurana_</p>
      

      {/* <a href="https://github.com/KanishkKhurana/Lumos-Labs-Hiring-Project"><p className="text-white text-right text-xs">Github Repo</p></a> */}
    </div>
  </div>
);

export default Footer;