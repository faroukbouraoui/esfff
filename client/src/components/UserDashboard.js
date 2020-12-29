import React from 'react';
import HeroSection from './HeroSection';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/HomePage/Home';
import FrontServices from './FrontServices'
import Pricing from './Pricing';
import FrontBlog from './FrontBlog'
import Footer from './pages/Footer/Footer';
const UserDashboard = () => {
    return( <div>
    <Navbar />
    <HeroSection />
    <FrontServices />
    
    <Pricing />
  
    <Footer /> 
    </div>)
};

export default UserDashboard;
