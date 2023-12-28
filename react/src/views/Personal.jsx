import React from 'react'
import { useHistory } from 'react-router-dom'
export default function Personal() {

  function PersonalForm() {
    let history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();

      history.push('/react/src/views/Claim.jsx')
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
                <div className="personal">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <label>Enter First Name:</label>
            <input type="text" required />
            <br></br>
            <label>Enter Last Name:</label>
            <input type="text" required />
            <br></br>
            <label>Academic Rank</label>
            <select>
              <option value="professor">Professor</option>
              <option value="associate_professor">Associate Professor</option>
              <option value="senior_lecturer">Senior Lecturer</option>
              <option value="lecturer">Lecturer</option>
              <option value="tutorial_assistant">Tutorial Assistant</option>
            </select>
            <br></br>
            <label>Department</label>
            <select>
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
            <button >Continue</button>
                    </form>
                </div>
      </main>
      </>
  )
}