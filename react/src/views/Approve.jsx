import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import axiosClient from '../axios';

export default function Approve() {
  const [pdfPaths, setPdfPaths] = useState([]);

  // Assuming you pass the claimId to this component
  const claimId = 39;

  useEffect(() => {
    // Fetch the PDF file paths from the server using Axios
    axiosClient.get(`/getAttendance`, {claimId})
      .then(response => {
        // Update state with the array of PDF file paths
        setPdfPaths(response.data.attendance_sheets);
      })
      .catch(error => console.error('Error fetching PDF file paths:', error));
  }, [claimId]);

  return (
    <div>
    {pdfPaths.length > 0 ? (
      pdfPaths.map((pdfPath, index) => (
        <div key={index}>
          <Document file={pdfPath} onLoadSuccess={console.log('PDF loaded')}>
            <Page pageNumber={1} />
          </Document>
        </div>
      ))
    ) : (
      <p>No PDFs available.</p>
    )}
  </div>
  );
}

