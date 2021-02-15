import React, { useState, useEffect,useContext } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { isAuthenticated } from '../helpers/auth';
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../api/auth';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import './Signin.css'
import Navbar from './Navbar';
import Footer from './pages/Footer/Footer';
import NavbarAcceuil from './NavbarAcceuil';




const Signup = () => {

    
    
    let history = useHistory();

    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard');
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/user/dashboard');
        }
    }, [history]);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        numtel:'',
        password: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: false,
    });
    const {
        username,
        email,
        numtel,
        password,
        password2,
        successMsg,
        errorMsg,
        loading,
    } = formData;
    /****************************
     * EVENT HANDLERS
     ***************************/
    const handleChange = (evt) => {
        //console.log(evt);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            successMsg: '',
            errorMsg: '',
        });
    };

   

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // client-side validation
        if (
            isEmpty(username) ||
            isEmpty(email) ||
            isEmpty(numtel) ||
            isEmpty(password) ||
            isEmpty(password2)
        ) {
            setFormData({
                ...formData,
                errorMsg: 'All fields are required',
            });
        } else if (!isEmail(email)) {
            setFormData({
                ...formData,
                errorMsg: 'Invalid email',
            });
        } else if (!equals(password, password2)) {
            setFormData({
                ...formData,
                errorMsg: 'Passwords do not match',
            });
        } else {
            const { username, email, numtel,password } = formData;
            const data = { username, email, numtel,password };

            setFormData({ ...formData, loading: true });
            
            signup(data)
                .then((response) => {
                    console.log('Axios signup success: ', response);
                    console.log('data', data);
                   
                    setFormData({
                        username: '',
                        email: '',
                        numtel:'',
                        password: '',
                        password2: '',
                        loading: false,
                        successMsg: response.data.successMessage,
                    });
                    setTimeout(() => {
                      history.push('/signin')
                    }, 3000);
                    
                })
                .catch((err) => {
                    console.log('Axios signup error: ', err);
                    setFormData({
                        ...formData,
                        loading: false,
                        errorMsg: err.response.data.errorMessage,
                    });
                });
        }
        
    };
    

    
    /****************************
     * VIEWS
     ***************************/
 
    /****************************
     * RENDERER
     ***************************/
    return (
        <div >
            <NavbarAcceuil />
        <div>
        <section className="page-titlee o-hidden text-center"  style={{background:"#27558e",height:"30px"}}>
        <div className="d-none d-md-block" style={{marginTop:"-154px"}}><img className="img-fluid" src="deco/images/bg/08.png" /></div>
        
        <div className="container">
        <div className="row align-items-center">
        <div class="col-md-12">
        
        
        </div>
        
        </div>
        </div>
        </section>
          {/*page title end*/}
          {/*body content start*/}
          <div className="page-content">
            {/*login start*/}
            <section className="login section__padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-10 ml-auto mr-auto" style={{marginTop:"46px"}}>
                    <div className="login-form text-center box-shadow  px-5 py-5 xs-px-2 xs-py-2" style={{backgroundColor:"#ff9c1e"}}>
                      <h2 className="title mb-5">Sign Up</h2>
                      {successMsg && showSuccessMsg(successMsg)}
                      {errorMsg && showErrorMsg(errorMsg)}
                      <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="messages" />
                        <div className="form-group">
                        <input id="form_email" type="text" name="username" value={username} onChange={handleChange} className="form-control" placeholder="Nom et prénom" required="required" data-error="Nom et prénom obligatoires." />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group">
                      <input id="form_email" type="text" name="email" value={email} onChange={handleChange} className="form-control" placeholder="Adresse Email" required="required" data-error="Adresse Email obligatoire." />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <input id="form_email" type="text" name="numtel" value={numtel} onChange={handleChange} className="form-control" placeholder="Numéro téléphone" required="required" data-error="Numéro téléphone obligatoire." />
                      <div className="help-block with-errors" />
                    </div>
                       
                        <div className="form-group">
                          <input id="form_password" type="password" name="password2" value={password2} onChange={handleChange} className="form-control" placeholder="Mot de passe" required="required" data-error="Mot de passe obligatoire." />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="form-group">
                        <input id="form_password" type="password" name="password" value={password} onChange={handleChange} className="form-control" placeholder="Confirmer votre mot de passe" required="required" data-error="Mot de passe obligatoire." />
                        <div className="help-block with-errors" />
                      </div>
                        <div className="form-group mt-4 mb-5">
                        
                        </div> <button className="btn btn-white btn-sm" type="submit">Signup</button>
                        <p className='text-center' style={{color:"#000"}}>
                            j'ai un compte ? <Link to='/signin' style={{color:"#07516E"}}> Sign In</Link>
                        </p>
                      </form>
                     
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div></div>
        <Footer />
      </div>
    );
};

export default Signup;
