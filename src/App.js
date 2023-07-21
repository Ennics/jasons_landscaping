import React from 'react'
import Home from './components/Home'
import About from './components/About';
import Services from './components/Services'
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
                <Route path="/products" element={<Products/>} />
                <Route path="/careers" element={<Careers/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;