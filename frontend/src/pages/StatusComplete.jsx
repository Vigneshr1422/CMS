import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowLeftCircle } from 'lucide-react'; // Using lucide-react icons

const StatusComplete = () => {
  const [students, setStudents] = useState([]);
  const [view, setView] = useState('completed');  // Track view (completed or not completed)
  const [searchTerm, setSearchTerm] = useState('');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();  // Initialize the navigate function

  // Fetch students with certification status
  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/formstudent/mystudent', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const studentsData = await response.json();
        
        const studentsWithCertifications = await Promise.all(
          studentsData.map(async (student) => {
            const certResponse = await fetch(`http://localhost:5000/api/verification/${student._id}`, {
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            });

            if (certResponse.ok) {
              const certData = await certResponse.json();
              return { ...student, certifications: certData };
            }
            return student;
          })
        );

        setStudents(studentsWithCertifications);
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

  // Filter the students based on the selected view
  const filterStudents = () => {
    if (view === 'completed') {
      return students.filter((student) =>
        student.certifications?.internship &&
        student.certifications?.project &&
        student.certifications?.coCurricular &&
        student.certifications?.certifications
      );
    } else {
      return students.filter((student) =>
        !(student.certifications?.internship &&
          student.certifications?.project &&
          student.certifications?.coCurricular &&
          student.certifications?.certifications)
      );
    }
  };

  const filteredStudents = filterStudents().filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
    
        {/* Topbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-indigo-700"><br />
            <br />  Student Certification Status
          </h2>
        </div>
    
        {/* Toggle View Buttons */}
        <div className="flex flex-col sm:flex-row justify-center mb-4 gap-2 sm:gap-4">
          <button
            onClick={() => setView('completed')}
            className={`py-2 px-6 rounded-full text-sm sm:text-lg font-semibold transition-all ${view === 'completed' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          >
            Completed
          </button>
          <button
            onClick={() => setView('notCompleted')}
            className={`py-2 px-6 rounded-full text-sm sm:text-lg font-semibold transition-all ${view === 'notCompleted' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          >
            Not Completed
          </button>
        </div>
    
        {/* Search Bar */}
        <div className="flex justify-center mb-6 px-2">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by student name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full shadow focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white text-sm"
            />
          </div>
        </div>
    
        {/* Table Container */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-4 sm:p-6 overflow-x-auto">
          {filteredStudents.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              <p className="text-lg">No students found 🧍‍♂️🧍‍♀️</p>
            </div>
          ) : (
            <table className="min-w-[600px] sm:min-w-full table-auto text-sm sm:text-base">
              <thead>
                <tr className="bg-indigo-200 text-indigo-800">
                  <th className="py-2 sm:py-3 px-4 sm:px-6 text-left">#</th>
                  <th className="py-2 sm:py-3 px-4 sm:px-6 text-left">Name</th>
                  <th className="py-2 sm:py-3 px-4 sm:px-6 text-left">Roll Number</th>
                  <th className="py-2 sm:py-3 px-4 sm:px-6 text-left">Department</th>
                  <th className="py-2 sm:py-3 px-4 sm:px-6 text-left">Section</th>
                  <th className="py-2 sm:py-3 px-4 sm:px-6 text-left">YOP</th>
                  <th className="py-2 sm:py-3 px-4 sm:px-6 text-center">Certifications Completed</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr
                    key={student._id}
                    className="border-b hover:bg-indigo-50 transition duration-300"
                  >
                    <td className="py-2 sm:py-3 px-4 sm:px-6">{index + 1}</td>
                    <td className="py-2 sm:py-3 px-4 sm:px-6">{student.name}</td>
                    <td className="py-2 sm:py-3 px-4 sm:px-6">{student.rollNumber}</td>
                    <td className="py-2 sm:py-3 px-4 sm:px-6">{student.department}</td>
                    <td className="py-2 sm:py-3 px-4 sm:px-6">{student.section}</td>
                    <td className="py-2 sm:py-3 px-4 sm:px-6">{student.YOP}</td>
                    <td className="py-2 sm:py-3 px-4 sm:px-6 text-center">
                      {student.certifications?.internship ? 'Internship, ' : ''}
                      {student.certifications?.project ? 'Project, ' : ''}
                      {student.certifications?.coCurricular ? 'Co-Curricular, ' : ''}
                      {student.certifications?.certifications ? 'Certifications' : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
    
        {/* Back Button Below Table */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg shadow-md transition w-full sm:w-auto"
          >
            <ArrowLeftCircle size={20} /> Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusComplete;