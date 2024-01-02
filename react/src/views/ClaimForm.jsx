import  { useState } from 'react';
import Personal from './Personal';
import Claim from './Claim';
import axios from 'axios';


export default function ClaimForm() {
   
  const [personalData, setPersonalData] = useState({});
  const [claimData, setClaimData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handlePersonalSubmit = (data) => {
    setPersonalData(data);
    setCurrentStep(2);
  };

  const handleClaimSubmit = (data) => {
    setClaimData(data);
    submitFormData();
  };

  

  const submitFormData = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/claims', {
        personalData,
        claimData,
      });
      console.log('data added!');
    } catch (error) {
      console.error('error adding data');
    }
  };
  
    return (
        <>
        {currentStep === 1 && <Personal onSubmit={handlePersonalSubmit} />}
        {currentStep === 2 && <Claim onSubmit={handleClaimSubmit} />}
        </>
    )
}