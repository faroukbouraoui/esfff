import React, { useEffect } from 'react';

import './Pricing.css';

import { Link } from 'react-router-dom';
import { getOffres } from '../redux/actions/offreActions';
import { useDispatch, useSelector } from 'react-redux';


import Navbar from './Navbar';
import Footer from './pages/Footer/Footer';
import { isAuthenticated } from '../helpers/auth';
function Pricing() {


  const dispatch = useDispatch ();
  const {offres} =useSelector(state => state.offres)
  
  
  
  useEffect(() => {
   dispatch(getOffres());
   
  }, [dispatch])

  const redirected= ()=>{
    localStorage.setItem('redirected','/process')
  }

  return (
    <div>
   
      
      <section className="grey-bg pos-r text-center">
        
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 ml-auto mr-auto">
            <div className="section-title">
              <h6>Service</h6>
              <h2 className="title">We’r Provided Best Digital Marketing Services!</h2> 
            </div>
          </div>
        </div>
          <div className="row">
          {offres.map((o)=>(
            <div className="col-lg-6 col-md-12">
              <div className="price-table style-2 bg-contain bg-pos-r"  style={{backgroundImage: 'url("images/bg/02.png")'}}>
                <div className="price-header d-md-flex justify-content-between">
                  <h3 className="price-title">{o.name}</h3>
                  <div className="price-value">
                    <h2>{o.price}dt/<span>Mois</span></h2>
                  </div>
                </div>
                <div className="price-list">
                  <p>{o.description}</p>
                </div>
                <Link to="/front-pricing">
                <button className="btn btn-orange">voir détails</button>
                </Link>
                {isAuthenticated() && isAuthenticated().role=== 0 ?(
                  <Link to="/process">
                    <button className="btn btn-white"  onClick={redirected}>Démarer</button>
                  </Link>
                ):(
                  <Link to="/signin">
                  <button className="btn btn-white"  onClick={redirected}>Démarer</button>
                </Link>
                )}
                
              </div>
            </div>
       
          
            ))}
          </div>
          
        </div>
      </section>
    
     
  
      </div>

  );
}
export default Pricing;


/**/