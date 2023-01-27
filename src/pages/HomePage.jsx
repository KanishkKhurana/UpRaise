import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Services from '../Components/Services'
import Transactions from '../Components/Transactions'
import Welcome from '../Components/Welcome'

export default function HomePage() {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/>
    </div>
    <Services/>
    {/* <Transactions/> */}
    <Footer />
    </div>
  )
}
