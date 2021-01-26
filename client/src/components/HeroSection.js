import React from 'react';

import { Link} from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';


function HeroSection() {

 const redirected= ()=>{
  localStorage.setItem('redirected','/process')
}



  return (
    <div>
    <section className="fullscreen-banner p-0 banner o-hidden grediant-overlay" data-overlay={10}>
      <div className="d-none d-md-block">
        <img className="img-fluid" src="deco/images/bg/08.png" alt />
      </div>
      <div className="align-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-12 sm-mt-5">
              <div className="seo-img animated zoomIn delay-5 duration-4">
                <img className="img-center" src="deco/images/banner/herophoto.png" alt />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-lg-1 md-mt-5">
              <h1 className="mb-4 text-white font-w-5 animated bounceInLeft delay-2 duration-3">Démarez votre commerce en ligne avec <span className="text-" style={{color:"#FF9C1E"}}>Estores Factory</span> </h1>
              <p className="lead text-white animated fadeInUp delay-3 duration-3">Un centre de services mutualisés et une plateforme unifiée de création et de gestion de votre Ecommerce</p>
              <div className="animated fadeInUp delay-3 duration-3">
              {isAuthenticated() && isAuthenticated().role=== 0 ?(
                <Link to="/process">
                  <button className="btn btn-white" onClick={redirected}>Démarer</button>
                </Link>
              ):(
                <Link to="/signin">
                <button className="btn btn-white" onClick={redirected}>Démarer</button>
              </Link>
              )}
              </div>
              
            </div>        
          </div>
        </div>
      </div>
    </section>
    
            </div>
  );

}
export default HeroSection;
