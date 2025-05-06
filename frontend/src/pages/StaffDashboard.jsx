import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Eye, Activity, FileText, CheckCircle } from 'lucide-react';
import { RxExit } from 'react-icons/rx';

const StaffDashboard = () => {
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('https://cms-2-6zsp.onrender.com/auth/me', {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const data = await res.json();
        setStaff(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching staff:', err);
        setLoading(false);
      }
    };
    fetchStaff();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 pt-24 p-4 sm:">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-6">

        {/* Left - Profile */}
        <div className="w-full md:w-1/3 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/src/assets/Admin-rafiki.png"
              alt="Profile"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{staff?.name}</h2>
            <p className="text-base text-gray-600">Role: {staff?.role}</p>

            <div className="mt-2 w-full space-y-2 text-gray-700 text-sm sm:text-base">
              <div className="flex">
                <span className="w-20 font-medium">Email:</span>
                <span className="flex-1 break-words">{staff?.email}</span>
              </div>
              <div className="flex">
                <span className="w-20 font-medium">Dept:</span>
                <span className="flex-1 break-words">{staff?.department}</span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="mt-4 w-full py-2 px-4 bg-red-600 text-white rounded-xl hover:bg-red-700 flex items-center justify-center gap-2"
            >
              <RxExit /> Logout
            </button>
          </div>
        </div>

        {/* Right - Actions */}
        <div className="w-full grid grid-cols-1 gap-6">
          {/* Group 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CardItem
              onClick={() => handleNavigation('/staff/plus')}
              icon={<PlusCircle size={36} />}
              title="Add Student"
              subtitle="Add a new student entry"
              gradient="from-green-400 to-green-600"
            />
            <CardItem
              onClick={() => handleNavigation('/staff/entry-list')}
              icon={<Eye size={36} />}
              title="Student List"
              subtitle="View all student records"
              gradient="from-blue-400 to-blue-600"
            />
          </div>

          {/* Group 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CardItem
              onClick={() => handleNavigation('/status')}
              icon={<Activity size={36} />}
              title="Status"
              subtitle="Track student status"
              gradient="from-teal-400 to-teal-600"
            />
            <CardItem
              onClick={() => handleNavigation('/certificate')}
              icon={<FileText size={36} />}
              title="Certificate"
              subtitle="Issue certificates"
              gradient="from-indigo-400 to-indigo-600"
            />
          </div>

          {/* Single Card */}
          <div className="w-full">
            <CardItem
              onClick={() => handleNavigation('/status-complete')}
              icon={<CheckCircle size={36} />}
              title="Status Complete"
              subtitle="Finalized status reports"
              gradient="from-emerald-400 to-emerald-600"
              full
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CardItem = ({ onClick, icon, title, subtitle, gradient, full = false }) => (
  <div
    onClick={onClick}
    className={`flex items-center ${full ? 'w-full' : ''} bg-gradient-to-r ${gradient} text-white p-4 sm:p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer`}
  >
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      <p className="text-xs sm:text-sm opacity-90">{subtitle}</p>
    </div>
  </div>
);

export default StaffDashboard;