import React from 'react'
import Navbar from './Navbar'
import Footer from './pages/Footer/Footer'

function FrontContact() {
    return (
        <div>
           <Navbar /> 
           <div>
<section className="contact-1" data-bg-img="deco/images/pattern/02.png" >
<section className="page-titlee o-hidden text-center grey-bg bg-contain animatedBackground"  data-bg-img="deco/images/pattern/05.png">
<div className="container">
  <div className="row align-items-center">
  <div class="col-md-12">
<h1 class="title">Contactez Nous</h1>

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
              <form id="contact-form" className="row">
                <div className="messages"></div>
                <div className="form-group col-md-6">
                  <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required="required" data-error="Name is required." />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group col-md-6">
                  <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group col-md-12">
                  <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required="required" data-error="Phone is required" />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group col-md-12">
                  <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="col-md-12">
                <button className="btn btn-orange btn-radius" style={{marginLeft:"28%",marginTop:"-33px"}}><span>Send Message</span>
                </button>
                </div>
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
