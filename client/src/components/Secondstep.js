import React, { useContext, useEffect } from "react";
import { setLocalStorage } from "../helpers/localStorage";
import { multiStepContext } from "../StepContext";
import { baseUrl } from '../api/config'
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { getOffres } from "../redux/actions/offreActions";
import { useDispatch, useSelector } from "react-redux";

import Footer from './pages/Footer/Footer';
import CheckIcon from '@material-ui/icons/Check';
import { isAuthenticated } from '../helpers/auth';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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

  const redirected= ()=>{
    localStorage.setItem('redirected','/process')
  }
  return (

    <div>
   
    

    <div className="page-body" style={{marginTop:"0px"}}>
    <div className="row">
      <div className="col-12">
        <div className="panel panel-default">
  <div className="col-lg-8 col-md-12 ml-auto mr-auto"><div><h2 style={{marginLeft: "-4%",paddingTop:"18px"}}>Choisissez votre plan</h2></div></div>
  
          <div className="panel-body">
            
  <table class="table table-striped table-bordered add-row-datatable" cellspacing="0" width="100%">
    <colgroup><col />
    </colgroup><colgroup span={2} />
    <colgroup span={2} />
    <tbody><tr>
        <td rowSpan={2} />
  
      </tr>
      <tr>
        <th scope="col" className="" style={{textAlign:"center"}}>Starter <br/><span style={{color:"rgb(39, 85, 142)"}}> 300Dt/M </span></th>
        <th scope="col" className=""  style={{textAlign:"center"}}>Market Growth <br/><span style={{color:"rgb(39, 85, 142)"}}>800Dt/M</span></th>
        <th scope="col" className=""  style={{textAlign:"center"}}>Pionner <br/><span style={{color:"rgb(39, 85, 142)"}}>1500Dt/M</span></th>
        <th scope="col" className=""  style={{textAlign:"center"}}>Gold <br/><span style={{color:"rgb(39, 85, 142)"}}>1000Dt/M</span></th>
        
      </tr>
      <tr>
        <th scope="row">Nom de domaine et Hébergement + Adresses e-mail
        </th>
        <td className=""><CheckIcon/></td>
        <td className=""><CheckIcon/></td>
        <td className=""><CheckIcon/></td>
        <td className=""><CheckIcon/></td>      
      </tr>
      <tr>
        <th scope="row">Conception et mise en œuvre de la boutique en ligne</th>
        <td className=""><CheckIcon/></td>
        <td className=""><CheckIcon/></td>
        <td className=""><CheckIcon/></td>
        <td className=""><CheckIcon/></td>
        
      </tr>
      <tr>
      <th scope="row">Gestion des commandes et des réclamations</th>
      <td className=""><CheckIcon/></td>
      <td className=""><CheckIcon/></td>
      <td className=""><CheckIcon/></td>
      <td className=""><CheckIcon/></td>
    </tr>
    <tr>
    <th scope="row">Formation et Coaching mensuels</th>
    <td className=""><CheckIcon/></td>
    <td className=""><CheckIcon/></td>
    <td className=""></td>
    <td className=""></td>
  </tr>
    <tr>
    <th scope="row">Gestion des livraisons</th>
    <td className=""></td>
    <td className=""></td>
    <td className=""><CheckIcon/></td>
    <td className=""><CheckIcon/></td>
  </tr>
  <tr>
  <th scope="row">Référencement SEO</th>
  <td className=""></td>
  <td className=""></td>
  <td className="">3 mot clé</td>
  <td className="">10 mot clé + SMO</td>
  </tr>
  <tr>
  <th scope="row">Création et envoi de newsletters</th>
  <td className=""></td>
  <td className="">Semestriel</td>
  <td className="">Trimestriel</td>
  <td className="">Mensuel</td>
  </tr>
  <tr>
  <th scope="row">Community Management</th>
  <td className=""></td>
  <td className=""></td>
  <td className=""><CheckIcon/></td>
  <td className=""><CheckIcon/></td>
  </tr>
  <tr>
  <th scope="row"><span style={{marginLeft:"30px"}}>- Commentaires et messagerie</span></th>
  <td className=""></td>
  <td className=""></td>
  <td className=""></td>
  <td className=""></td>
  </tr>
  <tr>
  <th scope="row"><span style={{marginLeft:"30px"}}>- publications sur les réseaux sociaux</span></th>
  <td className=""></td>
  <td className=""></td>
  <td className="">4 par semaine</td>
  <td className="">10 par semaine</td>
  </tr>
  <tr>
  <th scope="row">Préparation et gestion des campagnes promotionnelles (1 produit ou une marque)</th>
  <td className=""></td>
  <td className="">1 promo chaque semestre</td>
  <td className="">1 promo chaque trimestre</td>
  <td className="">1 promo chaque mois</td>
  </tr>
  <tr>
  <th scope="row">Mises à jour de la boutique</th>
  <td className=""></td>
  <td className="">1 Mise à jour chaque semestre</td>
  <td className="">1 Mise à jour chaque trimestre</td>
  <td className="">1 Mise à jour chaque trimestre</td>
  </tr>
  <tr>
  <th scope="row">Assistance Technique</th>
  <td className="">Mail</td>
  <td className="">Mail et téléphone</td>
  <td className="">Mail et téléphone</td>
  <td className="">Mail et téléphone</td>
  </tr>
 
  
    </tbody></table>
   <div>
   
   
      <button  style={{marginLeft:"-6%"}} onClick={()=>validerstepTwo("starter")}><span style={{border:"2px solid #27558e",padding:"10px",borderRadius:"25px"}}>j'y vais<ArrowForwardIosIcon/></span></button>
 
</div>
  
    <div>
   
    
       <button  style={{marginLeft:"19%"}} onClick={()=>validerstepTwo("market growth")}><span style={{border:"2px solid #27558e",padding:"10px",borderRadius:"25px",position:"relative",top:"-24px"}}>j'y vais<ArrowForwardIosIcon style={{color:"#27558e",marginTop:"-4%"}}/></span></button>
 
   
 
     </div>
     <div>
    
     
        <button  style={{marginLeft:"50%"}} onClick={()=>validerstepTwo("pioneer")}><span style={{border:"2px solid #27558e",padding:"10px",borderRadius:"25px",position:"relative",top:"-49px"}}>j'y vais<ArrowForwardIosIcon style={{color:"#27558e",marginTop:"-2%"}}/></span></button>
   
  
   
    
      </div>
      <div>
     
      
         <button  style={{marginLeft:"84%"}}  onClick={()=>validerstepTwo("gold")}><span style={{border:"2px solid #27558e",padding:"10px",borderRadius:"25px",position:"relative", top:"-75px"}}>j'y vais<ArrowForwardIosIcon style={{color:"#27558e",marginTop:"-2%"}}/></span></button>
   
      
      
    
       </div>
       
       <div className="button__back">
       <button 
       style={{marginTop:"-15%"}}
       onClick={()=> setStep(1)}
       className="btn btn-md btn-orange"
       >
       Back
       </button>
       
       </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </div>

        
            
       
   
  );
}
