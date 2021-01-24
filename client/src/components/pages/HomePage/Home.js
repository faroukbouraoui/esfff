import React,{Component} from 'react'
import Blog from '../../FrontBlog'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import FrontServices from '../../FrontServices'
import Navbar from '../../Navbar'
import Footer from '../Footer/Footer'


import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'
import FrontTemplates from '../../FrontTemplates'
export default class Home extends Component{
    
    render(){

      
    return (
        <>
            <Navbar />
            <HeroSection {...homeObjOne} />
            <FrontServices />
            <FrontTemplates />
            <Pricing />
            <Blog />
            <Footer /> 
           
        </>
    )
}}




