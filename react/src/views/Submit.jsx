import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Submit() {

  const [reportData, setReportData] = useState([]);
  const [showReport, setShowReport] = useState(false);

  const HandleReport = (e) => {
    e.preventDefault();
    
  useEffect(() => {
    //making api request to fetch report data
    axios.get('http://127.0.0.1:8000/api/report')
      .then(response => {
        setReportData(response.data);
        setShowReport(true);
      })
      .catch(error => {
        console.log('Error fecthing report data: ', error);
      });
  }, []); 
  }
// empty dependency meaning the effect runs once when component mounts
  return (
      <>
      <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Submit Claim</h1>
    </div>
  </header>
  <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        </div>
        <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow" onClick={HandleReport}>Preview Claim Report</button>
        {/* Show Report Data */}
        {showReport && (
          <div className="flex flex-col mt-5">
            <h2>Claim Report</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th scope="col">

                  </th>
                </tr>
              </thead>
            </table>
          </div>
        )}

  </main>
  </>
  )
}

