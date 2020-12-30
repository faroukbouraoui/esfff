import React, { useContext, useEffect, useState } from "react";
import { setLocalStorage } from "../helpers/localStorage";
import { multiStepContext } from "../StepContext";
import "./Secondstep.css";
import axios from "axios";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { getTemplates } from "../redux/actions/templateActions";
import { Fragment } from "react";
import './thirdstep.css'
import Axios from "axios";


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

  
  const validerstepthree = async (response) => {

      
    setLocalStorage("processValues", userData);

    const user = await localStorage.getItem("user");

    const userObj = JSON.parse(user);
    const userid = userObj._id;
    console.log(userid);
    //setUserData({ ...userData, userid: userid });
    const obj = { userData, userid };

    console.log(userData);
    try {
      response = await Axios.post("/leads", obj);
    } catch (err) {
      console.log("lead api error: ", err);
    }
  };

  return (
    <div>
    {templates.map((temp)=>(
    <label>
    <input type="radio" name={temp.title} value="small"  />
    <img src={`/uploads/${temp.fileName}`} />
  </label>
    ))}
  </div>
  );
}
/*
 <div>
    <div className="container">
    
    <div className="row">
    {templates.map((temp)=>(
      <div className="col-md-3 colonne">
     
      <div className="custom-control custom-radio">
          <input type="radio" name={temp.title} className="custom-control-input"   id={temp._id} value={userData['template']} onClick={(e)=>setUserData({...userData, "template" : e.target.name })} />
            
          <label className="label_third" htmlFor={temp._id} >
          <img
          src={`/uploads/${temp.fileName}`} 
            
            
          />
          </label>
    
       
      </div>
      
      </div>))}
      </div>
     
      </div>
      <div className="boutton">
      <Button className="btn" onClick={()=>validerstepthree()}>
      submit
      </Button>
      </div>
      </div>
*/