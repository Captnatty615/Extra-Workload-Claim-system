
import { useEffect, useState } from 'react';
import axiosClient from '../../axios';
import Modal from './Modal';
import "./ViewClaims.css"

export default function Users() {
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUserEmail, setSelectedUserEmail] = useState(null);

  useEffect(() => {
    axiosClient.post(`/getUsers`)
    .then(response => {
      setUsers(response.data); 
    })
      .catch(error => {
        console.log('Error fecthing report data: ', error);
      });
  }, [])

  const handleDelete = async (email) => {
    try {
      // Make a request to delete the user with the specified email
      await axiosClient.post('/deleteUser', {email});
      // After successful deletion, update the user list
      setUsers(prevUsers => prevUsers.filter(user => user.email !== email));
    } catch (error) {
      console.log('Error deleting user: ', error);
    }
  };


  return (
    <>
        <div className='table-wrapper'>
        <table className='fl-table'>
        <thead>
              <tr>
                <th>ID</th>
            <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
          </tr>
        </thead>
          <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <span>
                <div className="gap-x-6">
                    <button className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" onClick={() => handleDelete(user.email)}>Delete</button>
                    <span style={{ margin: '0 10px' }}></span>
                  <button className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"  onClick={() => {
                          setSelectedUserEmail(user.email);
                          setModalOpen(true);
                    }}> Edit </button>
                    </div>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
        </table>
          {modalOpen && <Modal currentEmail={selectedUserEmail} closeModal={() =>
          {
            setModalOpen(false);
          }} />}
        </div>
      </>
  )
}
