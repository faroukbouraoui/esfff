import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { showErrorMsg } from '../helpers/message';
import { setAuthentication, isAuthenticated } from '../helpers/auth';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import { signin } from '../api/auth';




import Footer from './pages/Footer/Footer';
import NavbarAcceuil from './NavbarAcceuil';
const Signin = () => {
    let history = useHistory();

    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin');
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/');
        }
    }, [history]);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        errorMsg: false,
        loading: false,
    });

    const { email, password, errorMsg } = formData;

    /****************************
     * EVENT HANDLERS
     ***************************/
    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg: '',
        });
    };



    const handleSubmit = (evt) => {
        evt.preventDefault();

        // client-side validation
        if (isEmpty(email) || isEmpty(password)) {
            setFormData({
                ...formData,
                errorMsg: 'All fields are required',
            });
        } else if (!isEmail(email)) {
            setFormData({
                ...formData,
                errorMsg: 'Invalid email',
            });
        
     

        } else {
            const { email, password } = formData;
            const data = { email, password };

            setFormData({ ...formData, loading: true });

            signin(data)
                .then((response) => {
                    setAuthentication(response.data.token, response.data.user);

                    if (isAuthenticated() && isAuthenticated().role === 1) {
                        console.log('Redirecting to admin dashboard');
                        history.push('/admin');
                    } else {
                        if(localStorage.getItem('redirected')==null){
                            console.log('Redirecting to user dashboard');
                            history.push('/');
                        }else{
                            history.push('/process')
                        }
                        
                    }
                })
                .catch((err) => {
                    console.log('signin api function error: ', err);
                    setFormData({
                        ...formData,
                        loading: false,
                        errorMsg: err.response.data.errorMessage,
                    });
                });
        }
    };

      
    return (
        <div >
            <NavbarAcceuil />
        <div>
        <section className="page-titlee o-hidden text-center "  style={{background:"#27558e",height:"30px"}}>
        <div className="d-none d-md-block" style={{marginTop:"-154px"}}><img className="img-fluid" src="deco/images/bg/08.png" alt="" /></div>
        
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
                      <h2 className="title mb-5">Sign In</h2>
                      {errorMsg && showErrorMsg(errorMsg)}
                      <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="messages" />
                        <div className="form-group">
                          <input id="form_email" type="text" name="email" value={email} onChange={handleChange} className="form-control" placeholder="Adresse Email" required="required" data-error="Adresse Email obligatoire." />
                          
                        </div>
                        <div className="form-group">
                          <input id="form_password" type="password" name="password" value={password} onChange={handleChange} className="form-control" placeholder="Mot de passe" required="required" data-error="Mot de passe obligatoire." />
                         
                        </div>
                        <div className="form-group mt-4 mb-5">
                        
                        </div> <button  className="btn btn-white btn-sm" type="submit">Login</button>
                        <p className='text-center' style={{color:"#000"}}>
                            j'ai un compte ?<Link to='/signup' style={{color:"#07516E"}}> Sign Up</Link>
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

export default Signin;