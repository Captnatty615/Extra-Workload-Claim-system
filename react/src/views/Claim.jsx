import  { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Claim() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ faculty: '', department: '', module_code: '', lecture: '', tutorial: '', area: '', day: '' });

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleAddAnother = () => {
    // Clearing all fields
    setFormData({
      faculty: '',
      department: '',
      module_code: '',
      lecture: '',
      tutorial: '',
      area: '',
      day: '',
    });

    // Clearing the selected values as well
  setSelectedFaculty('');
  setSelectedDepartment('');
  setSelectedModuleCode('');
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
    setSelectedFaculty(faculty);
    setSelectedDepartment("");
    setSelectedModuleCode("");
  };

  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);
    setSelectedModuleCode("");
  };

  const handleModuleCodeChange = (e) => {
    const moduleCode = e.target.value;
    setSelectedModuleCode(moduleCode);
  };

  const getModuleCodes = (faculty, department) => {
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
    return (mapping[faculty]?.[department] || []).slice();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/supportingDocuments');
  };

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Claim Information</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="default">
            <form onSubmit={handleSubmit}>
              <label>Select Faculty:</label>
              <select  id="faculty" name="faculty" value={selectedFaculty} onChange={handleFacultyChange} required>
                <option value="">Select Faculty</option>
                {faculties.map((faculty) => (
                  <option key={faculty.name} value={faculty.name}>{faculty.name}</option>
                ))}
              </select>
              <br></br>
              <label>Select Department:</label>
              <select
                id="department"
                name="department"
                value={selectedDepartment}
                onChange={handleDepartmentChange}
                disabled={!selectedFaculty} required>
                <option value="">Select Department</option>
                {selectedFaculty &&
                  faculties
                    .find((faculty) => faculty.name === selectedFaculty)?.departments.map((department) => (
                      <option key={department} value={department}>{department}</option>
                    ))}
              </select>
              <br></br>
              <label>Select Module Code:</label>
              <select
                id="module_code"
                name="module_code"
                value={selectedModuleCode}
                onChange={handleModuleCodeChange}
                disabled={!selectedDepartment} required>
                <option value="">Select Module Code</option>
                {getModuleCodes(selectedFaculty, selectedDepartment).map((code) => (
                  <option key={code} value={code}>{code}</option>
                ))}
              </select>
              <br></br>
              <label>Lecture(Hours)</label>
              <input type="number" id="lecture" name="lecture" min={0} max={24} onChange={handleChange} required />
              <br></br>
              <label>Tutorial(Hours)</label>
              <input type="number" id="tutorial" name="tutorial" min={0} max={24} onChange={handleChange} required />
              <br></br>
              <label>Area Taught</label>
              <select id="area" name="area" onChange={handleChange} required>
                <option value="main_campus">Main Campus</option>
                <option value="maktaba">Maktaba</option>
              </select>
              <br></br>
              <label>Day of the week</label>
              <select id="day" name="day" onChange={handleChange} required>
                <option value="weekend">Weekday</option>
                <option value="weekday">Weekend</option>
              </select>
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
