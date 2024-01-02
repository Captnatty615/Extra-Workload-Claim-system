// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
//import axios from '../axios';
const Personal = ({ onSubmit }) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    academicRank: 'proffessor',
    department: 'accounting_finance',
  });
  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  let navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('onSubmit function in PErsonal: ', onSubmit)
    onSubmit(state);
    console.log('navigating')
    navigate('/Claim');
    
    //const response = await axios.post('http://127.0.0.1:8000/api/submit-Personal-Form', state);
    //if (response.data.status === 200) {
    //navigate('/Claim');
    //}
  }
 
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Personal Information</h1>
        </div>
      </header>
      <br></br>
      <main>
        <div className="default">
          <form onSubmit={handleSubmit} method='POST'>
            <label>Enter First Name:</label>
            <input type="text" name='firstName' onChange={handleInput} value={state.firstName} required />
            <br></br>
            <label>Enter Last Name:</label>
            <input type="text" name='lastName' onChange={handleInput} value={state.lastName} required />
            <br></br>
            <label>Academic Rank</label>
            <select name='academicRank' onChange={handleInput} value={state.academicRank}>
              <option value="professor">Professor</option>
              <option value="associate_professor">Associate Professor</option>
              <option value="senior_lecturer">Senior Lecturer</option>
              <option value="lecturer">Lecturer</option>
              <option value="tutorial_assistant">Tutorial Assistant</option>
            </select>
            <br></br>
            <label>Department</label>
            <select name='department' onChange={handleInput} value={state.department}>
              <option value="accounting_finance">ACCOUNTING AND FINANCE</option>
              <option value="economics_tax_management">ECONOMICS AND TAX MANAGEMENT</option>
              <option value="management_sciences">MANAGEMENT SCIENCES</option>
              <option value="computer_science">COMPUTER SCIENCE</option>
              <option value="information_technology">INFORMATION TECHNOLOGY</option>
              <option value="mathematics_acturial">MATHEMATICS AND ACTURIAL SCIENCES</option>
              <option value="banking_financial_services">BANKING AND FINANCIAL SERVICES</option>
              <option value="insurance">INSURANCE</option>
              <option value="social_protection">SOCIAL PROTECTION</option>
            </select>
            <br></br>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow">Continue</button>
          </form>
        </div>
      </main>
    </>
  )
};

Personal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Personal;