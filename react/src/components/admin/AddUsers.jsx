import { useState } from "react";
import axiosClient from "../../axios";
import myImage from '../../../../logo.png'


export default function AddUsers() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState({ __html: '' });

  const onSumbit = (e) => {
    e.preventDefault();
    setError({ __html: '' })
    
    axiosClient.post('/signup', {
      name: fullName,
      email,
      password,
      password_confirmation: passwordConfirmation
    })
      .then(() => {
          setFullName("");
          setEmail("");
          setPassword("");
          setPasswordConfirmation("");
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
  return (
      <>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src={myImage}
              alt="IFM"
            />
                </div>
           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Add new user
        </h2>
          
        {error.__html && (<div className="bg-blue-500 rounded py-2 px-3 text-white" 
          dangerouslySetInnerHTML={error}>
          </div>)}

  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSumbit} className="space-y-6" action="#" method="POST" >
          
          <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full name 
                </label>
                <div className="mt-2">
                  <input
                    id="full_name"
                    name="fullName"
                  type="text"
                  value={fullName}
                  onChange={ev => setFullName(ev.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
            <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password-confirmation" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password-confirmation"
                    name="password_confirmation"
                  type="password"
                  value={passwordConfirmation}
                  onChange={e => setPasswordConfirmation(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add user
                </button>
              </div>
          </form>
          </div>
      </>
  )
}
