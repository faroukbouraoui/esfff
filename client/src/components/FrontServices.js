import React, { Component, useEffect } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import './FrontServices.css'
import { getTemplates } from "../redux/actions/templateActions";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../redux/actions/serviceActions";
const FrontServices = ()=> {
  
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const dispatch = useDispatch ();
    const {services} =useSelector(state => state.services)
    const {templates} =useSelector(state => state.templates)
useEffect(() => {
dispatch(getServices());
dispatch(getTemplates());
  
}, [dispatch])
  

    return (
      <div className="service">
      <div className="container">
        <h2 style={{color:"#fff"}}> Lancez votre boutique en ligne en quelques clics  </h2>
        <p style={{color:"#FF9C1E"}}>Configurez simplement votre e-commerce et profitez de nos outils et nos services qui vous aideront à trouver de nouveaux clients, à augmenter vos ventes et à gérer vos opérations. </p>
       
        <Slider {...settings}>
        {templates.map((temp)=>(
          <div>
          <img
          src={`/uploads/${temp.fileName}`} 
          className="img_temp"
          alt="img1"
        />
            <h3 className="title_temp">{temp.title}</h3>
          </div>
          ))}
        </Slider>
        </div>
<div className="container">
        <h2 style={{color:"#fff"}}>Développez votre présence en ligne et gagnez en parts de marché</h2>

<div className="row">
{services.map((serv)=>(
   <div className="col-sm-4">  
   
  <div className="media">
    <img className="mr-3" src={`/uploads/${serv.fileName}`}  alt="Generic placeholder image" />
    <div className="media-body">
      <h5 className="mt-1 service__title">{serv.serviceName}</h5>
      <p className="paragraphe"> {serv.serviceDesc}</p>
    </div>
  </div>
 
  </div>
  ))}
  </div>
</div>
</div>


    );
  }
export default FrontServices