import React, { useEffect, useState } from 'react'
import GlobalProcess from './components/GlobalProcess'

export const multiStepContext = React.createContext()
 const StepContext = () =>{
     const [currentStep, setStep] = useState(1)
     const [userData, setUserData] = useState([])
     const [finalData, setFinalData] = useState([])

     useEffect(() => {
        window.scrollTo(0, 0);
        
         
     }, [window.scrollTo(0, 0)])
    return (
        <div>
            <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData}}>
                <GlobalProcess />
            </multiStepContext.Provider>
        </div>
    )
}

export default StepContext
