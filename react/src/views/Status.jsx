import axiosClient from "../axios";
export default function Status() {
  const data = 'Hello';

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient.post('/mail', {
     data
    })
    
  }
    return (
        <>
        <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Approval and Status</h1>
      </div>
    </header>
    <main>
              <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <button type="submit"  className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" onClick={handleSubmit}>Add</button>
              </div>
    </main>
    </>
    )
}