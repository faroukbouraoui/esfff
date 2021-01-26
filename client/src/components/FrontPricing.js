import React from 'react'
import Navbar from './Navbar'
import './Pricing.css'
import { Link } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import CheckIcon from '@material-ui/icons/Check';
import { isAuthenticated } from '../helpers/auth';
const FrontPricing = () => {

  const redirected= ()=>{
    localStorage.setItem('redirected','/process')
  }

   
    return (
      <div>
      <Navbar/>
      <section className="page-titlee o-hidden text-center grey-bg bg-contain animatedBackground"  data-bg-img="deco/images/pattern/05.png">
<div className="container">
  <div className="row align-items-center">
  <div class="col-md-12">
<h1 class="title">Nos Offres</h1>

</div>
  </div>
</div>
<div className="page-title-pattern"><img className="img-fluid" src="deco/images/bg/06.png" alt /></div>
</section>
      <div className="page-body" style={{marginTop:"0px"}}>
      <div className="row">
        <div className="col-12">
          <div className="panel panel-default">
    <div className="col-lg-8 col-md-12 ml-auto mr-auto"><div className="section-title"><h6 style={{marginLeft: "50%"}}>Offres</h6><h2 style={{marginLeft: "35%"}} className="title">choose your plan</h2></div></div>
    
            <div className="panel-body">
              
    <table class="table table-striped table-bordered add-row-datatable" cellspacing="0" width="100%">
      <colgroup><col />
      </colgroup><colgroup span={2} />
      <colgroup span={2} />
      <tbody><tr>
          <td rowSpan={2} />
    
        </tr>
        <tr>
          <th scope="col" className="">Starter</th>
          <th scope="col" className="">Marketshare Growth</th>
          <th scope="col" className="">Pionner</th>
          <th scope="col" className="">Gold</th>
          
        </tr>
        <tr>
          <th scope="row">Nom de domaine et Hébergement + Adresses e-mail
          </th>
          <td className=""><CheckIcon/></td>
          <td className=""><CheckIcon/></td>
          <td className=""><CheckIcon/></td>
          <td className=""><CheckIcon/></td>      
        </tr>
        <tr>
          <th scope="row">Conception et mise en œuvre de la boutique en ligne</th>
          <td className=""><CheckIcon/></td>
          <td className=""><CheckIcon/></td>
          <td className=""><CheckIcon/></td>
          <td className=""><CheckIcon/></td>
          
        </tr>
        <tr>
        <th scope="row">Gestion des commandes et des réclamations</th>
        <td className=""><CheckIcon/></td>
        <td className=""><CheckIcon/></td>
        <td className=""><CheckIcon/></td>
        <td className=""><CheckIcon/></td>
      </tr>
      <tr>
      <th scope="row">Formation et Coaching mensuels</th>
      <td className=""><CheckIcon/></td>
      <td className=""><CheckIcon/></td>
      <td className=""></td>
      <td className=""></td>
    </tr>
      <tr>
      <th scope="row">Gestion des livraisons</th>
      <td className=""></td>
      <td className=""></td>
      <td className=""><CheckIcon/></td>
      <td className=""><CheckIcon/></td>
    </tr>
    <tr>
    <th scope="row">Référencement SEO</th>
    <td className=""></td>
    <td className=""></td>
    <td className="">3 mot clé</td>
    <td className="">10 mot clé + SMO</td>
    </tr>
    <tr>
    <th scope="row">Création et envoi de newsletters</th>
    <td className=""></td>
    <td className="">Semestriel</td>
    <td className="">Trimestriel</td>
    <td className="">Mensuel</td>
    </tr>
    <tr>
    <th scope="row">Community Management</th>
    <td className=""></td>
    <td className=""></td>
    <td className=""><CheckIcon/></td>
    <td className=""><CheckIcon/></td>
    </tr>
    <tr>
    <th scope="row"><span style={{marginLeft:"30px"}}>- Commentaires et messagerie</span></th>
    <td className=""></td>
    <td className=""></td>
    <td className=""></td>
    <td className=""></td>
    </tr>
    <tr>
    <th scope="row"><span style={{marginLeft:"30px"}}>- publications sur les réseaux sociaux</span></th>
    <td className=""></td>
    <td className=""></td>
    <td className="">4 par semaine</td>
    <td className="">10 par semaine</td>
    </tr>
    <tr>
    <th scope="row">Préparation et gestion des campagnes promotionnelles (1 produit ou une marque)</th>
    <td className=""></td>
    <td className="">1 promo chaque semestre</td>
    <td className="">1 promo chaque trimestre</td>
    <td className="">1 promo chaque mois</td>
    </tr>
    <tr>
    <th scope="row">Mises à jour de la boutique</th>
    <td className=""></td>
    <td className="">1 Mise à jour chaque semestre</td>
    <td className="">1 Mise à jour chaque trimestre</td>
    <td className="">1 Mise à jour chaque trimestre</td>
    </tr>
    <tr>
    <th scope="row">Assistance Technique</th>
    <td className="">Mail</td>
    <td className="">Mail et téléphone</td>
    <td className="">Mail et téléphone</td>
    <td className="">Mail et téléphone</td>
    </tr>
    <tr>
    <th scope="row"></th>
    <td scope="col" className="col__colorone">300dt/mois</td>
    <td scope="col" className="col__colorone">800dt/mois</td>
    <td scope="col" className="col__colorone">1500dt/mois</td>
    <td scope="col" className="col__colorone">2000dt/mois</td>
    
    </tr>
      </tbody></table>
     <div>
     {isAuthenticated() && isAuthenticated().role=== 0 ?(
      <Link to="/process">
        <button className="btn btn-orange btn-lg" style={{marginLeft:"50%"}} onClick={redirected}>Démarer</button>
      </Link>
    ):(
      <Link to="/signin">
      <button className="btn btn-orange btn-lg" style={{marginLeft:"50%"}} onClick={redirected}>Démarer</button>
    </Link>
    )}
      </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
      </div>

    )
    
}

export default FrontPricing
