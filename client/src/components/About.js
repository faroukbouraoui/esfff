import React from 'react'
import Navbar from './Navbar'
import Footer from './pages/Footer/Footer'

function About() {
    return (
        <div>
        <Navbar />
        <div className="page-content">
        <section className="pos-r o-hidden">
        <section className="page-titlee o-hidden text-center grey-bg bg-contain animatedBackground"  data-bg-img="deco/images/pattern/05.png">
<div className="container">
  <div className="row align-items-center">
  <div class="col-md-12">
<h1 class="title">Estres Factory</h1>

</div>
  </div>
</div>
<div className="page-title-pattern"><img className="img-fluid" src="deco/images/bg/06.png" alt /></div>
</section>
  <div style={{position:"absolute",left:"27%",top:"18%",WebkitTransform:"translateX(-50%) translateY(-50%);"}} >
    <img className="img-fluid rotateme" src="deco/images/pattern/03.png" alt="" />
  </div>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-12 col-md-12">
        <div className="section-title">
          
          <h2 className="title">C'est quoi Estores Factory</h2> 
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
