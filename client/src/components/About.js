import React from 'react'
import Navbar from './Navbar'
import NavbarAcceuil from './NavbarAcceuil'
import Footer from './pages/Footer/Footer'

function About() {
    return (
        <div>
        <NavbarAcceuil />
        <div className="page-content">
        <section className="pos-r o-hidden">
        <section className="page-titlee o-hidden text-center"  style={{background:"#27558e",height:"30px"}}>
        <div className="d-none d-md-block" style={{marginTop:"-154px"}}><img className="img-fluid" src="deco/images/bg/08.png" /></div>

<div className="container">
  <div className="row align-items-center">
  <div class="col-md-12">


</div>
  </div>
</div>
</section>
  <div style={{position:"absolute",left:"27%",top:"54%",WebkitTransform:"translateX(-50%) translateY(-50%);"}} >
    <img className="img-fluid rotateme" src="deco/images/pattern/03.png" alt="" />
  </div>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-12 col-md-12">
        <div className="section-title">
          
          <h3 className="" style={{paddingTop:"27px"}}>Nous sommes votre <span style={{color:"#ff7810"}}>One Stop Shop</span><br/> de vos projets<span style={{color:"#ff7810"}}> E-commerce</span></h3> 
        </div>
       <p>eStores Factory est une plateforme de gestion de commerce électronique unifiée qui est le partenaire en ligne de choix aux marques qui opèrent en Tunisie et en Afrique. 
       Nous aidons les marques à gérer tous les aspects de leur commerce électronique à travers nos capacités de vente omnicanal et notre gestion des canaux. 
       Véritable pôle de compétences et laboratoire d’idées, constitué de collaborateurs éprouvés aux métiers du e-commerce et du digital, eStores Factory dispose des expertises et des outils propres à lui assurer une intervention adéquate et efficace auprès de ses clients.
       Notre mission est de permettre aux marques et aux détaillants de se connecter, de s'engager et de traiter avec leurs clients partout, à tout moment et de quelque manière que ce soit.
       Nous proposons des services de conseil, de marketing numérique, de développement informatique et d'exploitation des magasins, de service à la clientèle, de traitement et de livraison.</p>
      </div>
     
      

          
          </div></div>



      </section>
        <Footer />
        </div>
</div>
    )
}

export default About
