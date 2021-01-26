import React,{Component} from 'react'
import Blog from '../../FrontBlog'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import FrontServices from '../../FrontServices'

import Footer from '../Footer/Footer'


import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'
import FrontTemplates from '../../FrontTemplates'
import NavbarAcceuil from '../../NavbarAcceuil'
export default class Home extends Component{
    
    render(){

      
    return (
        <>
            <NavbarAcceuil />
            <HeroSection {...homeObjOne} />
            <FrontServices />
            <FrontTemplates />
            <Pricing />
            <Footer /> 
           
        </>
    )
}}




