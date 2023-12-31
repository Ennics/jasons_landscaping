import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services/Services'
import Demolition from './components/Services/Demolition'
import SitePrep from './components/Services/SitePrep'
import SepticSystems from './components/Services/SepticSystems'
import RoadConstruction from'./components/Services/RoadConstruction'
import FlatbedAndTowing from './components/Services/FlatbedAndTowing'
import PrivacyPolicy from './components/PrivacyPolicy'
import Depot from './components/Depot'
import Careers from './components/Careers'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/services/site-prep" element={<SitePrep/>} />
                <Route path="/services/demolition" element={<Demolition/>} />
                <Route path="/services/septic-systems" element={<SepticSystems/>} />
                <Route path="/services/road-construction" element={<RoadConstruction/>} />
                <Route path="/services/flatbed-and-towing" element={<FlatbedAndTowing/>} />
                <Route path="/depot" element={<Depot/>} />
                <Route path="/careers" element={<Careers/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;