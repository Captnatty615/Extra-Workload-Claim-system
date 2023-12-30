import { useState } from 'react';
export default function SupportingDocuments() {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileChange = (event) => {
      const file = event.target.value[0];

      //checking if selected file is pdf
      if (file && file.type === 'application/pdf') {
        setSelectedFile(file);
      } else {
        alert('Please choose a valid PDF file.')
      }
      // clearing the input
      event.target.value = null;
    }
  

  const handleSubmit = (event) => {
    event.preventDefault();

    //handling the selected pdf file ... like sending it to the server
    if (selectedFile) {
      console.log('Selected pdf file:', selectedFile)

      // add logic for handling the file here
    } else {
      alert('Please attach attendance sheets as PDF files')
    }
  };

    return (
        <>
            <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Attach Supporting Documents</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="default">
              <form onSubmit={handleSubmit}>
                <label>Attach attendance sheets:</label>
                <input type="file" accept='.PDF' multiple onChange={handleFileChange} />
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow">Continue</button>

              </form>
            </div>
                    
                  </div>
        </main>
        </>
    )
}