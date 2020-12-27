import React, { useContext } from "react";
import { setLocalStorage } from "../helpers/localStorage";
import { multiStepContext } from "../StepContext";

import { Link } from "react-router-dom";
import { Button } from "./Button";
export default function Thirdstep() {
  const { setStep, userData, setUserData, submitData } = useContext(
    multiStepContext
  );
  const validerstepThree = (name) => {
    setUserData({ ...userData, offer: name });
    setLocalStorage("processValues", userData);
    setStep(3);
  };
  return (
    <div>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">
            L'offre qui convient a vos besoins !
          </h1>
          <p className="pricing__description">
            Une plateforme unifiée, dotée de toutes les fonctionnalités
            e-commerce et de point de vente qu'il vous faut pour créer, gérer et
            développer votre activité.
          </p>
          <div className="pricing__container">
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <img
                  src="/img/shop.png"
                  className="iconimg"
                  alt="icon-pricing"
                />
                <h2>
                  STARTER
                  <br /> 599 <sup>dt</sup>
                  <span>/mois</span>{" "}
                </h2>
              </div>
              <ul className="pricing__container-features">
                <li>Conception de la boutique en ligne</li>
                <li>Nom de domaine, Hébergement et e-mail</li>
                <li>Gestion des commandes et reclamations</li>
                <li>Assistance technique par mail</li>
                <li>Sauvgarde mensuel de la boutique</li>
              </ul>
              <Button
                buttonSize="btn--wide"
                onClick={() => validerstepThree("STARTER")}
                buttonColor="primary"
              >
                Choose Plan
              </Button>
            </div>

            <div className="pricing__container-cardInfo">
              <div className="icon">
                <img
                  src="/img/Groupe 2228.png"
                  className="iconimg"
                  alt="icon-pricing"
                />
                <h2>
                  MARKET GROWTH
                  <br /> 599 <sup>dt</sup>
                  <span>/mois</span>{" "}
                </h2>
              </div>
              <ul className="pricing__container-features">
                <li>
                  Tous les aventages du pack <span>Starter</span>
                </li>
                <li>Création et envoi de newsletters</li>
                <li>2 rapport de stats / Ans</li>
              </ul>
              <Button
                buttonSize="btn--wide"
                onClick={() => validerstepThree("MARKET GROWTH")}
                buttonColor="primary"
              >
                Choose Plan
              </Button>
            </div>

            <div className="pricing__container-cardInfo">
              <div className="icon">
                <img
                  src="/img/company (1).png"
                  className="iconimg"
                  alt="icon-pricing"
                />
                <h2>
                  PIONEER
                  <br /> 1000 <sup>dt</sup>
                  <span>/mois</span>{" "}
                </h2>
              </div>
              <ul className="pricing__container-features">
                <li>Unlimited Transactions</li>
                <li>5% Cash Back</li>
                <li>Unlimited Spending</li>
              </ul>
              <Button
                buttonSize="btn--wide"
                onClick={() => validerstepThree("PIONEER")}
                buttonColor="primary"
              >
                Choose Plan
              </Button>
            </div>

            <div className="pricing__container-cardInfo">
              <div className="icon">
                <img
                  src="/img/Tracé 63.png"
                  className="iconimg"
                  alt="icon-pricing"
                />
                <h2>
                  GOLD
                  <br /> 2000 <sup>dt</sup>
                  <span>/mois</span>{" "}
                </h2>
              </div>
              <ul className="pricing__container-features">
                <li>Unlimited Transactions</li>
                <li>5% Cash Back</li>
                <li>Unlimited Spending</li>
              </ul>
              <Button
                buttonSize="btn--wide"
                onClick={() => validerstepThree("GOLD")}
                buttonColor="primary"
              >
                Choose Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
