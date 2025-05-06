import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxExit } from 'react-icons/rx';

const AdminDashboard = () => {
  const [admin, setAdmin] = useState(null);
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDept, setSelectedDept] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminAndStaff = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };

        const resAdmin = await fetch('https://cms-2-6zsp.onrender.com/auth/me', { headers });
        const adminData = await resAdmin.json();
        setAdmin(adminData);

        const resStaff = await fetch('https://cms-2-6zsp.onrender.com/auth/staff/all', { headers });
        const staffData = await resStaff.json();
        setStaffList(staffData);

      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminAndStaff();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Group staff by department
  const staffByDepartment = staffList.reduce((grouped, staff) => {
    const dept = staff.department || 'Unknown';
    if (!grouped[dept]) grouped[dept] = [];
    grouped[dept].push(staff);
    return grouped;
  }, {});

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      <div className="flex flex-col lg:flex-row gap-6">
  
        {/* Profile Card */}
        <div className="w-full lg:w-1/3 p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl flex flex-col justify-between min-h-[600px]">
          <div className="flex flex-col items-center space-y-6">
            <img
              src="\src\assets\Admin-rafiki.png"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{admin?.name}</h2>
            <p className="text-lg text-gray-600">Role: {admin?.role}</p>
            <div className="mt-4 w-full space-y-3 text-gray-700">
              <div className="flex">
                <span className="w-24 font-medium">Email:</span>
                <span className="flex-1 break-words">{admin?.email}</span>
              </div>
              <div className="flex">
                <span className="w-24 font-medium">Dept:</span>
                <span className="flex-1 break-words">{admin?.department}</span>
              </div>
            </div>
          </div>
  
          {/* Push Logout Button to Bottom */}
          <div className="mt-auto pt-6">
            <button
              onClick={handleLogout}
              className="w-full py-2 px-4 bg-red-600 text-white rounded-xl hover:bg-red-700 flex items-center justify-center gap-2"
            >
              <RxExit /> Logout
            </button>
          </div>
        </div>
  
        {/* Right - Department Buttons & Staff */}
        <div className="w-full lg:w-2/3 p-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Staff by Department 👨‍🏫</h2>
  
          {/* Department Buttons */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center">
            {Object.keys(staffByDepartment).map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-6 py-3 rounded-full text-xl font-medium transition duration-200 ease-in-out ${
                  selectedDept === dept
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {dept}
              </button>
            ))}
            <button
              onClick={() => setSelectedDept(null)}
              className="px-6 py-3 rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400 transition duration-200 ease-in-out"
            >
              Show All
            </button>
          </div>
  
          {/* Staff Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedDept ? staffByDepartment[selectedDept] || [] : staffList).map((staff) => (
              <div
                key={staff._id}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-2xl transform transition duration-200 ease-in-out hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-xl font-semibold text-gray-700">{staff.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{staff.name}</h3>
                    <p className="text-gray-600">{staff.role}</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> {staff.email}</p>
                  <p><strong>Section:</strong> {staff.section}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
      </div>
    </div>
  );
}
;  
export default AdminDashboard;
