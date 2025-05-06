import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxExit } from 'react-icons/rx';
import axios from 'axios';

const StudentDashboard = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://cms-2-6zsp.onrender.com/auth/me', {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        setStudent(response.data);
      } catch (err) {
        console.error('Error fetching student:', err);
        if (err.response?.status === 403) navigate('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <div className="flex max-w-6xl mx-auto gap-12">
        {/* Left - Profile */}
        <div className="w-1/3 p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl">
          <div className="flex flex-col items-center space-y-6">
            <img
              src="/src/assets/Grades-cuate.png"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{student?.name}</h2>
            <p className="text-lg text-gray-600">Role: {student?.role}</p>

            <div className="mt-4 w-full space-y-2 text-gray-700">
              <div className="flex">
                <span className="w-24 font-medium">Email:</span>
                <span className="flex-1 break-words">{student?.email}</span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="mt-6 w-full py-2 px-4 bg-red-600 text-white rounded-xl hover:bg-red-700 flex items-center justify-center gap-2"
            >
              <RxExit size={20} /> Logout
            </button>
          </div>
        </div>

        {/* Right - Actions */}
        <div className="w-2/3 flex flex-col justify-start gap-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Actions</h2>
          <button
            onClick={() => navigate('/student-dashboard/student-detail')}
            className="py-3 px-6 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all text-lg font-medium shadow-md"
          >
            📄 View My Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
