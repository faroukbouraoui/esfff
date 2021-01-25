import React from 'react';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
    <footer className="footer white-bg pos-r o-hidden bg-contain" data-bg-img="deco/images/pattern/01.png">
    <div className="round-p-animation"></div>
      <div className="primary-footer">
          <div className="container-fluid p-0">
              <div className="row">
                  <div className="col-lg-4 py-0">
                      <div className="ht-theme-info bg-contain bg-pos-r h-100 dark-bg text-white" data-bg-img="deco/images/bg/02.png">
                          <div className="footer-logo">
                              <a href="index.html">
                <img className="img-center" src="deco/images/Logo-ESF.png" alt="" />
                </a>
                          </div>
                          <p className="mb-3">Loptus Digital Marketing HTML5 Template Is fully responsible, Performance oriented theme, Build whatever you like with the Loptus, Loptus is the creative, modern HTML5 Template suitable for Your business.</p> <a className="btn-simple" href="#"><span>Read More <i className="fas fa-long-arrow-alt-right"></i></span></a>
                          <div className="social-icons social-border circle social-hover mt-5">
                              <h4 className="title">Follow Us</h4>
                              <ul className="list-inline">
                                  <li className="social-facebook"><a href="#"><i className="fab fa-facebook-f"></i></a>
                                  </li>
                                  <li className="social-twitter"><a href="#"><i className="fab fa-twitter"></i></a>
                                  </li>
                                  <li className="social-gplus"><a href="#"><i className="fab fa-google-plus-g"></i></a>
                                  </li>
                                  <li className="social-linkedin"><a href="#"><i className="fab fa-linkedin-in"></i></a>
                                  </li>
                                  <li className="social-skype"><a href="#"><i className="fab fa-skype"></i></a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-8 py-10 md-px-5">
                      <div className="row">
                          <div className="col-lg-6 col-md-6 footer-list">
                              <h4 className="title">Useful Links</h4>
                              <div className="row">
                                  <div className="col-sm-5">
                                      <ul className="list-unstyled">
                                          <li><a href="about-us.html">About Us</a>
                                          </li>
                                          <li><a href="service.html">Our Service</a>
                                          </li>
                                          <li><a href="case-studies-grid-3.html">Case Studies</a>
                                          </li>
                                          <li><a href="project-grid-3.html">Project</a>
                                          </li>
                                          <li><a href="faq.html">Faq</a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="col-sm-7">
                                      <ul className="list-unstyled">
                                          <li><a href="team.html">Our Team</a>
                                          </li>
                                          <li><a href="blog-grid-3.html">Blog</a>
                                          </li>
                                          <li><a href="privacy-policy.html">Privacy Policy</a>
                                          </li>
                                          <li><a href="terms-and-conditions.html">Terms & Condition</a>
                                          </li>
                                          <li><a href="contact.html">Contact Us</a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 sm-mt-5">
                              <h4 className="title">Contact us</h4>
                              <ul className="media-icon list-unstyled">
                                  <li>
                                      <p className="mb-0">423B, Road Wordwide Country, USA</p>
                                  </li>
                                  <li><a href="mailto:themeht23@gmail.com">themeht23@gmail.com</a>
                                  </li>
                                  <li><a href="tel:+912345678900">+91-234-567-8900</a>
                                  </li>
                                  <li><a href="tel:+912345678900">+91-234-567-8900</a>
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
      </div>

  </footer>
</div>
  );
}

export default Footer;
