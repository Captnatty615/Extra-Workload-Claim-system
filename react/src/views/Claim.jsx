import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from 'react-router-dom';

export default function Claim() {
  let navigate = useNavigate();
  const [state, setState] = useState({ faculty: '', claim_department: '', module_code: '', lecture_hours: '', tutorial_hours: '', area: '', day: '' , attendanceSheet: '',});

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    console.log(`updating ${fieldName} to  ${value}`);
    
    setState({
      ...state,
      [fieldName]: value,
      
    });
    console.log('claimId:', claimId);
  }

  const faculties = [
    {
      name: "FACULTY OF BUSINESS AND ECONOMICS",
      departments: ["ACCOUNTING AND FINANCE", "ECONOMICS AND TAX MANAGEMENT", "MANAGEMENT SCIENCES"],
    },
    {
      name: "FACULTY OF COMPUTING AND MATHEMATICS",
      departments: ["COMPUTER SCIENCE", "MATHEMATICS AND ACTURIAL STUDIES", "INFORMATION TECHNOLOGY"],
    },
    {
      name: "FACULTY OF INSURANCE AND BANKING",
      departments: ["BANKING AND FINANCIAL SERVICES", "INSURANCE", "SOCIAL PROTECTION"],
    },
  ];

  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedModuleCode, setSelectedModuleCode] = useState("");

  const handleFacultyChange = (e) => {
    const faculty = e.target.value;
    console.log('Selected faculty:', faculty);
    setSelectedFaculty(faculty);
    setSelectedDepartment("");
    setSelectedModuleCode("");
  };

  const handleDepartmentChange = (e) => {
    const claim_department = e.target.value;
    console.log('Selected Department:', claim_department);
    setSelectedDepartment(claim_department);
    setSelectedModuleCode("");
  };

  const handleModuleCodeChange = (e) => {
    const module_code = e.target.value;
    console.log('Selected code:', module_code);
    setSelectedModuleCode(module_code);
  };

  const getModuleCodes = (faculty, claim_department) => {
    const mapping = {
      "FACULTY OF BUSINESS AND ECONOMICS": {
        "ACCOUNTING AND FINANCE": ["BEF", "BAC", "BBF"],
        "ECONOMICS AND TAX MANAGEMENT": ["BTX"],
        "MANAGEMENT SCIENCES": ["BMS"],
      },
      "FACULTY OF COMPUTING AND MATHEMATICS": {
        "COMPUTER SCIENCE": ["CSU08105", "CSU08104", "CSU08102"],
        "INFORMATION TECHNOLOGY": ["ITU08108", "ITU08103", "ITU08106"],
        "MATHEMATICS AND ACTURIAL STUDIES": ["MTU08111", "MTU08112"],
      },
      "FACULTY OF INSURANCE AND BANKING": {
        "BANKING AND FINANCIAL SERVICES": ["FIB097", "FIB098"],
        "SOCIAL PROTECTION": ["SP0100", "SP0200"],
        "INSURANCE": ["INS100", "INS200"],
      },
    };
    return (mapping[faculty]?.[claim_department] || []).slice();
  };
  const handleFileChange = (e) => {
    const attendanceSheet = e.target.files[0];
    console.log('file: ', attendanceSheet);
    setState({
      ...state,
      attendanceSheet,
    });
  };

  const location = useLocation();
  const claimId = location?.state?.claimId;
  console.log("claimId is: ", claimId);

  const handleAddAnother = async () => {
    const formData = new FormData();
    formData.append('faculty', state.faculty);
    formData.append('claim_department', state.claim_department);
    formData.append('module_code', state.module_code);
    formData.append('lecture_hours', state.lecture_hours);
    formData.append('tutorial_hours', state.tutorial_hours);
    formData.append('area', state.area);
    formData.append('day', state.day);
    formData.append('attendanceSheet', state.attendanceSheet);
    formData.append('claimId', claimId);
    const response = await axios.post('http://127.0.0.1:8000/api/submit-claimDetails', formData); 
    if (response.data.status === 200) {
      // Clearing all fields
    setState({
      faculty: '',
      claim_department: '',
      module_code: '',
      lecture_hours: '',
      tutorial_hours: '',
      area: '',
      day: '',
      attendanceSheet: '',
    });

    // Clearing the selected values as well
    setSelectedFaculty('');
    setSelectedDepartment('');
    setSelectedModuleCode('');
    }
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('faculty', state.faculty);
    formData.append('claim_department', state.claim_department);
    formData.append('module_code', state.module_code);
    formData.append('lecture_hours', state.lecture_hours);
    formData.append('tutorial_hours', state.tutorial_hours);
    formData.append('area', state.area);
    formData.append('day', state.day);
    formData.append('attendanceSheet', state.attendanceSheet);
    formData.append('claimId', claimId);
    for (const pair of formData.entries()){
      console.log(pair[0], pair[1]);
    }
    const response = await axios.post('http://127.0.0.1:8000/api/submit-claimDetails', formData); 
    if (response.data.status === 200) {
      navigate('/Submit', { state: { claimId } });
    }
  };

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Claim Information</h1>
        </div>
      </header>
      <main>
      {console.log('location.state.claimId:', claimId)}
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="default">
            <form onSubmit={handleSubmit} method="post">
              <label>Select Faculty:</label>
              <select id="faculty" name="faculty" value={selectedFaculty} onChange={(e) => {
                handleFacultyChange(e);
                handleChange(e);
              }} required>
                <option value="">select faculty</option>
                {faculties.map((faculty) => (
                  <option key={faculty.name} value={faculty.name}>{faculty.name}</option>
                ))}
              </select>
              <br></br>
              <label>Select Department:</label>
              <select
                id="claim_department"
                name="claim_department"
                value={selectedDepartment}
                onChange={(e) => {
                  handleDepartmentChange(e);
                  handleChange(e);
                }}
                disabled={!selectedFaculty} required>
                <option value="">select department</option>
                {selectedFaculty &&
                  faculties
                    .find((faculty) => faculty.name === selectedFaculty)?.departments.map((claim_department) => (
                      <option key={claim_department} value={claim_department}>{claim_department}</option>
                    ))}
              </select>
              <br></br>
              <label>Select Module Code:</label>
              <select
                id="module_code"
                name="module_code"
                value={selectedModuleCode}
                onChange={(e) => {
                  handleModuleCodeChange(e);
                  handleChange(e);
                }}
                disabled={!selectedDepartment} required>
                <option value="">Select Module Code</option>
                {getModuleCodes(selectedFaculty, selectedDepartment).map((module_code) => (
                  <option key={module_code} value={module_code}>{module_code}</option>
                ))}
              </select>
              <br></br>
              <label>Lecture(Hours)</label>
              <input type="number" id="lecture" name="lecture_hours" min={0} max={24} onChange={handleChange} required />
              <br></br>
              <label>Tutorial(Hours)</label>
              <input type="number" id="tutorial" name="tutorial_hours" min={0} max={24} onChange={handleChange} required />
              <br></br>
              <label>Area Taught</label>
              <select id="area" name="area" onChange={handleChange} required>
              <option value="">Area taught</option>
                <option value="main_campus">Main Campus</option>
                <option value="maktaba">Maktaba</option>
              </select>
              <br></br>
              <label>Day of the week</label>
              <select id="day" name="day" onChange={handleChange} required>
              <option value="">select either weekend or weekday</option>
                <option value="weekend">Weekend</option>
                <option value="weekday">Weekday</option>
              </select>
              <br></br>
              <label>Attach attendance sheet</label>
                <input
                  type="file"
                  id="attendanceSheet"
                name="attendanceSheet"
                value={state.attendanceSheet}
                onChange={(e) => {
                  handleFileChange(e);
                  handleChange(e);
                }}
                  accept=".pdf, .xlsx, .csv"
                  required
              />
              <br></br>
              <div className="button-container">
                <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow" onClick={handleAddAnother}>Add</button>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}