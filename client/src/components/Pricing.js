import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#07516E', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>L'offre qui convient a vos besoins !</h1>
          <p className="pricing__description">Une plateforme unifiée, dotée de toutes les fonctionnalités e-commerce et de point de vente qu'il vous faut pour créer, gérer et développer votre activité.</p>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                 <img src="/img/shop.png" className="iconimg" alt="icon-pricing" />
                <h2>STARTER<br/> 599 <sup>dt</sup><span>/mois</span> </h2>
               
                
                
                </div>
                <ul className='pricing__container-features'>
                  <li>Conception de la boutique en ligne</li>
                  <li>Nom de domaine, Hébergement et e-mail</li>
                  <li>Gestion des commandes et reclamations</li>
                  <li>Assistance technique par mail</li>
                  <li>Sauvgarde mensuel de la boutique</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                <img src="/img/Groupe.png" className="iconimg" alt="icon-pricing" />
                <h2>MARKET GROWTH<br/> 599 <sup>dt</sup><span>/mois</span> </h2>
               
                
                
                </div>
                <ul className='pricing__container-features'>
                  <li>Tous les aventages du pack <span>Starter</span></li>
                  <li>Création et envoi de newsletters</li>
                  <li>2 rapport de stats / Ans</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
                <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                    <div className='icon'>
                    <img src="/img/company.png" className="iconimg" alt="icon-pricing" />
                <h2>PIONEER<br/> 1000 <sup>dt</sup><span>/mois</span> </h2>
               
                
                
                </div>
                    <ul className='pricing__container-features'>
                    <li>Unlimited Transactions</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Spending</li>
                    </ul>
                    <Button buttonSize='btn--wide' buttonColor='primary'>
                    Choose Plan
                    </Button>
                </div>
                </Link>
                <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                <div className='icon'>
                <img src="/img/Trace.png" className="iconimg" alt="icon-pricing" />
                <h2>GOLD<br/> 2000 <sup>dt</sup><span>/mois</span> </h2>
               
                
                
                </div>
                <ul className='pricing__container-features'>
                    <li>Unlimited Transactions</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Spending</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                    Choose Plan
                </Button>
                </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;