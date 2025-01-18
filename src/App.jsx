import "./styles/App.css"
import { BasicExample } from './components/Navbar'
import { Home } from './components/Home'
import { Footer } from "./components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AllRecetas } from "./components/AllRecetas"
import { RecetasDetailsContainer } from "./components/RecetasDetailsContainer"
import { ScrollToTop } from "./components/ScrollToTop"
export function App() {


  return (

    <BrowserRouter>
      <BasicExample />
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/recetas' element={<AllRecetas />} />
        <Route path="/categoria/:cid" element={<AllRecetas />} />
        <Route path="/recetas/:idc" element={<RecetasDetailsContainer />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  )
}
