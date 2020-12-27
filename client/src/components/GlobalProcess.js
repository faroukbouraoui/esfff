import React, { useContext } from 'react'
import Firststep from './Firststep'
import Secondstep from './Secondstep'
import Thirdstep from './Thirdstep'
import {Stepper, StepLabel, Step} from '@material-ui/core'
import {multiStepContext} from '../StepContext'
import './GlobalProcess.css'
import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'
function GlobalProcess() {

    const {currentStep, finalData} = useContext(multiStepContext)

    function showStep(step){
        switch(step){
            case 1:
                return <Firststep />
            case 2:
                return <Secondstep />
            case 3:
                return <Thirdstep />

        }
    }
    return (
        <>
        <Navbar />
        <div className="process__section">
        <div className="container">
        <div className="stepper__position">
        <Stepper  style={{width:'40%'}} activeStep={currentStep -1} orientation="horizontal">
        <Step>
            <StepLabel></StepLabel>
        </Step>
        <Step>
        <StepLabel></StepLabel>
    </Step>
    <Step>
    <StepLabel></StepLabel>
</Step>
        </Stepper>
        </div>
        {showStep(currentStep)}
        
        </div>   
        </div>
        <Footer />
        </>
    )
}

export default GlobalProcess
