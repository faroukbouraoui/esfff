import Axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    FaFacebook,
    FaInstagram,
    
  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty';
import { baseUrl } from '../../../api/config';
import { showErrorMsg, showSuccessMsg } from '../../../helpers/message';
import { clearMessages } from '../../../redux/actions/messageActions';
import { createNewsletter } from '../../../redux/actions/newslettersActions';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


const Footer=()=> {


    const { loading } = useSelector(state => state.loading);
	const { successMsg, errorMsg } = useSelector(state => state.messages);
	
   

  const dispatch = useDispatch();
  const [clientSideError, setClientSideError] = useState('');
  

  const [newsletterData, setNewsletterData] = useState({email:""});
  
  const {email} = newsletterData;


  const handleMessages = evt => {
		dispatch(clearMessages());
		setClientSideError('');
  };
  
  const handleNewsletterChange = evt => {
    setNewsletterData({
			...newsletterData,
			[evt.target.name]: evt.target.value,
        });
        
  };

  
  const handleNewsletterSubmit = evt => {
		evt.preventDefault();

		if (isEmpty(email)) {
			setClientSideError('entrer votre email');
		}  else {
			let formData = new FormData();

			formData.append('email', email);
	
			
		

			dispatch(createNewsletter(formData));
			setNewsletterData({
				email: "",
	
				
		
			});
		}
	};

  return (
    <div>
    <footer className="footer white-bg pos-r o-hidden bg-contain" data-bg-img="deco/images/pattern/01.png" >
    <div className="round-p-animation"></div>
      <div className="primary-footer">
          <div className="container-fluid p-0">
              <div className="row">
                  <div className="col-lg-4 py-0">
                      <div className="ht-theme-info bg-contain bg-pos-r h-100 dark-bg text-white" data-bg-img="deco/images/bg/02.png">
                          <div className="footer-logo">
                              <Link to="/">
                <img className="img-center" src="deco/images/shifti-logo.png" alt="" />
                </Link>
                          </div>
                          <p className="mb-3">Shifti est le centre Digital de services dédié à la démocratisation et à l'accélération des projets de boutiques en ligne. Nous mettons à la disposition des PMEs tous les outils et toutes les ressources nécessaires au lancement, à la réussite, et la pérennisation de leurs commerce en ligne. Shifti est votre "One Stop Shop" pour vos projet e-commerce.</p> <Link className="btn-simple" to="/about"><span>Read More<ArrowRightAltIcon/></span></Link>
                          <div className="social-icons social-border circle social-hover mt-5">
                              <h4 className="title">Follow Us</h4>
                              <ul className="list-inline">
                                  <li className="social-facebook"><a href="https://www.facebook.com/eStoresFactory"><FaFacebook /></a>
                                  </li>
                                
                                  <li className="social-gplus"><a href="https://www.instagram.com/estoresfactory/"><FaInstagram /></a>
                                  </li>
                             
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-8 py-0 md-px-5">
                      <div className="row">
                          <div className="col-lg-6 col-md-6 footer-list">
                              <h4 className="title">Useful Links</h4>
                              <div className="row">
                                  <div className="col-sm-5">
                                      <ul className="list-unstyled">
                                          <li><Link to="/about">A propos</Link>
                                          </li>
                                          <li><Link to="/services-single">Services</Link>
                                          </li>
                                          
                                      </ul>
                                  </div>
                                  <div className="col-sm-7">
                                      <ul className="list-unstyled">
                                          <li><Link to="/front-pricing">Offres</Link>
                                          </li>
                                          <li><Link to="/front-contact">Contact</Link>
                                          </li>
                                     
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 sm-mt-5">
                              <h4 className="title">Contact</h4>
                              <ul className="media-icon list-unstyled">
                                  <li>
                                      <p className="mb-0"><i className="flaticon-location" /> Résidence El Badr, Avenue Hédi Nouira, Ariana 2037,Tunisie</p>
                                  </li>
                                  <li><a href="mailto:themeht23@gmail.com"><i className="flaticon-email" /> hello@esftunisie.com</a>
                                  </li>
                                  <li><a href="tel:+216202869660"><i className="flaticon-call" /> +216 20 28 69 66</a>
                                  </li>
                                  <li><a href="tel:+21654822291"><i className="flaticon-call" /> +216 54 82 22 91</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="row mt-5">
                          <div className="col-lg-10 col-md-12 mr-auto">
                              <div className="align-items-center white-bg box-shadow px-3 py-3 radius d-md-flex justify-content-between">
                                  <h4 className="mb-0">NewsLetter</h4>
                                  <div className="subscribe-form sm-mt-2">
                                      <form id="mc-form" className="group" onSubmit={handleNewsletterSubmit} >

                                          <input type="email" value={email} name="email" onChange={handleNewsletterChange} className="email"  placeholder="Email Address" required="" />
                                          <button className="btn" type="submit"  style={{background:"#27558e",color:"#fff"}} >subscribe</button>
                                      </form>
                                      
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
           
        </div>
<div className="secondary-footer">
  <div className="container">
    <div className="copyright" style={{textAlign: 'center'}}>
      <div className="row align-items-center">
        <div className="col"> <span>Copyright 2020 | All Rights Reserved</span></div>
      </div>
    </div>
  </div>
</div>

      </div>
 
  </footer>
</div>
  );
}

export default Footer;
