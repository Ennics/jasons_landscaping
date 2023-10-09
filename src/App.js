import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Demolition from './components/Demolition'
import SitePrep from './components/SitePrep'
import SepticSystems from './components/SepticSystems'
import RoadConstruction from'./components/RoadConstruction'
import FlatbedAndTowing from './components/FlatbedAndTowing'
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
                <Route path="/depot/sod" element={<Depot/>} />
                <Route path="/depot/top-soil" element={<Depot/>} />
                <Route path="/depot/interlock" element={<Depot/>} />
                <Route path="/depot/aggregates" element={<Depot/>} />
                <Route path="/depot/retaining-walls" element={<Depot/>} />
                <Route path="/careers" element={<Careers/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;