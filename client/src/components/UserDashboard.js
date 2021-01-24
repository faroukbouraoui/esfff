import React from 'react';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import Home from './pages/HomePage/Home';
import FrontServices from './FrontServices'
import Pricing from './Pricing';
import FrontBlog from './FrontBlog'
import Footer from './pages/Footer/Footer';
import FrontTemplates from './FrontTemplates'
import {
    ScrollingProvider,
    useScrollSection,
    Section,
  } from 'react-scroll-section';
const UserDashboard = () => {
    return( <div>
        <ScrollingProvider>
        <Navbar />
        <HeroSection />
        <Section id="serviceUser"><FrontServices /></Section>
        <FrontTemplates />
        <Section id="pricingUser"><Pricing /></Section>
        
        <Footer /> 
        </ScrollingProvider>
    
    
    
    
    
  
    </div>)
};

export default UserDashboard;
