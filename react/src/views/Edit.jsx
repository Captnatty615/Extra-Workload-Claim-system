import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";


export default function Edit() {

    
    const location = useLocation();
    const claimId = location?.state?.claimId;
    console.log(`claimID is : ${claimId}`);
    const [state, setState] = useState({firstName: ``, lastName: ``, department: ``, academicRank: ``})

    useEffect(() => {
        if (claimId) {
           axios.post(`http://127.0.0.1:8000/api/get-current-data`, {claimId})
               .then(response => {
                   setState({
                       firstName: `${response.data.firstName}`,
                       lastName: `${response.data.lastName}`,
                       department: `${response.data.department}`,
                       academicRank: `${response.data.academicRank}`
              });
          })
          .catch(error => {
            console.log('Error fecthing report data: ', error);
          });
      }
        
    }, [claimId])

    const handleInput = (e) => {
        const fieldName = e.target.name;
    const value = e.target.value;
        console.log(`updating ${fieldName} to  ${value}`);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
        console.log(`${state.firstName}`)
    }
    let Navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstName', state.firstName);
        formData.append('lastName', state.lastName);
        formData.append('department', state.department);
        formData.append('academicRank', state.academicRank);
        formData.append('claimId', claimId);
        const response = await axios.post(`http://127.0.0.1:8000/api/save-updates`, formData)
        console.log(`message: `, response.data.message)
        Navigate('/Submit',{state: {claimId}})
  }
  
  const handleCancel = (e) => {
    e.preventDefault();
    Navigate("/Submit");
  }
    return (
        <form className="Edit-form">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
  
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                                    id="firstName"
                                    onChange={handleInput}
                                    value={state.firstName}
                                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                                    id="lastName"
                                    onChange={handleInput}
                                    value={state.lastName}
                                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Department
                </label>
                <div className="mt-2">
                <select
                    id="department"
                                    name="department"
                                    onChange={handleInput}
                                    value={state.department}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
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
  
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Academic Rank
                </label>
                <div className="mt-2">
                  <select
                    id="academicRank"
                                    name="academicRank"
                                    onChange={handleInput}
                                    value={state.academicRank}
                    autoComplete="academicRank"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="">Select Academic Rank</option>
              <option value="professor">Professor</option>
              <option value="associate_professor">Associate Professor</option>
              <option value="senior_lecturer">Senior Lecturer</option>
              <option value="lecturer">Lecturer</option>
              <option value="tutorial_assistant">Tutorial Assistant</option>
                  </select>
                            </div>
                            
                        </div>
            </div>
          </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" onClick={handleCancel} className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleUpdate}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
            </button>
            </div>
        </div>
      </form>
    
  )
}
