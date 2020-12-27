import React, { Component } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import './FrontServices.css'

export default class Responsive extends Component {
  render() {
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
    return (
      <div className="service">
      <div className="container">
        <h2> texte </h2>
        <Slider {...settings}>
          <div>
          <img src="/img/template.png" alt="1" />
            <h3>1</h3>
          </div>
          <div>
          <img src="/img/template.png" alt="1" />
            <h3>2</h3>
          </div>
          <div>
          <img src="/img/template.png" alt="1" />
            <h3>3</h3>
          </div>
          <div>
          <img src="/img/template.png" alt="1" />
            <h3>4</h3>
          </div>
          <div>
          <img src="/img/template.png" alt="1" />
            <h3>5</h3>
          </div>
          <div>
          <img src="/img/template.png" alt="1" />
            <h3>6</h3>
          </div>
          <div>
          <img src="/img/template.png" alt="1" />
            <h3>7</h3>
          </div>
          <div>
          <img src="/img/template.png" alt="1" />
            <h3>8</h3>
          </div>
        </Slider>
        </div>
<div className="container">
        <h2>texte 2</h2>
        <p>pargraphe 2</p>
<div className="row">
   <div className="col-sm-3">  
  <div className="media">
    <img className="mr-3" src="/img/shop.png" alt="Generic placeholder image" />
    <div className="media-body">
      <h5 className="mt-1 service__title">Media heading</h5>
      <p className="paragraphe"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    </div>
  </div>
  </div>
  <div className="col-sm-3">  
  <div className="media">
    <img className="mr-3" src="/img/shop.png" alt="Generic placeholder image" />
    <div className="media-body">
      <h5 className="mt-0 service__title">Media heading</h5>
      <p className="paragraphe"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    </div>
  </div>
  </div>
  <div className="col-sm-3">  
  <div className="media">
    <img className="mr-3" src="/img/shop.png" alt="Generic placeholder image" />
    <div className="media-body">
      <h5 className="mt-0 service__title">Media heading</h5>
      <p className="paragraphe"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    </div>
  </div>
  </div>
  <div className="col-sm-3">  
  <div className="media">
    <img className="mr-3" src="/img/shop.png" alt="Generic placeholder image" />
    <div className="media-body">
      <h5 className="mt-0 service__title">Media heading</h5>
      <p className="paragraphe"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    </div>
  </div>
  </div>
</div>
</div>
</div>


    );
  }
}