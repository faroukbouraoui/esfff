import React from 'react'
import Navbar from './Navbar'
import './Pricing.css'
import { Link } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import CheckIcon from '@material-ui/icons/Check';
import { isAuthenticated } from '../helpers/auth';
import NavbarAcceuil from './NavbarAcceuil';
const FrontPricing = () => {

  const redirected= ()=>{
    localStorage.setItem('redirected','/process')
  }

   
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
<h1 style={{marginTop:"29px",marginBottom:"29px"}}>Nos Offres</h1>

</div>
  </div>
</div>
<div className="page-title-pattern"><img className="img-fluid" src="deco/images/bg/06.png" alt /></div>
</section>
      <div className="page-body" >
      <div className="container">
      <div className="row row-center">
        
        
          <div className="panel panel-default">
    <div className="col-lg-8 col-md-12 ml-auto mr-auto"><div><h2 >Choisissez votre plan</h2></div></div>
    
            <div className="panel-body">
              
    <table className="table table-striped table-bordered add-row-datatable" cellspacing="0" width="100%">
      <colgroup><colgroup
      />
      </colgroup><colgroup span={2} />
      <colgroup span={2} />
      <tbody>
      <tr>
          <td rowSpan={2} />
    
        </tr>
        <tr>
          <th scope="col" className="" style={{textAlign:"center"}}>Starter <br/><span style={{color:"rgb(39, 85, 142)"}}> 300Dt/M </span></th>
          <th scope="col" className=""  style={{textAlign:"center"}}>Market Growth <br/><span style={{color:"rgb(39, 85, 142)"}}>800Dt/M</span></th>
          <th scope="col" className=""  style={{textAlign:"center"}}>Pioneer <br/><span style={{color:"rgb(39, 85, 142)"}}>1500Dt/M</span></th>
          <th scope="col" className=""  style={{textAlign:"center"}}>Gold <br/><span style={{color:"rgb(39, 85, 142)"}}>2000Dt/M</span></th>
          
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
   
    
      </tbody></table>
     <div>
     {isAuthenticated() && isAuthenticated().role=== 0 ?(
      <Link to="/process">
        <button className="btn btn-hello btn-sm" style={{marginLeft:"44%"}} onClick={redirected}>Démarer</button>
      </Link>
    ):(
      <Link to="/signin">
      <button className="btn btn-hello btn-sm" style={{marginLeft:"44%"}} onClick={redirected}>Démarer</button>
    </Link>
    )}
      </div>
      <div>
      {isAuthenticated() && isAuthenticated().role=== 0 ?(
       <Link to="/process">
         <button className="btn btn-hello btn-sm" style={{marginLeft:"56%",marginTop:"-6%"}} onClick={redirected}>Démarer</button>
       </Link>
     ):(
       <Link to="/signin">
       <button className="btn btn-hello btn-sm"style={{marginLeft:"56%",marginTop:"-6%"}} onClick={redirected}>Démarer</button>
     </Link>
     )}
       </div>
       <div>
       {isAuthenticated() && isAuthenticated().role=== 0 ?(
        <Link to="/process">
          <button className="btn btn-hello btn-sm" style={{marginLeft:"72%",marginTop:"-10%"}} onClick={redirected}>Démarer</button>
        </Link>
      ):(
        <Link to="/signin">
        <button className="btn btn-hello btn-sm" style={{marginLeft:"70%",marginTop:"-10%"}}  onClick={redirected}>Démarer</button>
      </Link>
      )}
        </div>
        <div>
        {isAuthenticated() && isAuthenticated().role=== 0 ?(
         <Link to="/process">
           <button className="btn btn-hello btn-sm" style={{marginLeft:"87%",marginTop:"-14%"}}  onClick={redirected}>Démarer</button>
         </Link>
       ):(
         <Link to="/signin">
         <button className="btn btn-hello btn-sm" style={{marginLeft:"87%",marginTop:"-14%"}}  onClick={redirected}>Démarer</button>
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
