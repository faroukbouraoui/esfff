import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";

import {useFormik} from 'formik';
import * as yup from "yup";
import "./FirstStep.css";
import { Tag, X } from "react-feather";
import { setLocalStorage } from "../helpers/localStorage";

const Firststep = () => {
  


  const formik=useFormik({

    initialValues:{

  

      raisonSocial:'',

      adresse:'',

      catproduit:'',

     

    },

    validationSchema: yup.object({

      raisonSocial: yup.string()

       

        .required('Please Enter Employee Name'),

      adresse: yup.string()

        .required('Please Enter Employee Location'),

      catproduit: yup.string()

        

        .required('Please Enter Email Id'),

    }),

    onSubmit:values=>{

      alert(JSON.stringify(values));

    }

  });



const { setStep, userData, setUserData } = useContext(multiStepContext);
const validerstepone = () => {
  setLocalStorage("processValues", userData);
  setStep(3);
}
  return (
   <div>
   <form className="formone" onSubmit={formik.handleSubmit}>



   <div className="form-group">

      <label htmlFor="raisonSocial">Employee Name : </label>

      <input type="text" name="raisonSocial" {...formik.getFieldProps("raisonSocial")}  value={userData["raisonSocial"]} onChange={(e) =>setUserData({ ...userData, raisonSocial: e.target.value })}></input>

             {formik.touched.raisonSocial && formik.errors.raisonSocial ? <span style={{color:'red'}}>{formik.errors.raisonSocial}</span> : null}
   </div>

    <p>

      <label htmlFor="adresse">Employee Location : </label>

      <input type="text" name="adresse" {...formik.getFieldProps("adresse")}  ></input>

             {formik.touched.adresse && formik.errors.adresse ? <span style={{color:'red'}}>{formik.errors.adresse}</span> : null}
    </p>

    <p>

      <label htmlFor="catproduit">Employee Salary : </label>

      <input type="text" name="catproduit" {...formik.getFieldProps("catproduit")} ></input>                  

    </p>

   
    <button type="submit">Create</button>

</form>
   </div>
  );

              }
export default Firststep
/**
 *  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const validerstepone = () => {
    setLocalStorage("processValues", userData);
    setStep(3);
  };
 * 
 * const formSchema = yup.object().shape({
  nomComplett: yup.string().required("Nom Complet is required"),
  entreprise: yup.string().required("Entreprise is required"),
  telephone: yup.number().required('numéro de téléphone is required')
    .min(8, "Numéro de téléphone must be at least 8 chiffres"),
   
  email: yup.string().email("Email is invalid").required("Email is required"),
  adresse: yup.string().required("Adresse is required"),
  
});
 *  const [tags, setTags] = useState(["React", "Angular"]);
 * <div>
      <Formik
        initialValues={{
          nomComplett: "",
          entreprise: "",
          telephone: "",
          email: "",
          adresse: "",
         
        }}
        validationSchema={formSchema}
        
      >
  
          <Form className="formone">
            <div className="form-group">
              <Field
                name="raisonSocial"
                value={userData["raisonSocial"]}
                onChange={(e) =>
                  setUserData({ ...userData, raisonSocial: e.target.value })
                }
                placeholder="Raison social *"
                type="text"
                className="form-control"
                 
                
              />
              
             <ErrorMessage name="nomComplett" />
          
            </div>
            <div className="form-group">
              <Field
                name="adresse"
                value={userData["adresse"]}
                onChange={(e) =>
                  setUserData({ ...userData, adresse: e.target.value })
                }
                placeholder="Adresse *"
                type="text"
                className=
                  "form-control" 
               
              />
             

            </div>
            <div className="form-group">
              <Field
                name="catproduit"
                value={userData["catproduit"]}
                onChange={(e) =>
                  setUserData({ ...userData, catproduit: e.target.value })
                }
                placeholder="Catégorie des produits"
                type="text"
                className=
                  "form-control" 
                  
                
              />
              
            </div>
            <div className="form-group">
            <div className="TagForm">
          <Tag className="InputIcon" size="16" />
          <input
            type="text"
            placeholder="Add a tag..."
            onKeyPress={event => {
              if (event.key === "Enter") {
                setTags([...tags, event.target.value]);
                event.target.value = "";
              }
            }}
            autofocus
          />
        </div>
        <ul className="TagList">
          {tags.map(tag => (
            <li className="Tag">
              {tag}
              <X
                className="TagIcon"
                size="16"
                onClick={() => {
                  setTags([...tags.filter(word => word !== tag)]);
                }}
              />
            </li>
          ))}
        </ul>
            </div>
            
            <div className="form-group">
              <Field
                name="email"
                value={userData["email"]}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                placeholder="email *"
                type="text"
                className=
                  "form-control" 
                  
                
              />

            </div>
            <div className="form-group">
              <Field
                name="adresse"
                value={userData["adresse"]}
                onChange={(e) =>
                  setUserData({ ...userData, adresse: e.target.value })
                }
                placeholder="adresse *"
                type="text"
                className=
                  "form-control" 
                
              />
         
            </div>

     
           

            
            
              <button
              className="btn btn-white btn-md"
                type="submit"
                onClick={validerstepone}
                
                
                
              >
                Suivant
              </button>
            
          </Form>
        
      </Formik>
    </div>
 */