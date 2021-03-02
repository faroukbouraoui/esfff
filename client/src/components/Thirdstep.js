import React, { useContext, useEffect, useState } from "react";
import { setLocalStorage } from "../helpers/localStorage";
import { multiStepContext } from "../StepContext";
import "./Secondstep.css";
import { useDispatch, useSelector } from "react-redux";
import { getTemplates } from "../redux/actions/templateActions";
import './thirdstep.css'
import Axios from "axios";
import {Modal, Button} from 'react-bootstrap'
import { baseUrl } from "../api/config";
import { useHistory } from "react-router-dom";




export default function Thirdstep() {
  
  const { setStep, userData, setUserData } = useContext(multiStepContext);
 
  let history = useHistory();

const {checked , setChecked}= useState(false)
  
  const dispatch = useDispatch ();
  const {templates} =useSelector(state => state.templates)

  useEffect(() => {
    
    dispatch (getTemplates())
  }, [dispatch])

  /*const validerstepTow = async (response) => {
    setLocalStorage("processValues", userData);
    const user = await localStorage.getItem("user");
    const userObj = JSON.parse(user);
    const userid = userObj._id;
    console.log(userid);
    //setUserData({ ...userData, userid: userid });
    const obj = { userData, userid };
    console.log(userData);
    try {
      response = await axios.post("/leads", obj);
    } catch (err) {
      console.log("lead api error: ", err);
    }
  };*/
  const [show, setShow] = useState(false);

  const HandleModal = () => {
    setShow(!show);
    
  }
  const HandleModalone = () => {
    
    history.push('/')
  }
 
  
  const validerstepthree = async (response) => {

      
 
    
    setLocalStorage("processValues", userData);
    const user = await localStorage.getItem("user");
    let userEmail= user.email;
           console.log(userEmail)
    const userObj = JSON.parse(user);
    const userid = userObj._id;
    console.log(userid);
    //setUserData({ ...userData, userid: userid });
    const obj1 = userData.dataaa
    const obj2 = userData.offre
    const obj3 = userData.template
    
    const produit = userData.tagss
    
    const obj = { obj1,obj2,obj3,produit, userid };

    try {
      response = await Axios.post("/leads", obj);
     
    } catch (err) {
      console.log("lead api error: ", err);
    }
    
  };
  const processData =localStorage.getItem("processValues")
  const rs = userData.dataaa.raisonSocial
  console.log(rs)
  return (


/*
    <div className="container">
   
    <div className="blog__section">
    
    
    
    
  <div className="container__blog" >
 
  <div className="blog__main">
  {templates.map((template)=>(
  
    <div className="row">
    <div className="col-md-12">
      <div className="singleBlog">
     
      
      <Fragment>
      <img
      src={`/uploads/${template.fileName}`} 
        className="iconimg_back"
        alt="icon-pricing"
      />
        <div className="blogContent">

          <h3></h3>
          
          
          <Button className='btn'
          onClick={()=>validerstepthree()}
          >
            Choose Plan
          </Button>
         
        </div>
        
        </Fragment>    
        </div>
      
        </div>
      </div>
      ))}
      
     
      </div>
      </div>
      </div>
     
      </div>
  )}
*/

  /*  <div>
    <div className="container">
    
    <div className="row">
    {templates.map((temp)=>(
      <div className="col-md-3 colonne">
      <form>
      
      
          <input type="radio" name={temp.title} className="input-hidden"   id={temp._id} value={userData['template']} onClick={(e)=>setUserData({...userData, "template" : e.target.name })} />
          <label  for={temp._id} > 
          
          <img
          src={`/uploads/${temp.fileName}`} 
            alt=""
            
          />
          </label>
          </form>
       
      
      
      </div>))}
      </div>
     
      </div>
      <div className="boutton">
      <Button className="btn" onClick={()=>validerstepthree()}>
      submit
      </Button>
      </div>
      </div>
  );
}*/

 <div>
    <div className="container">
    
    <div className="row">
    {templates.map((temp)=>(
      <div className="col-3 colonne">
     
      <div className="custom-control custom-radio">
          <input type="radio" name="hello" className="custom-control-input"  id={temp.title} value={userData['template']} onClick={(e)=>setUserData({...userData, "template" : e.target.id })} />
            
          <label className="label_third" htmlFor={temp.title} >
          <img style={{width:"132%"}}
          src={baseUrl+`/upload/${temp.fileName}`} 
            
            
          />
          {temp.title}
          </label>
    
       
      </div>
      
      </div>
      ))}
      </div>
      <Modal show={show} >
      <Modal.Header><span style={{color:"#27558e"}}>Cher client </span></Modal.Header>
      
              <Modal.Body>
        Merci pour votre confiance, vous serez contacté par notre service commercial dans 48 heures.<br/>
      <hr/>
      <span><i className="flaticon-tick" />Raison sociale:</span>  {userData.dataaa.raisonSocial}<br/>
      <span><i className="flaticon-tick" />Adresse :</span>    {userData.dataaa.adresse}<br/>
          <span><i className="flaticon-tick" />Catgorie des produits:</span>   {userData.dataaa.catproduit}<br/>
   
            <span><i className="flaticon-tick" /> Lien de la page facebook:</span> {userData.dataaa.facebookLink}<br/>
            <span><i className="flaticon-tick" /> Lien de la compte instagram:</span> {userData.dataaa.instagramLink}<br/>
            <span><i className="flaticon-tick" /> Lien de votre site web:</span>{userData.dataaa.sitewebLink}<br/>
            <span><i className="flaticon-tick" /> Votre package:</span>{userData.offre}<br/>
            <span><i className="flaticon-tick" /> Votre template:</span>{userData.template}
      
       
      </Modal.Body>
     

      <Modal.Footer>
      
      <button className="btn btn-hello"  onClick={()=>{HandleModalone()}}>
      close
      </button>
     
      </Modal.Footer>
    </Modal>
      </div>

      <div className="boutton">
      <button
        onClick={() => setStep(2)}
        className="btn btn-md btn-orange"
      >
        Back
      </button>
      
      <button className="btn btn-hello"  onClick={()=>{validerstepthree();HandleModal()}}>
      submit
      </button>

      </div>
    
    
  
      </div>

  )
}