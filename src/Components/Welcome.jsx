import React,{useState} from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
// var axios = require('axios');
import axios from 'axios';
let {ethereum} = window;
import {Link} from "react-router-dom";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border border-gray-600 text-sm font-medium text-black";


const Welcome = () => {
  const [Name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [wallet, setWallet] = useState("")

  const ConnectWallet = async () =>{
    if(!ethereum){
      alert("Please install metamask")
    }
    const accounts = await ethereum.request({method: 'eth_requestAccounts'})
    console.log(accounts[0])
    setWallet(accounts[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Name:",Name)
    console.log("Company:",company)
    console.log("Email:",email)
    console.log("Message:",message)
  


var data = JSON.stringify({
    "collection": "users",
    "database": "sample",
    "dataSource": "Cluster0",
    "document": {
        "name": Name,
        "company": company,
        "email": email,
        "message": message,
        "wallet": wallet,
    }
});
           console.log(data) 
var config = {
    mode: 'no-cors',
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-bljci/endpoint/data/v1/action/insertOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '64EyRmXBAvqMZx7JeF5hj75YKI9KGym5r3Ic0zTAwAy4VU8HMut3BUo7hQkzDaEn',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        // console.log(error);
    });
  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-12 py-8 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-2xl sm:text-5xl text-black font-semibold py-3">
            Support Startups <br />across India
          </h1>
          <p className="text-left mt-5 text-black font-normal md:w-9/12 w-11/12 text-base">
            Get in touch with the best investors and raise funds to scale your startup in all seasons.
          </p>
     
            {/* <button
              type="button"
              
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              {/* <AiFillPlayCircle className="text-white mr-2" /> */}
              {/* <p className="text-white text-base font-semibold">
                Connect Wallet
              </p> */}
            { /* </button> */}
      

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Mentorship
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Venture Capitalists
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Networking
            </div>
          </div>
          <p className="text-left mt-5 text-black font-normal w-11/12 text-base ">
            <h3 className="text-xl font-semibold pb-2">For Startup Founders</h3>
          Simply fill the form and we will get back to you as soon as possible.
          <br />
          Not only will we help you get connected to amazing mentors in the industry, <br /> but we will also help you raise funds from the best investors in the country.
          <br />
          <br />
          <h3 className="text-xl font-semibold pb-2">For Citizen Investors</h3>
          We have also opened our platform to retail investors! <br /> You can now invest in startups and earn a return on your investment.
          </p>
          <a href="/invest" className="px-3 py-2 bg-pink-600 font-bold text-white rounded-xl mt-3 hover:bg-pink-400">Click here to Invest</a>
          <br />
        </div>
          
        <div className="white-glassmorphism1 p-10">
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {(wallet.substring(0,7) + "..." + wallet.substring(28)) || "Your Wallet Address"}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                {company || "Your Company Name"}
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <input className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" placeholder="Full Name" name="addressTo" type="text" onChange={(e) => setName(e.target.value)} />
            <input className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" placeholder="Email" name="addressTo" type="text" onChange={(e) => setEmail(e.target.value)} />
            <input className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" placeholder="Company Name" name="amount" type="text" onChange={(e) => setCompany(e.target.value)} />
            <input className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" placeholder="What is your startup about" name="message" type="text" onChange={(e) => setMessage(e.target.value)} />
            <button className="bg-orange-600 px-3 py-2 rounded-lg my-3 text-white font-medium hover:bg-orange-400" onClick={ConnectWallet} >Connect Wallet </button>
            <div className="h-[1px] w-full bg-gray-400 my-2" />

            
                <button type="button" className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#6f8fe1] rounded-full cursor-pointer" onClick={handleSubmit}>
                  Done
                </button>
              
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;