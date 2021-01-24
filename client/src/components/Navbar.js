import React, { useEffect, useState } from 'react'




  import {
    ScrollingProvider,
    useScrollSection,
    Section,
  } from 'react-scroll-section';
import {Link, withRouter} from 'react-router-dom'
import {isAuthenticated} from '../helpers/auth'
import { logout } from '../helpers/auth';
import PowerSettingsNewSharpIcon from '@material-ui/icons/PowerSettingsNewSharp';

function Navbar({history}) {

const serviceSection = useScrollSection('serviceUser');
const pricingSection = useScrollSection('pricingUser');

  const redirected= ()=>{
    localStorage.setItem('redirected','/process')
  }
  const handleLogout = (evt) => {
    logout(() => {
        history.push('/signin');
    });
};

    
    return (
       
      <div>
        <header id="site-header" className="header header-2">
          <div id="header-wrap">
            <div className="container">
            <div className="row">
              <div className="col-lg-12">
                
                <nav className="navbar navbar-expand-lg">
                <Link to="/" class="navbar-brand logo">
                    <img id="logo-white-img" className="img-center" src="deco/images/Logo-ESF.png" alt="" />
                    <img id="logo-img" className="img-center sticky-logo" src="deco/images/Logo-ESF.png" alt="" />
                </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto mr-auto">
                      
                      <li className="nav-item " data-toggle="hover"> <Link to="/" className="nav-link " >Home</Link>
                      </li>
                      <li className="nav-item " data-toggle="hover"> <Link to="/about" className="nav-link">Qui Somme Nous</Link></li>
                      <li className="nav-item " data-toggle="hover"> <Link to="/services" className="nav-link" >Services</Link>
                     
                      </li>
                      <li className="nav-item " data-toggle="hover"> <Link to="/offres" className="nav-link">Offres</Link>
                       
                      </li>
                      
                      
                     
                      <li className="nav-item " data-toggle="hover"> <Link to="/contact" className="nav-link" >Contact</Link>
                       
                      </li>
                   
                    </ul>
                  </div>
<div className="right-nav align-items-center d-flex justify-content-end list-inline" style={{marginRight:"30px"}}>
{ isAuthenticated() && isAuthenticated().role=== 0  ? (
 
<Link  to="/signin" onClick={handleLogout}>
  <button className="btn btn-white btn-sm"><PowerSettingsNewSharpIcon /></button>
  </Link>
):(
<Link  to="/signin">
  <button className="btn btn-white btn-sm">Login</button>
  </Link>
)}
    </div>
    <div>
   <a href="#" className="ht-nav-toggle"><span /></a>
   </div>

                 
                </nav>
              </div>
            </div>
          </div>
        </div>
     </header>
     <nav id="ht-main-nav"> <a href="#" className="ht-nav-toggle active"><span></span></a>
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <img className="img-fluid side-logo mb-3" src="assets/images/logo-ESF.png" alt="" />
                <p className="mb-5">E-stores Factory best way to achive your trading goals .</p>
                <div className="form-info">
                <h4 className="title">Contact info</h4>
                <ul className="contact-info list-unstyled mt-4">
                    <li className="mb-4"><i className="flaticon-location"></i><span>Address:</span>
                    <p>Naser 2, Tunis</p>
                    </li>
                    <li className="mb-4"><i className="flaticon-call"></i><span>Phone:</span><a href="tel:+912345678900">+216 25.392.018</a>
                    </li>
                    <li><i className="flaticon-email"></i><span>Email</span><a href="mailto:themeht23@gmail.com">faroukbr050@gmail.com</a>
                    </li>
                </ul>
                </div>
                <div className="social-icons social-colored mt-5">
                <ul className="list-inline">
                    <li className="mb-2 social-facebook"><a href="#"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="mb-2 social-twitter"><a href="#"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="mb-2 social-linkedin"><a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </li>
                    <li className="mb-2 social-gplus"><a href="#"><i className="fab fa-google-plus-g"></i></a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </nav>
       
</div>
    )
}

export default withRouter(Navbar) 
