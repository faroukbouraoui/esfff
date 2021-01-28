import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import Navbar from './Navbar'
import Footer from './pages/Footer/Footer'
import {createContact} from '../redux/actions/contactActions'
import { clearMessages } from '../redux/actions/messageActions';
import { Fragment } from 'react';
function FrontContact() {

  const { loading } = useSelector(state => state.loading);
	const { successMsg, errorMsg } = useSelector(state => state.messages);
	
   

  const dispatch = useDispatch();
  const [clientSideError, setClientSideError] = useState('');
  

  const [contactData , setContactData] = useState({
		
		nom: '',
    email: '',
    phone:'',
    demande:''
		
		
  });
  
  const {
		nom,
		email,
    phone,
    demande,

	} = contactData;


  const handleMessages = evt => {
		dispatch(clearMessages());
		setClientSideError('');
  };
  
  const handleContactChange = evt => {
		setContactData({
			...contactData,
			[evt.target.name]: evt.target.value,
		});
  };
  
  
  
  const handleContactSubmit = evt => {
		evt.preventDefault();

    if (nom === " ") {
			setClientSideError('Please select an image');
		} else if (
			isEmpty(email) ||
      isEmpty(phone) ||
      isEmpty(demande)
     
			
		) {
			setClientSideError('Please enter all fields');
		}  else {
			let formData = new FormData();

			formData.append('nom', nom);
			formData.append('email', email);
      formData.append('phone', phone);
      formData.append('demande', demande);
			
		

			dispatch(createContact(formData));
			setContactData({
				nom: "",
				email: '',
        phone: '',
        demande:'',
				
		
			});
    }
	};



    return (
        <div>
           <Navbar /> 
           <div>
<section className="contact-1"style={{backgroundImage:"url('deco/images/pattern/02.png')"}} >
<section className="page-titlee o-hidden text-center grey-bg bg-contain animatedBackground" style={{backgroundImage:"url('deco/images/pattern/05.png')"}}>
<div className="container">
  <div className="row align-items-center">
  <div class="col-md-12">
<h1 class="title">Contactez Nous</h1>
<div onClick={handleMessages}></div>
</div>
  </div>
</div>
<div className="page-title-pattern"><img className="img-fluid" src="deco/images/bg/06.png" alt /></div>
</section>
<div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7">
            <div className="section-title mb-2">
              <h6>Get In Touch</h6>
              <h2>Contact Us</h2> 
            </div>
            <div className="contact-main">
              <form  className="row">
              {clientSideError && showErrorMsg(clientSideError)}
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}
                
                {loading ?(
                  <div className='text-center'>
                  {showLoading()}
                  </div>
                ):(
                  <Fragment>
                <div className="form-group col-md-6">
                  <input  type="text" value={nom} onChange={handleContactChange} name="nom" className="form-control" placeholder="Name" required="required" data-error="Name is required." />
                
                </div>
                <div className="form-group col-md-6">
                  <input  type="email" name="email" value={email} onChange={handleContactChange} className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                
                </div>
                <div className="form-group col-md-12">
                  <input  type="text" name="phone" value={phone} onChange={handleContactChange} className="form-control" placeholder="Phone" required="required" data-error="Phone is required" />
                
                </div>
                <div className="form-group col-md-12">
                  <textarea  name="demande" value={demande} onChange={handleContactChange} className="form-control" placeholder="Message" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                
                </div>
                <div className="col-md-12">
                <button type="submit" onClick={handleContactSubmit} className="btn btn-orange btn-radius" style={{marginLeft:"28%",marginTop:"-33px"}}><span>Send Message</span>
                </button>
                </div>
                </Fragment>
                )}
              </form>
              
            </div>
            
            
          </div>
          <div className="col-lg-5 col-md-5 ml-auto sm-mt-5">
            <ul className="contact-info list-unstyled">
              <li className="mb-4"><i className="flaticon-location"></i><span>Address:</span>
                <p>423B, Road Wordwide Country, USA</p>
              </li>
              <li className="mb-4"><i className="flaticon-email"></i><span>Email</span><a href="mailto:themeht23@gmail.com"> themeht23@gmail.com</a>
              </li>
              <li className="mb-4"><i className="flaticon-call"></i><span>Phone:</span><a href="tel:+912345678900">+91-234-567-8900</a>
              </li>
              <li><i className="flaticon-user"></i><span>Fax:</span><a href="tel:+912345678900">+91-234-567-8900</a>
              </li>
            </ul>
          </div>            
        </div>
</div>
</section>
</div>
<Footer />
        </div>
    )
}

export default FrontContact
