import React, { useContext, useEffect } from "react";
import { setLocalStorage } from "../helpers/localStorage";
import { multiStepContext } from "../StepContext";

import { Link } from "react-router-dom";
import { Button } from "./Button";
import { getOffres } from "../redux/actions/offreActions";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { setOffre } from "../helpers/auth";
export default function Secondstep () {
  const { setStep, userData, setUserData, submitData } = useContext(
    multiStepContext
  );

  const dispatch = useDispatch ();
  const {offres} =useSelector(state => state.offres)

  useEffect(() => {
    
    dispatch (getOffres())
  }, [dispatch])


  const validerstepTwo = (offre) => {
    
    setUserData({ ...userData, offre: offre });
    setLocalStorage("processValues", userData);
    setStep(3);
  };
  return (
  <div className="container">
    <div className='pricing__section'>
    <div className='pricing__wrapper'>
      <h1 className='pricing__heading'>L'offre qui convient a vos besoins !</h1>
      <p className="pricing__description">Une plateforme unifiée, dotée de toutes les fonctionnalités e-commerce et de point de vente qu'il vous faut pour créer, gérer et développer votre activité.</p>
      <div className='pricing__container'>
        <div className='pricing__container-card'>
        {offres.map((offre)=>(
          <div className='pricing__container-cardInfo'>
            <div className='icon'>
            <img
            src={`/uploads/${offre.fileName}`} 
              className="iconimg_back"
              alt="icon-pricing"
            />
            <h2>{offre.name}<br/> {offre.price}  <sup>dt</sup><span>/mois</span> </h2>
           
            
            
            </div>
            <ul className='pricing__container-features'>
            {offre.servicesOffre.map((s) =>(
              <li>{s.serviceName}</li>
            ))}
            </ul>
            <Button buttonSize='btn--wide' buttonColor='primary'
            onClick={() => validerstepTwo(offre)}
            >
              Choose Plan
            </Button>
          </div>
          ))}
      </div>
        
      </div>
      
      <div className="buttons">
      <Button
        onClick={() => setStep(1)}
        buttonStyle="btn--primary1"
        buttonColor="orange"
      >
        Back
      </Button>
      </div>
    </div>
  </div>
  </div>      
            
       
   
  );
}
