import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowLeftCircle } from 'lucide-react'; // Using lucide-react icons

const EntryList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const response = await fetch('https://cms-2-6zsp.onrender.com/formstudent/mystudent', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const studentsData = await response.json();
        setStudents(studentsData);
      } else {
        console.error('Failed to fetch students');
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://cms-2-6zsp.onrender.com/formstudent/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        alert('Student deleted successfully');
        fetchStudents(); 
      } else {
        console.error('Failed to delete student');
      }
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 sm:p-8 lg:p-24">
    <div className="max-w-7xl mx-auto">

      {/* Topbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-700 sm:text-left text-center">
          Student Entries
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md transition text-sm sm:text-base"
        >
          <ArrowLeftCircle size={20} /> Back
        </button>
      </div>

      {/* Search bar */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by student name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full shadow focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white"
          />
        </div>
      </div>

      {/* Student list card */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-4 sm:p-6 overflow-x-auto">
        {filteredStudents.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <p className="text-lg">No students found 🧍‍♂️🧍‍♀️</p>
          </div>
        ) : (
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-indigo-200 text-indigo-800">
                <th className="py-3 px-4 sm:px-6 text-left">#</th>
                <th className="py-3 px-4 sm:px-6 text-left">Name</th>
                <th className="py-3 px-4 sm:px-6 text-left">Roll Number</th>
                <th className="py-3 px-4 sm:px-6 text-left">Department</th>
                <th className="py-3 px-4 sm:px-6 text-left">Section</th>
                <th className="py-3 px-4 sm:px-6 text-left">YOP</th>
                <th className="py-3 px-4 sm:px-6 text-left">Email</th>
                <th className="py-3 px-4 sm:px-6 text-left">Phone</th>
                <th className="py-3 px-4 sm:px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr
                  key={student._id}
                  className="border-b hover:bg-indigo-50 transition duration-300"
                >
                  <td className="py-3 px-4 sm:px-6">{index + 1}</td>
                  <td className="py-3 px-4 sm:px-6">{student.name}</td>
                  <td className="py-3 px-4 sm:px-6">{student.rollNumber}</td>
                  <td className="py-3 px-4 sm:px-6">{student.department}</td>
                  <td className="py-3 px-4 sm:px-6">{student.section}</td>
                  <td className="py-3 px-4 sm:px-6">{student.YOP}</td>
                  <td className="py-3 px-4 sm:px-6">{student.email}</td>
                  <td className="py-3 px-4 sm:px-6">{student.phone}</td>
                  <td className="py-3 px-4 sm:px-6 text-center">
                    <button
                      onClick={() => handleDelete(student._id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-full shadow transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  </div>
);

};

export default EntryList;
