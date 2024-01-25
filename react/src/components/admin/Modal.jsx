import axiosClient from "../../axios";
import "./modal.css"
import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function Modal({currentEmail, closeModal}) {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        await axiosClient.post('/updateUser', {
            fullName,
            email,
            currentEmail
        })
        closeModal();
    }
  return (
      <div className="modal-container" onClick={(e) => {
          if (e.target.className === 'modal-container') {
              closeModal();
          }
      }}>
          <div className="modal-1">
              
              <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                      <div className="mt-2">
                          <input
                              id="full_name"
                              name="fullName"
                            type="text"
                            value={fullName}
                            onChange={ev => setFullName(ev.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </div>
                  </div>
                  <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                  </div>
                  <br></br>
                  <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update user
                </button>
              </div>
              </form>
          </div>
    </div>
  )
}
