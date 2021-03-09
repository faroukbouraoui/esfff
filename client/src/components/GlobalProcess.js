import React, { useContext } from "react";
import Firststep from "./Firststep";
import Secondstep from "./Secondstep";
import Thirdstep from "./Thirdstep";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import "./GlobalProcess.css";
import Navbar from "./Navbar";
import Footer from "./pages/Footer/Footer";
import ZeroStep from "./ZeroStep";
import { Fragment } from "react";
import NavbarAcceuil from "./NavbarAcceuil";
function GlobalProcess() {
  const { currentStep } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
     case 1:
       return <ZeroStep/>;
      case 2:
        return <Firststep  />;
      case 3:
        return <Secondstep />;

      case 4:
        return <Thirdstep />;

     
    }
  }
  return (
    <Fragment>
      <Navbar />
      <div className="grey-bg pos-r text-center">
      <div className="process__section">
      <div style={{position:"absolute",left:"27%",top:"18%",WebkitTransform:"translateX(-50%) translateY(-50%);"}}>
        <img className="img-fluid rotateme" src="deco/images/pattern/03.png" alt="" />
      </div>
        <div className="container">
          <div className="stepper__position">
            <Stepper
              style={{ width: "70%",marginLeft:"173px" }}
              activeStep={currentStep - 1}
              orientation="horizontal"
            >
            <Step>
            <StepLabel>Mes coordonnées</StepLabel>
          </Step>
              <Step>
                <StepLabel>Mon Entreprise</StepLabel>
              </Step>
              <Step>
                <StepLabel>Mon package</StepLabel>
              </Step>
              <Step>
                <StepLabel>Mon site</StepLabel>
              </Step>
             
            </Stepper>
          </div>
          {showStep(currentStep)}
        </div>
      </div>
      </div>
      <Footer />
      </Fragment>

  )
}
export default GlobalProcess


