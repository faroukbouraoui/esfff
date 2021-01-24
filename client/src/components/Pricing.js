import React, { useEffect } from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { getOffres } from '../redux/actions/offreActions';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticated } from '../helpers/auth';

function Pricing() {


  const dispatch = useDispatch ();
  const {offres} =useSelector(state => state.offres)
  
  
  
  useEffect(() => {
   dispatch(getOffres());
   
  }, [dispatch])

  return (
    <div>
    <section className="grey-bg" data-bg-img="images/bg/02.png" style={{paddingBottom:"40px"}}>
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-8 col-md-12 ml-auto mr-auto">
            <div className="section-title">
              <h2 className="title">Choose Your Pricing plan</h2>
              <p className="mb-0">Deos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum dele corrupti quos dolores et quas molestias.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {offres.map((o)=>(
          <div className="col-lg-3 col-md-12">
            <div className="price-table" style={{height:"1200px"}}>
              <div className="price-header">
                <h3 className="price-title">{o.name}</h3>
              </div>
              <img className="img-center my-4" src={`/uploads/${o.filename}`} alt />
              <div className="price-value">
                <h2>{o.price}<span>dt/Month</span></h2>
              </div>
              {o.servicesOffre.map((s)=>(
              <div className="price-list">
              
                <ul className="list-unstyled">
                  
                  <li><i className="flaticon-tick" />{s.serviceName}</li>
                  
                </ul>
                
              </div>
              ))}
              <a className="btn btn-white mt-5" href="#" style={{position:"absolute",bottom:"34px",marginLeft:"-25%"}}> <span>Get Started</span>
              </a>
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