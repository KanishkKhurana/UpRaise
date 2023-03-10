import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism1 p-3 m-2 cursor-pointer w-full hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-black text-lg">{title}</h3>
      <p className="mt-1 text-black text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-black text-3xl sm:text-5xl py-2 text-gradient ">
          solutions for your startups
          <br />
          that we continue to improve
        </h1>
        <p className="text-left my-2 text-black font-light md:w-9/12 w-11/12 text-base">
          The best choice for retail investors to look into growing  startups in and invest in them using cryptocurrency!
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security guarantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Thorough Research"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Best in class research to provide your startup the best mentorship."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest Funding"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Speed is guranteed. We are the fastest startup funding platform."
        />
      </div>
    </div>
  </div>
);

export default Services;