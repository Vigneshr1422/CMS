import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ShowStaff = () => {
  const [admins, setAdmins] = useState([]); // Store list of admins
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStaff = async () => {
      const token = localStorage.getItem('token'); // ✅ Retrieve token from localStorage

      if (!token) {
        setError('No token found. Please log in.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://cms-2-6zsp.onrender.com/messages/show-staff', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || 'Failed to fetch staff');
        }

        const data = await response.json();
        setAdmins(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  if (loading) return <p>Loading admins...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Admins in Your Section and Department</h2>

        {admins.length > 0 ? (
          admins.map((admin) => (
            <div key={admin._id} className="bg-blue-100 p-4 rounded-lg shadow-lg mb-4">
              <h3 className="text-lg font-semibold">{admin.name}</h3>
              <p className="text-sm text-gray-600">{admin.email}</p>
              <p className="text-sm text-gray-600">Department: {admin.department}</p>
              <p className="text-sm text-gray-600">Section: {admin.section}</p>
            </div>
          ))
        ) : (
          <p>No admins found for your section and department.</p>
        )}

        <button
          onClick={() => navigate('/student-dashboard')}
          className="mt-6 py-2 px-4 bg-gray-600 text-white rounded-xl hover:bg-gray-700"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ShowStaff;
