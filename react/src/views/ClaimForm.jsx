import  { useState } from 'react';
import Personal from './Personal';
import Claim from './Claim';
import axios from 'axios';


export default function ClaimForm() {
   
  const [personalData, setPersonalData] = useState({});
  const [claimData, setClaimData] = useState({});
  //const [currentStep, setCurrentStep] = useState(1);

  const handlePersonalSubmit = (data) => {
    console.log("data coming from personal.jsx")
    setPersonalData(data);
    //setCurrentStep(2);
  };

  const handleClaimSubmit = (data) => {
    console.log("data coming from claim.jsx")
    setClaimData(data);
    submitFormData();
  };

  

  const submitFormData = async () => {
    console.log("data is handled to api")
    try {
      console.log('data is sent to api');
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
        <Personal onSubmit={handlePersonalSubmit} />
        <Claim onSubmit={handleClaimSubmit} />
        </>
    )
}