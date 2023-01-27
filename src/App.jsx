
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import Transactions from './Components/Transactions'
import Welcome from './Components/Welcome'
import HomePage from './pages/HomePage'
import InvestorPage from "./pages/InvestorPage";

const App = () => {
  return (
<div>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/invest" element={<InvestorPage/>} />
  </Routes>
</div>
  )
}

export default App
