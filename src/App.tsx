import { LogIn } from 'lucide-react'
import { Banner } from './components/Banner'
import { CallNFT } from './components/CallNft'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HotColletions } from './components/HotColletions'
import { Steps } from './components/StepsNft'
import { TopCreated } from './components/TopCreated'
import { TrendingCategory } from './components/TrendingCategory'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from './components/Login/login'
import { Layout } from './components/Layout'


function App() {

  return (
    <div className='h-screen w-full '>

      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
