import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Demolition from './components/Demolition'
import SitePrep from './components/SitePrep'
import SepticSystems from './components/SepticSystems'
import RoadConstruction from'./components/RoadConstruction'
import FlatbedAndTowing from './components/FlatbedAndTowing'
import Products from './components/Products'
import Careers from './components/Careers'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/services/site_prep" element={<SitePrep/>} />
                <Route path="/services/demolition" element={<Demolition/>} />
                <Route path="/services/septic_systems" element={<SepticSystems/>} />
                <Route path="/services/road_construction" element={<RoadConstruction/>} />
                <Route path="/services/flatbed_and_towing" element={<FlatbedAndTowing/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/careers" element={<Careers/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;