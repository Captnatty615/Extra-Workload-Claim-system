import { useState, useEffect } from "react";
import axiosClient from "../../axios";

export default function ViewClaims() {
  const [claims, setClaims] = useState([]);
  useEffect(() => {
    axiosClient.post(`/getClaims`)
    .then(response => {
      setClaims(response.data); 
    })
      .catch(error => {
        console.log('Error fecthing report data: ', error);
      });
  }, [])
  return (
    <>
      <body>
        <div className='table-wrapper'>
        <table className='fl-table'>
        <thead>
              <tr>
                <th>Claim ID</th>
            <th>Concerning</th>
              <th>Status</th>
          </tr>
        </thead>
          <tbody>
          {claims.map(claim => (
            <tr key={claim.claimId}>
              <td>{claim.claimId}</td>
              <td>{claim.lecturer.firstName} { claim.lecturer.lastName}</td>
                <td>{claim.status}</td>
              </tr>
            ))}
        </tbody>
        </table>
        </div>
      </body>
      </>
  )
}
