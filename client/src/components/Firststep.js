 import React, { useContext } from 'react'
 import {multiStepContext} from '../StepContext'
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import { Button } from './Button'
import * as Yup from 'yup';
 import './FirstStep.css'
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import { setLocalStorage } from '../helpers/localStorage';

 
 const formSchema= Yup.object().shape({
    nomComplet: Yup.string()
        .required('Nom Complet is required'),
    entreprise: Yup.string()
        .required('Entreprise is required'),
    telephone: Yup.string()
        .min(8,'Numéro de téléphone must be at least 8 chiffres')
        .required('Numéro de télephone is required'),
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    adressse: Yup.string()
        
        .required('Adresse is required'),
    rne: Yup.string()
        
        .required('RNE is required')
})
 export default function Firststep() {
    



    const {setStep, userData, setUserData}= useContext(multiStepContext)
    const validerstepone =()=>{
       setLocalStorage("steponevalues",userData)
    }

     return (
         <>
         
        <Formik
        initialValues={{
            nomComplet: '',
            entreprise: '',
            telephone: '',
            email: '',
            adresse: '',
            rne: '',
           
        }}
       
        validationSchema={formSchema}
        >
         {({ errors, status, touched }) => (
            <Form className="formone" >
                <div className="form-group">
                    
                    <Field name="nomComplet" value={userData['nomComplet']} onChange={(e)=>setUserData({...userData,"nomComplet":e.target.value})} placeholder="Nom Complet" type="text" className={'form-control' + (errors.nomComplet && touched.nomComplet ? ' is-invalid' : '')}   />
                    

                  
                    
                </div>
                <div className="form-group">
                    
                    <Field name="entreprise" value={userData['entreprise']} onChange={(e)=>setUserData({...userData, "entreprise" : e.target.value})} placeholder="entreprise" type="text" className={'form-control' + ((errors.entreprise && touched.entreprise) ? ' is-invalid' : 'is-valid')}  />
                    
                </div>
                <div className="form-group">
                    
                    <Field name="telephone" value={userData['telephone']} onChange={(e)=>setUserData({...userData,"telephone":e.target.value})} placeholder="telephone" type="text" className={'form-control' + (errors.telephone && touched.telephone ? ' is-invalid' : '')} />
                    <ErrorMessage name="tetephone" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    
                <Field name="email" value={userData['email']} onChange={(e)=>setUserData({...userData,"email":e.target.value})} placeholder="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
                    
            <Field name="adresse" value={userData['adresse']} onChange={(e)=>setUserData({...userData,"adresse":e.target.value})} placeholder="adresse" type="text" className={'form-control' + (errors.adresse && touched.adresse ? ' is-invalid' : '')} />
            <ErrorMessage name="adresse" component="div" className="invalid-feedback" />
        </div>
        <div className="form-group">
                    
        <Field name="rne" value={userData['rne']} onChange={(e)=>setUserData({...userData,"rne":e.target.value})} placeholder="RNE" type="text" className={'form-control' + (errors.rne && touched.rne ? ' is-invalid' : '')} />
        <ErrorMessage name="rne" component="div" className="invalid-feedback" />
    </div>
  
              
              
                <div className="form-group">
                    <Button type="submit" onClick={validerstepone} buttonStyle="btn--primary1" >Suivant</Button>
                    
                </div>
            </Form>
       
            )}

            </Formik>
           
      </>
            
)

     
 }