// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import axios from '../axios';

export default function Personal() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    academicRank: '',
    department: '',
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
    const response = await axios.post('http://127.0.0.1:8000/api/submit-Personal-Form', state);
    if (response.data.status === 200) {
      const claimId = response.data.claimId; // Replace with actual claimId
      navigate('/claim', { state: { claimId } });
    }

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
          <form onSubmit={handleSubmit}>
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Enter First Name:</label>
            <div className='mt-2'>
            <input type="text" name='firstName' onChange={handleInput} value={state.firstName}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
              </div>
            </div>
            < div className='sm:col-span-3'>
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Enter Last Name:</label>
              <div className='mt-2'>
                <input type="text" name='lastName' onChange={handleInput} value={state.lastName}
                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  required />
                </div>
            </div>
            <div className='sm-col-span-3'>
              <label htmlFor="academic-rank" className="block text-sm font-medium leading-6 text-gray-900">Academic Rank</label>
              <div className='mt-2'>
            <select name='academicRank' onChange={handleInput} value={state.academicRank} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option value="">Select Academic Rank</option>
              <option value="professor">Professor</option>
              <option value="associate_professor">Associate Professor</option>
              <option value="senior_lecturer">Senior Lecturer</option>
              <option value="lecturer">Lecturer</option>
              <option value="tutorial_assistant">Tutorial Assistant</option>
                </select>
                </div>
              </div>
            < div className='sm-col-span-3'>
              <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">Department</label>
              <div className='mt-2'>
            <select name='department' onChange={handleInput} value={state.department}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option value="">Choose your department</option>
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
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Continue</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}