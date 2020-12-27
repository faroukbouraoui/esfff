import React, { useContext, useState } from 'react'

import {multiStepContext} from '../StepContext'
import './Secondstep.css'
import { Button } from './Button'
export default function Secondstep() {
    const templateOneName = "hello"
    const {setStep, userData, setUserData}= useContext(multiStepContext)
    const [checked, setChecked] = useState(true)



    return (
<div className="container">
<div className="row">
  <div className="col-md-3">
    <div className="custom-control custom-radio">
      <input type="radio" name="templateOne" className="custom-control-input"  id="ck2a" value={userData['template']} onClick={(e)=>setUserData({...userData, "template" : e.target.name })} />
        
      <label  htmlFor="ck2a">
        <img src="img/template.png" alt="#"  />
      </label>

    </div>
  </div>
  <div className="col-md-3">
  <div className="custom-control custom-radio">
      <input type="radio" className="custom-control-input" id="ck2b" name="templateTwo"  value={userData['template']} onClick={(e)=>setUserData({...userData, "template" : e.target.name })}  />
      <label  htmlFor="ck2b">
        <img src="img/template.png" alt="#"  />
      </label>
    </div>
  </div>
  <div className="col-md-3">
    <div className="custom-control custom-radio">
      <input type="radio" className="custom-control-input"  name="templateThree" id="ck2c" value={userData['template']} onClick={(e)=>setUserData({...userData, "template" : e.target.name })}    />
      <label htmlFor="ck2c">
        <img src="img/template.png" alt="#"  />
      </label>
    </div>
  </div>
  <div className="col-md-3">
    <div className="custom-control custom-radio">
      <input type="radio" className="custom-control-input"  name="templateFour" id="ck2d"  value={userData['template']} onClick={(e)=>setUserData({...userData, "template" : e.target.name })}   />
      <label  htmlFor="ck2d">
        <img src="img/template.png" alt="#"  />
      </label>
    </div>
  </div>
</div>
<div className="buttons">
  <Button  onClick={()=>setStep(1)} buttonStyle="btn--primary1" buttonColor="orange">Back</Button>
        <Button variant="contained" type="submit" color="primary" onClick={()=>setStep(3)} >Suivant</Button>
        </div> 
</div>

    )
}
