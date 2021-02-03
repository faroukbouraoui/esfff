import { Field } from 'formik'
import React from 'react'
import { useContext } from 'react';
import { Fragment } from 'react'

import { multiStepContext } from "../StepContext";
const ZeroStep = () => {

  const { setStep } = useContext(multiStepContext);


  
  
function getData() {
  return JSON.parse(localStorage.getItem('user') || "[]");
}
const data= getData();


    return (
       <div>
  

   <Fragment>
              <form className="formone">
             
              <div>
       <div className="form-group">
         <input
           name="nomComplet"
           value={data.username}
        
           placeholder="Nom Complet *"
           type="text"
           className="form-control"
            
           
         />
         
     
       </div>
     
     
       <div className="form-group">
         <input
           name="email"
           value={data.email}
          
           placeholder="email *"
           type="text"
           className=
             "form-control" 
             
           
         />

       </div>
       <div className="form-group">
         <input
           name="numtel"
           value={data.numtel}
          
           placeholder="numtel *"
           type="text"
           className=
             "form-control" 
             
           
         />

       </div>
      
      

       <div className="form-group">
       
         <button
         className="btn btn-white btn-md"
           type="submit"
          onClick={()=>setStep(2)}
          
           
           
         >
           Suivant
         </button>
       </div>
       </div>

     </form> 
     </Fragment>
    
    </div>
    )
}

export default ZeroStep
        