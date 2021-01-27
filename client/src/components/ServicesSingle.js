import React from 'react'

import { useEffect } from 'react';

import { Accordion, Card } from "react-bootstrap";
import Axios from 'axios';
import { baseUrl } from '../api/config';
import { useState } from 'react';
import './ServiceSingle.css'
import Services from './Services';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../redux/actions/serviceActions';
import { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './pages/Footer/Footer';
import ZoomInSharpIcon from '@material-ui/icons/ZoomInSharp';
const ServicesSingle = () => {
 const [show , setShow]=useState(true)
  const dispatch = useDispatch ();
  const {services} =useSelector(state => state.services)
  
useEffect(() => {
dispatch(getServices())
}, [dispatch])

    return (
      <div>
      <Navbar/>
      <section className="page-titlee o-hidden text-center grey-bg bg-contain animatedBackground"  data-bg-img="deco/images/pattern/05.png">
      <div className="container">
        <div className="row align-items-center">
        <div class="col-md-12">
      <h1 class="title">Services</h1>
      
      </div>
        </div>
      </div>
      <div className="page-title-pattern"><img className="img-fluid" src="deco/images/bg/06.png" alt /></div>
      </section>
<div>
{services.map((s,i)=>(
  <div className="wrapper">
    {/* Boutons */}
    
      <Fragment>
      
    <div className="mes-boutons" style={{width:"30%"}}>
      
      <a href={`#${i}`}>{s.serviceName}  <ZoomInSharpIcon/></a><br/>
     
    </div> 
    <span id={i} className="ancre" />
    <div className=" bloc">{s.serviceDesc}</div>
   
    </Fragment>
   
  </div>
  ))}
  
</div>
<Footer/>
</div>


    );

    
};

export default ServicesSingle
/*

<div>
  <div className="wrapper">
  <div className="row">
  {services.map((s,i)=>(
   <div className="col-12">
    <Fragment>
    
    <div className="mes-boutons">
      <a href={`#${i}`}>{s.serviceName}</a>
    </div> 
    
    <span id={i} className="ancre" />
   
    <div className="bloc">{s.serviceDesc}</div>
    </Fragment>
    </div>
  ))}
  </div>
  </div>
  
</div>
*/