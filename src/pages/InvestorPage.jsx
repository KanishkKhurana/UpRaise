import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Navbar from '../Components/Navbar';
import {ethers} from 'ethers';
const {ethereum} = window;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StartupCard(props){
    const [currentAccount, setCurrentAccount] = useState('')

    const ConnectWallet = async () => {
        if(!ethereum) return alert('Please install metamask');
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        console.log(accounts[0]);
        setCurrentAccount(accounts[0]);
    }

    const handleSubmit = async (e) => {
        await ConnectWallet();
        e.preventDefault();
        await sendTransaction();
        toast.success('Transaction Complete',"success", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    const abi = [
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address"
                }
            ],
            "name": "send_ETH",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balanceAccount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    const contractAddress = "0xfef458c24f5c11d30d6b9179a1b0c7eea2e8ab84";

    const getEthereumContract = () => {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const transactionContract = new ethers.Contract(contractAddress, abi, signer);
    
        // console.log(
        //     provider, 
        //     signer,
        //     transactionContract
        // )
    
        return transactionContract;
    }

    const sendTransaction = async () => {
        try{
            if(!ethereum) return alert('Please connect to a metamask wallet');
            // const { addressTo, amount, keyword, message } = formData;
            const transactionContract= getEthereumContract();
            const parsedAmount = ethers.utils.parseEther("0.02");

            await ethereum.request({ //used to send ethereum from one address to another
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: props.wallet,
                    gas:'0x5208', //values in ETH network are in hexadecimal
                    value:parsedAmount._hex
                }]
            })

            const transactionHash = await transactionContract.send_ETH(props.wallet);
            // setIsLoading(true);
            // console.log('Loading - ${transactionHash.hash}');
            // setIsLoading(false);
            console.log(`Successfully Loaded - ${transactionHash.hash}`);
            
            // const transactionCount = await transactionContract.getTransactionCount();
            // settransactionCount(transactionCount.toNumber());


        }catch(error){
            console.log(error);
            throw new error('No ethereum object');
        }
    }

    return(
        <div className='p-3 border border-gray-800 m-3 rounded-lg white-glassmorphism1'>
            <div className='flex justify-between pb-3 border-b border-b-black'>
                <h1 className='text-2xl font-semibold uppercase'>{props.company}</h1>
                <button className='bg-orange-500 px-3 py-2 rounded-lg border border-orange-300 text-white font-bold' onClick={handleSubmit}>Invest</button>
            </div>

            <div className='pt-3'>
                <p className='text-xs'>Who's the Founder ?</p>
                <h3 className='text-lg pb-2 font-medium'>{props.name}</h3>

                <p className='text-xs'>What's the company email ?</p>
                <h3 className="text-lg pb-2 font-medium">{props.email}</h3>

                <p className='text-xs'>What is the startup about ?</p>
                <p className="text-lg pb-2 font-medium">{props.message}</p>
            </div>
        </div>
    )
}

export default function InvestorPage() {
    const [startupDetails, setStartupDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const GetAll = () => {
        var data = JSON.stringify({
            "collection": "users",
            "database": "sample",
            "dataSource": "Cluster0",
            "filter": {}
        });
                   console.log(data) 
        var config = {
            mode: 'no-cors',
            method: 'post',
            url: 'https://data.mongodb-api.com/app/data-bljci/endpoint/data/v1/action/find',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Request-Headers': '*',
              'api-key': '64EyRmXBAvqMZx7JeF5hj75YKI9KGym5r3Ic0zTAwAy4VU8HMut3BUo7hQkzDaEn',
            },
            data: data
        };
                
    axios(config)
        .then(function (response) {
            console.log(response.data.documents);
            setStartupDetails(response.data.documents)
            console.log(startupDetails)
            setIsLoading(false)
        })
        .catch(function (error) {
            console.log(error);
        });
      }

    useEffect(() => {
        GetAll()
    }, [])

  return (
    <div className='gradient-bg-welcome xl:h-screen w-screen'>
        <Navbar/>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                />
        <div className='text-center'>
            <h1 className='text-3xl pt-8 pb-4 font-bold'>Investor Dashboard</h1>
            <p className='text-lg font-medium px-2'>Checkout the various startups enlisted with us and what they are making! if you believe in them, invest right away!</p>
        </div>
        <div className='pt-6 mx-2 grid grid-cols-1 xl:grid-cols-4 '>
            {startupDetails?.map((startup,i) => {
                return(
                    <StartupCard company={startup.company} email={startup.email} message={startup.message} name={startup.name} wallet={startup.wallet} />
                )
            })}

        </div>
        

        
        

    </div>
  )
}
