import React from 'react';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
    <footer className="footer white-bg pos-r o-hidden bg-contain" data-bg-img="deco/images/pattern/01.png" style={{marginTop:"15px"}}>
    <div className="round-p-animation"></div>
      <div className="primary-footer">
          <div className="container-fluid p-0">
              <div className="row">
                  <div className="col-lg-4 py-0">
                      <div className="ht-theme-info bg-contain bg-pos-r h-100 dark-bg text-white" data-bg-img="deco/images/bg/02.png">
                          <div className="footer-logo">
                              <Link to="/">
                <img className="img-center" src="deco/images/Logo-ESF.png" alt="" />
                </Link>
                          </div>
                          <p className="mb-3">eStores Factory est le centre Digital de services dédié à la démocratisation et à l'accélération des projets de boutiques en ligne. Nous mettons à la disposition des PMEs tous les outils et toutes les ressources nécessaires au lancement, à la réussite, et la pérennisation de leurs commerce en ligne. eStores Factory est votre "One Stop Shop" pour vos projet e-commerce.</p> <Link className="btn-simple" to="/about"><span>Read More <i className="fas fa-long-arrow-alt-right"></i></span></Link>
                          <div className="social-icons social-border circle social-hover mt-5">
                              <h4 className="title">Follow Us</h4>
                              <ul className="list-inline">
                                  <li className="social-facebook"><a href="https://www.facebook.com/eStoresFactory"><i className="fab fa-facebook-f"></i></a>
                                  </li>
                                
                                  <li className="social-gplus"><a href="https://www.instagram.com/estoresfactory/"><i className="fab fa-instagram"></i></a>
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
                                      <p className="mb-0">Résidence El Badr, Avenue Hédi Nouira, Ariana 2037,Tunisie</p>
                                  </li>
                                  <li><a href="mailto:themeht23@gmail.com">hello@esftunisie.com</a>
                                  </li>
                                  <li><a href="tel:+912345678900">+216 20 28 69 66</a>
                                  </li>
                                  <li><a href="tel:+912345678900">+216 54 82 22 91</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="row mt-5">
                          <div className="col-lg-10 col-md-12 mr-auto">
                              <div className="align-items-center white-bg box-shadow px-3 py-3 radius d-md-flex justify-content-between">
                                  <h4 className="mb-0">NewsLetter</h4>
                                  <div className="subscribe-form sm-mt-2">
                                      <form id="mc-form" className="group">
                                          <input type="email" value="" name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required="" />
                                          <input className="btn" type="submit" name="subscribe" style={{background:"linear-gradient(90deg, rgba(255,120,16,1) 0%, rgba(255,94,44,1) 90%)"}} value="Subscribe" />
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
