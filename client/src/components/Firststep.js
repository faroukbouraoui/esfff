import React , { Component}  from 'react';
import { setLocalStorage } from '../helpers/localStorage';
import { InputTagsContainer } from 'react-input-tags';
import "./FirstStep.css";
import { Tag, X } from "react-feather";
import { multiStepContext } from "../StepContext";
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";
const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      raisonSocial: '',
      adresse: '',
      catproduit: '',
      produit:[],
      facebookLink:'',
      instagramLink:'',
      sitewebLink:'',
      tags:[],
			formErrors: {raisonSocial: '', adresse: '', catproduit: '',facebookLink:'',instagramLink:'',sitewebLink:''}, // error messages content
			raisonSocialValid: false,
      adresseValid:false,
      catproduitValid:false,
      
      
			formValid: false
    };

		
    this.handleUserInput = this.handleUserInput.bind(this);// do I need to bind it?
  }

  handleUserInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({[name]: value},
		 () => {this.validateField(name, value) });
  }
	
	// validate each field
	// update their state + the whole form's state
	// and set their error messages
	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let raisonSocialValid = this.state.raisonSocialValid;
		let adresseValid = this.state.adresseValid;
    let catproduitValid = this.state.catproduitValid;
   
    
		switch(fieldName) {
			case 'raisonSocial':
				raisonSocialValid = value.length > 0;
				fieldValidationErrors.raisonSocial = raisonSocialValid ? '' : '  obligatoire';
				break;
			case 'adresse':
				adresseValid = value.length > 0;
				fieldValidationErrors.adresse = adresseValid ? '' : ' obligatoire';
        break;
      	case 'catproduit':
				catproduitValid = value.length > 0;
				fieldValidationErrors.catproduit = catproduitValid ? '' : '  obligatoire';
        break;
        
        
			default:
				break;
		}
		
		this.setState({formErrors: fieldValidationErrors,
      raisonSocialValid: raisonSocialValid,
      adresseValid: adresseValid,
      catproduitValid:catproduitValid,
     

									}, this.validateForm); // + set the validation state for the whole form
	}
	
	validateForm() {
		this.setState({formValid: this.state.raisonSocialValid && this.state.adresseValid && this.state.catproduitValid  });
	}
	
	errorClass(error) {
		return(error.length === 0 ? '' : 'has-danger');
  }
 
  static contextType = multiStepContext;
  
  
  handleUpdateTags = (tags) => {
    this.setState({ tags });
  }
  handlechangetag=(newtag)=>{
      this.setState.tags(newtag)
  }

  render() {
    const { setStep} = this.context
    const validerstepone = () => {
      if(this.state.formValid){
       const raisonSocial = this.state.raisonSocial;
       const adresse = this.state.adresse;
       const catproduit = this.state.catproduit
       const facebookLink=this.state.facebookLink
       const instagramLink=this.state.instagramLink
       const sitewebLink = this.state.sitewebLink
       const tags =this.state.tags
       const tagsdata= JSON.stringify(tags)
        const data = {raisonSocial,adresse,catproduit,facebookLink,instagramLink,sitewebLink}
        const dataa= JSON.stringify(data)
        localStorage.setItem('data',dataa)  
        localStorage.setItem('tagsdata',tagsdata)      
      setStep(3);
      }
     
    };
    return (
      <form className="formone" >
        
				
				<div className="panel panel-default">
					<FormErrors formErrors={this.state.formErrors}/>
				</div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.raisonSocial)}`}>
          
          <input 
            className="form-control"
            type="text" 
            name="raisonSocial"
            placeholder="Raison sociale *"
            value={this.state.raisonSocial}
            onChange={this.handleUserInput}>
          </input>
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.adresse)}`}>
          
          <input 
            className="form-control"
            type="text" 
            name="adresse"
            placeholder="Adresse *"
            value={this.state.adresse}
            onChange={this.handleUserInput}>
          </input>
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.catproduit)}`}>
          
        <input 
          className="form-control"
          type="text" 
          name="catproduit"
          placeholder="Catégorie des produits *"
          value={this.state.catproduit}
          onChange={this.handleUserInput}>
        </input>
      </div>

      <div className="form-group">
      <ReactTagInput 
      maxTags={10}
      placeholder="taper et entrer votre produit"
      tags={this.state.tags} 
      onChange={(newtag)=>this.setState({tags:newtag})}
    />
     </div>
     <div className={`form-group ${this.errorClass(this.state.formErrors.facebookLink)}`}>
          
     <input 
       className="form-control"
       type="text" 
       name="facebookLink"
       placeholder="Mettez le lien de votre page facebook"
       value={this.state.facebookLink}
       onChange={this.handleUserInput}>
     </input>
   </div>
   <div className={`form-group ${this.errorClass(this.state.formErrors.instagramLink)}`}>
          
     <input 
       className="form-control"
       type="text" 
       name="instagramLink"
       placeholder="Metter le lien de votre page facebook"
       value={this.state.instagramLink}
       onChange={this.handleUserInput}>
     </input>
   </div>
   <div className={`form-group ${this.errorClass(this.state.formErrors.sitewebLink)}`}>
          
   <input 
     className="form-control"
     type="text" 
     name="sitewebLink"
     placeholder="Metter le lien de votre page facebook"
     value={this.state.sitewebLink}
     onChange={this.handleUserInput}>
   </input>
 </div>
				
				

          <div className="boutton">
          <button
            onClick={() => setStep(2)}
            className="btn btn-md btn-orange"
          >
            Back
          </button>

          <button type="submit" className="btn btn-hello"
          disabled={!this.state.formValid} onClick={validerstepone} >Suivant</button>
         </div>
      </form>
    );
  }
}

export default Form
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