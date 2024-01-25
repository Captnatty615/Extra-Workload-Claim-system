import {  useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosClient from '../axios';


export default function Submit() {

  const [reportData, setReportData] = useState("");
  const [showReport, setShowReport] = useState(true);
  const [error, setError] = useState({ __html: '' });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [amount, setAmount] = useState("");
  const status = 'pending';

  const location = useLocation();
  const claimId = location?.state?.claimId;
  console.log("claimId is: ", claimId);

  useEffect(() => {
    if (claimId) {
       axiosClient.post(`http://127.0.0.1:8000/api/report`, {claimId})
      .then(response => {
        setReportData(response.data);
        setShowReport(true);
        setFirstName(response.data?.lecturerData?.firstName || "");
        setLastName(response.data?.lecturerData?.lastName || "");
        setAmount(response.data?.extraAllowance);

      })
      .catch(error => {
        console.log('Error fecthing report data: ', error);
      });
  }
    
  }, [claimId]);
  let navigate = useNavigate();
  console.log(firstName);
  const handleEditClaim = async (e) => {
    e.preventDefault();
    navigate('/Edit', {state : {claimId}}, {state: {reportData}});

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient.post('/mail', {
      firstName,
      lastName,
      claimId
    })
      .then(()=> {
        axiosClient.post('/claim', {
          claimId,
          status,
          amount
        })
        navigate('/Status', { state: { claimId } })
  })
  .catch((error) => {
    if (error.response) {
      const Errors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
      console.log(Errors)
      setError({__html: Errors.join('<br>')})
    }
    console.error(error)
})
    
  }
// empty dependency meaning the effect runs once when component mounts
  return (
      <>
      
      <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Submit Claim</h1>
    </div>
      </header>
      {error.__html && (<div className="bg-blue-500 rounded py-2 px-3 text-white" 
          dangerouslySetInnerHTML={error}>
          </div>)}
      <main>
        <div className='default'>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          </div>
          {/*<button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow" onClick={handleCreate}>Create</button>
          <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow" onClick={handleReport}>Preview Claim Report</button>
  <br></br>*/}
        {/* Show Report Data */}
        {showReport && reportData && (
         <div className='default'>
         {/* Display the fetched data */}
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Claim Information</h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and allowance.</p>
            </div>
            <div className='mt-6 border-t border-gray-100'>
              <dl className='divide-y divide-gray-100'>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{reportData.lecturerData.firstName} { reportData.lecturerData.lastName}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Department</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ reportData.lecturerData.department}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Academic Rank</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ reportData.lecturerData.academicRank}</dd>
                </div>
                <br></br>
                <h3 className="text-base font-semibold leading-7 text-gray-900">Allowance Details</h3>
                <br></br>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Total hours</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{reportData.totalHours}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Extra Allowance</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{reportData.extraAllowance}</dd>
          </div>
              </dl>
            </div>
     </div>
          )}
           <div className="button-container">
                <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow" onClick={handleEditClaim}>Edit</button>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow" onClick={handleSubmit}>Submit</button>
              </div>
        </div>
  </main>
  </>
  )
}

