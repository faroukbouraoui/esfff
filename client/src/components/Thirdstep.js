import React, { useContext, useEffect, useState } from "react";
import { setLocalStorage } from "../helpers/localStorage";
import { multiStepContext } from "../StepContext";
import "./Secondstep.css";
import axios from "axios";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { getTemplates } from "../redux/actions/templateActions";
import { Fragment } from "react";
import './FrontBlog.css'


export default function Thirdstep() {
  
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  


  
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

  
  const validerstepThree = (title) => {
    
    setUserData({ ...userData, temp: title });

    setLocalStorage("processValues", userData);
    setStep(4);
  };

  return (
    <div className="container">
    <div className="blog__section">
    {templates.map((template)=>(
  <div className="container__blog" key={template._id}>
  
    
    <div className="blog__main">
    
     
      <div className="singleBlog">
      
        
      <img
      src={`/uploads/${template.fileName}`} 
        className="iconimg_back"
        alt="icon-pricing"
      />
        <div className="blogContent">

          <h3></h3>
          
          
          <Button className='btn'
          onClick={()=>validerstepThree(template.title)}
          >
            Choose Plan
          </Button>
         
        </div>
        
       
      </div>
      
      
      </div>
      
      </div>
      ))}
      </div>
      </div>
  );
}
