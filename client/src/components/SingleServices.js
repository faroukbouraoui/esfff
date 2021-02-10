import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../redux/actions/serviceActions';
import Navbar from './Navbar'
import './ServiceSingle.css'
import Footer from './pages/Footer/Footer';
import NavbarAcceuil from './NavbarAcceuil';
const SingleServices = () => {

  const dispatch = useDispatch ();
  const {services} =useSelector(state => state.services)
  
useEffect(() => {
dispatch(getServices())
}, [dispatch])

var tab1 = services.splice(0,4);
console.log(tab1)
var tab2 = services.splice(4,8);
console.log(tab2)

    return (
<div>
<NavbarAcceuil/>
<section className="o-hidden" >
<section className="page-titlee o-hidden text-center"  style={{background:"#27558e",height:"30px"}}>
<div className="d-none d-md-block" style={{marginTop:"-154px"}}><img className="img-fluid" src="deco/images/bg/08.png" /></div>

<div className="container">
<div className="row align-items-center">
<div class="col-md-12">


</div>

</div>
</div>
</section>
<div className="container">
  <div className="row align-items-center">
  <div class="col-md-12">
<h1 style={{marginTop:"29px"}}>Nos services</h1>

</div>
  </div>
</div>
  <div className="container" style={{marginTop:"5%"}}>
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-12">
        <div className="info-img pos-r">
          <img className="img-fluid topBottom" src="deco/images/about/02.png" alt />
        </div>
      </div>
      <div className="col-lg-6 col-md-12 md-mt-5">
        <div className="section-title mb-4">
          <h2 className="title">Mise à disposition de boutiques en ligne </h2> 
          <p className="mb-0 text-black">à partir d’un simple formulaire, nous vous fournissons votre e-commerce prêt à la vente de vos produits et de vos services. Votre boutique en ligne n'est qu'à quelques clics.</p>
        </div>
        <div className="row">
        <div className="col-4">
        <ul className="list-unstyled list-icon">
          <li className="mb-3"><i className="flaticon-tick" />Web Design & UX/UI</li>
          <li className="mb-3"><i className="flaticon-tick" />Hébergement</li>
          <li><i className="flaticon-tick" />Sécurité des données</li>
        </ul>
        </div>
        <div className="col-8">
        <ul className="list-unstyled list-icon">
          <li className="mb-3"><i className="flaticon-tick" />Adaptation régionale multilingue et multidevises </li>
          <li className="mb-3"><i className="flaticon-tick" />Maintenance et mises à jour</li>
          <li><i className="flaticon-tick" />Payements en ligne </li>
        </ul>
        </div>
        </div>

        
      </div>
    </div>
  </div>
</section>

<section className="o-hidden" >
  <div className="container" style={{marginTop:"5%"}}>
    <div className="row align-items-center">
      
      <div className="col-lg-6 col-md-12 md-mt-5">
        <div className="section-title mb-4">
          <h2 className="title">Marketing et communication ciblée  </h2> 
          <p className="mb-0 text-black">Nous optimisons vos campagnes en ligne en temps réel pour atteindre les résultats commerciaux souhaités. Ayez une longueur d'avance sur vos concurrents grâce à l'accès aux toutes dernières technologies de Marketing Digital et maximisez votre activité en ligne avec des publicités personnalisées. Le marketing de performance se concentre sur trois activités claires : l'acquisition, l'activation et la rétention.</p>
        </div>
        <div className="row">
        <div className="col-6">
        <ul className="list-unstyled list-icon">
          <li className="mb-3"><i className="flaticon-tick" />Gestion des réseaux sociaux</li>
          <li className="mb-3"><i className="flaticon-tick" />Compagnes de promotions </li>
          <li className="mb-3"><i className="flaticon-tick" />Gestion des contenus </li>
          <li className="mb-3"><i className="flaticon-tick" />Animation blog</li>
          <li><i className="flaticon-tick" />Newsletters</li>
        </ul>
        </div>
        <div className="col-6">
        <ul className="list-unstyled list-icon">
          <li className="mb-3"><i className="flaticon-tick" />Montage vidéo et animation 2D</li>
          <li className="mb-3"><i className="flaticon-tick" />SEO</li>
          <li className="mb-3"><i className="flaticon-tick" />Landing page design</li>
          <li className="mb-3"><i className="flaticon-tick" />Automated journey builder</li>
          <li><i className="flaticon-tick" />Marketing analytics</li>
        </ul>
        </div>
        </div>
        
        
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="info-img pos-r">
          <img className="img-fluid topBottom" src="deco/images/banner/04.png" alt />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="o-hidden" >
  <div className="container" style={{marginTop:"5%"}}>
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-12">
        <div className="info-img pos-r">
          <img className="img-fluid topBottom" src="deco/images/banner/02.png" alt />
        </div>
      </div>
      <div className="col-lg-6 col-md-12 md-mt-5">
        <div className="section-title mb-4">
          <h2 className="title">Gestion des opération quotidiennes  </h2> 
          <p className="mb-0 text-black">De la consultation de votre site jusqu’à la livraison de vos produits, nous optimisons chaque point de contact entre votre marque et vos clients pour assurer une expérience omnicanale fluide. </p>
        </div>
        <div className="row">
        <div className="col-6">
        <ul className="list-unstyled list-icon">
          <li className="mb-3"><i className="flaticon-tick" />Gestion des commandes</li>
          <li className="mb-3"><i className="flaticon-tick" />Gestion des livraisons et tracking</li>
          <li><i className="flaticon-tick" />Gestion des retours</li>
        </ul>
        </div>
        <div className="col-6">
        <ul className="list-unstyled list-icon">
          <li className="mb-3"><i className="flaticon-tick" />Gestion des paiements</li>

          <li><i className="flaticon-tick" />Intégration CRM et solutions d’entreprise</li>
        </ul>
        </div>
        </div>

        
      </div>
    </div>
  </div>
</section>

<section className="o-hidden" >
  <div className="container" style={{marginTop:"5%"}}>
    <div className="row align-items-center">
      
      <div className="col-lg-6 col-md-12 md-mt-5">
        <div className="section-title mb-4">
          <h2 className="title">Gestion des livraisons et des paiements  </h2> 
          <p className="mb-0 text-black">La Tunisie présente de nombreux défis propres concernant l’infrastructure de livraison et de paiement. Les entreprises font confiance à eStores Factory pour ses solutions adaptées au contexte régional et international.</p>
        </div>
       
        
        
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="info-img pos-r">
          <img className="img-fluid topBottom" src="deco/images/about/livraison-01.png" alt />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="o-hidden section__padding" >
  <div className="container" style={{marginTop:"5%"}}>
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-12">
        <div className="info-img pos-r">
          <img className="img-fluid topBottom" src="deco/images/about/service-06.png" alt />
        </div>
      </div>
      <div className="col-lg-6 col-md-12 md-mt-5">
        <div className="section-title mb-4">
          <h2 className="title">Solutions de service client </h2> 
          <p className="mb-0 text-black">eStores Factory dispose d'une équipe de service client dédiée et expérimentée prête à aider les acheteurs à tout moment. Des solutions d'appel aux chats en direct, notre équipe vous fournira une assistance dans en Arabe, Français ou en Anglais. </p>
        </div>
       

        
      </div>
    </div>
  </div>
</section>

  <Footer />
</div>

    )
}

