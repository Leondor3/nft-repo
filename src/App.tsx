
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from './components/Login/login'
import { Layout } from './components/Layout'
import { NotFound } from './components/NotFound'


function App() {


  return (
    <div className='h-screen w-full '>

      <Router>
        <Routes>
          <Route  path="/" element={<Layout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
