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
        password: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: false,
    });
    const {
        username,
        email,
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
            const { username, email, password } = formData;
            const data = { username, email, password };

            setFormData({ ...formData, loading: true });
            
            signup(data)
                .then((response) => {
                    console.log('Axios signup success: ', response);
                    console.log('data', data);
                   
                    setFormData({
                        username: '',
                        email: '',
                        password: '',
                        password2: '',
                        loading: false,
                        successMsg: response.data.successMessage,
                    });
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
            <Navbar />
        <div>
          <section className="page-titlee o-hidden text-center grey-bg bg-contain animatedBackground"  data-bg-img="deco/images/pattern/05.png">
            <div className="container">
              <div className="row align-items-center">
              
              </div>
            </div>
            <div className="page-title-pattern"><img className="img-fluid" src="deco/images/bg/06.png" alt /></div>
          </section>
          {/*page title end*/}
          {/*body content start*/}
          <div className="page-content">
            {/*login start*/}
            <section className="login">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                    <div className="login-form text-center box-shadow  px-5 py-5 xs-px-2 xs-py-2" style={{backgroundColor:"#ff9c1e"}}>
                      <h2 className="title mb-5">Sign Up</h2>
                      <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="messages" />
                        <div className="form-group">
                        <input id="form_email" type="text" name="username" value={username} onChange={handleChange} className="form-control" placeholder="Username" required="required" data-error="Username is required." />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group">
                      <input id="form_email" type="text" name="email" value={email} onChange={handleChange} className="form-control" placeholder="Adresse mail" required="required" data-error="Username is required." />
                      <div className="help-block with-errors" />
                    </div>
                       
                        <div className="form-group">
                          <input id="form_password" type="password" name="password2" value={password2} onChange={handleChange} className="form-control" placeholder="Password" required="required" data-error="password is required." />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="form-group">
                        <input id="form_password" type="password" name="password" value={password} onChange={handleChange} className="form-control" placeholder="Confirm your password" required="required" data-error="password is required." />
                        <div className="help-block with-errors" />
                      </div>
                        <div className="form-group mt-4 mb-5">
                        
                        </div> <button className="btn btn-white btn-sm" type="submit">Signup</button>
                        <p className='text-center' style={{color:"#000"}}>
                             Have an account? <Link to='/signin' style={{color:"#07516E"}}> Sign In</Link>
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
