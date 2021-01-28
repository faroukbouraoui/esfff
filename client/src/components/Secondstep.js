import React, { useContext, useEffect } from "react";
import { setLocalStorage } from "../helpers/localStorage";
import { multiStepContext } from "../StepContext";

import { Link } from "react-router-dom";
import { Button } from "./Button";
import { getOffres } from "../redux/actions/offreActions";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { setOffre } from "../helpers/auth";
import './Secondstep.css'
export default function Secondstep () {
  const { setStep, userData, setUserData, submitData } = useContext(
    multiStepContext
  );

  const dispatch = useDispatch ();
  const {offres} =useSelector(state => state.offres)

  useEffect(() => {
    
    dispatch (getOffres())
  }, [dispatch])


  const validerstepTwo = (name) => {
    
    setUserData({ ...userData, offre: name });
    setLocalStorage("processValues", userData);
    setStep(3);
  };
  return (
  <div className="container">
    
   
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
            <img className="img-center my-4" src={`/upload/${o.fileName}`} alt />
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
            <button className="btn btn-white mt-5" onClick={()=> validerstepTwo(o.name)} style={{position:"absolute",bottom:"14px",marginLeft:"-36%"}}> <span>Choisir votre offre</span>
            </button>
          </div>
        </div>
        ))}
        </div>
        </div>
        </section>
        <div className="button__back">
        <button 
        onClick={()=> setStep(1)}
        className="btn btn-md btn-orange"
        >
        Back
        </button>
        
        </div>
        </div>
    </div>
 
        
            
       
   
  );
}
