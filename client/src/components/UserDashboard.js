import React from 'react';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import Home from './pages/HomePage/Home';
import FrontServices from './FrontServices'
import Pricing from './Pricing';
import FrontBlog from './FrontBlog'
import Footer from './pages/Footer/Footer';
import FrontTemplates from './FrontTemplates'

import NavbarAcceuil from './NavbarAcceuil';
import DescriptionSectioon from './DescriptionSectioon';
const UserDashboard = () => {
    return( <div>
       
        <NavbarAcceuil />
        <HeroSection />
        <FrontServices />
        <FrontTemplates />
        <DescriptionSectioon />
        <Pricing />
        
        <Footer /> 
       
    
    
    
    
    
  
    </div>)
};

export default UserDashboard;
