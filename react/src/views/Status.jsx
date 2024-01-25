// Status.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axiosClient from '../axios';

const Status = () => {
  const [currentStatus, setCurrentStatus] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState("");

  const location = useLocation();
  const claimId = location?.state?.claimId;
  console.log(claimId)

  useEffect(() => {
    if (claimId) {
       axiosClient.post(`/status`, {claimId})
       .then(response => {
        const { status, firstName, lastName } = response.data || {};

        setCurrentStatus(status);
        setFirstName(firstName);
        setLastName(lastName);
      })
      .catch(error => {
        console.log('Error fecthing report data: ', error);
      });
  }
    
  }, [claimId]);
  return (
    <div className="table-wrapper">
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Claim For</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <td>{firstName} {lastName}</td>
          <td>
            <span>
      <div className={`status-label ${currentStatus}`}>
        <span>{currentStatus}</span>
      </div></span>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default Status;
