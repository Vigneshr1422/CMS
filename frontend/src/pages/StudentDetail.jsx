import React, { useState } from 'react';
import axios from 'axios';

const StudentDetail = () => {
  const [students, setStudents] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    role: '',
  });

  const fetchDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      const { name, email, role } = filters;

      // Make the API call with query params
      const res = await axios.get('https://cms-2-6zsp.onrender.com/students/details', {
        params: { name, email, role },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStudents(res.data);
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };

  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">📘 Search Students</h2>

        {/* Filter Inputs */}
        <div className="mb-6">
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleInputChange}
            placeholder="Search by Name"
            className="p-2 border border-gray-300 rounded-md mb-4 w-full"
          />
          <input
            type="email"
            name="email"
            value={filters.email}
            onChange={handleInputChange}
            placeholder="Search by Email"
            className="p-2 border border-gray-300 rounded-md mb-4 w-full"
          />
          <input
            type="text"
            name="role"
            value={filters.role}
            onChange={handleInputChange}
            placeholder="Search by Role"
            className="p-2 border border-gray-300 rounded-md mb-4 w-full"
          />
          <button
            onClick={fetchDetails}
            className="p-2 bg-indigo-600 text-white rounded-md w-full"
          >
            Search
          </button>
        </div>

        {/* Display Search Results */}
        <div className="space-y-6">
          {students.length === 0 ? (
            <p className="text-center text-gray-500">No students found.</p>
          ) : (
            students.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
                <p className="mb-2"><strong>Name:</strong> {item.name}</p>
                <p className="mb-2"><strong>Email:</strong> {item.email}</p>
                <p className="mb-2"><strong>Role:</strong> {item.role}</p>
                <p className="mb-2"><strong>Department:</strong> {item.department}</p>
                <p className="mb-2"><strong>Section:</strong> {item.section}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