export default SingleServices


/*
<section className="animatedBackground page-titlee o-hidden text-center grey-bg bg-contain " style={{backgroundImage:"url('deco/images/pattern/05.png')"}} >
<div className="container">
  <div className="row align-items-center">
  <div class="col-md-12">
<h1 class="title">Services</h1>

</div>
  </div>
</div>
<div className="page-title-pattern"><img className="img-fluid" style={{backgroundImage:"url('deco/images/bg/06.png')"}} alt /></div>
</section>
  <section className="pos-r bg-contain bg-pos-r pt-0" style={{backgroundImage:"url('deco/images/bg/02.png')"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 image-column bg-contain bg-pos-l" style={{backgroundImage:"url('deco/images/pattern/07.png')",marginTop:"30%"}}>
          <img className="img-fluid" src="deco/images/about/services-02.png" alt />
        </div>
        
        <div className="col-lg-6 col-md-12 ml-auto md-mt-5 pl-lg-5">
          <div className="section-title">
            <h6>How It Work</h6>
            <h2 className="title">Three Step For Started Working Process</h2> 
          </div>
          {tab1.map((s,i=1)=>(
          <div className="work-process style-2">
            <div className="work-process-inner" style={{padding:"20px",paddingLeft:"80px"}}> <span className="step-num" data-bg-color="#cd113a">{i}</span>
              <h4>{s.serviceName}</h4>
              <p className="mb-0">{s.serviceDesc}</p>
            </div>
          </div>
          ))}
        </div>
        
      </div>
      <div className="row">
     
      
      <div className="col-lg-6 col-md-12 ml-auto md-mt-5 pl-lg-5">
        
        {tab2.map((s,i=1)=>(
        <div className="work-process style-2">
          <div className="work-process-inner" style={{padding:"20px",paddingLeft:"80px"}}> <span className="step-num" data-bg-color="#cd113a">{i}</span>
            <h4>{s.serviceName}</h4>
            <p className="mb-0">{s.serviceDesc}</p>
          </div>
        </div>
        ))}
      </div>
      <div className="col-lg-6 image-column bg-contain bg-pos-l" style={{backgroundImage:"url('deco/images/pattern/07.png')",marginTop:"20%"}}>
      <img className="img-fluid" src="deco/images/about/01.png" alt />
    </div>
    </div>
    <div className="row">
      <div className="col-lg-6 image-column bg-contain bg-pos-l" style={{backgroundImage:"url('deco/images/pattern/07.png')",marginTop:"20%"}}>
        <img className="img-fluid" src="deco/images/about/services-01.png" alt />
      </div>
      
      <div className="col-lg-6 col-md-12 ml-auto md-mt-5 pl-lg-5">
        
        {services.map((s,i=1)=>(
        <div className="work-process style-2">
          <div className="work-process-inner" style={{padding:"23px",paddingLeft:"80px"}}> <span className="step-num" data-bg-color="#cd113a">{i}</span>
            <h4>{s.serviceName}</h4>
            <p className="mb-0">{s.serviceDesc}</p>
          </div>
        </div>
        ))}
      </div>
      
    </div>
      
    </div>
  </section>

*/