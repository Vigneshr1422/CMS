import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StatusPage = () => {
  const [students, setStudents] = useState([]);
  const [certifications, setCertifications] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/formstudent/mystudent', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const studentsData = await response.json();
        if (Array.isArray(studentsData)) {
          setStudents(studentsData);
          const initialCertifications = studentsData.reduce((acc, student) => {
            acc[student._id] = {
              internship: false,
              project: false,
              coCurricular: false,
              certifications: false,
            };
            return acc;
          }, {});
          setCertifications(initialCertifications);
          fetchVerificationStatus(studentsData);
        }
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchVerificationStatus = async (studentsData) => {
    try {
      for (const student of studentsData) {
        const response = await fetch(`http://localhost:5000/api/verification/${student._id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const verificationData = await response.json();
          setCertifications((prevState) => ({
            ...prevState,
            [student._id]: {
              internship: verificationData.internship,
              project: verificationData.project,
              coCurricular: verificationData.coCurricular,
              certifications: verificationData.certifications,
            },
          }));
        }
      }
    } catch (error) {
      console.error('Error fetching verification status:', error);
    }
  };

  const handleCertificationChange = (studentId, certification) => {
    setCertifications((prevState) => ({
      ...prevState,
      [studentId]: {
        ...prevState[studentId],
        [certification]: !prevState[studentId][certification],
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      for (const studentId in certifications) {
        if (certifications.hasOwnProperty(studentId)) {
          const studentCertifications = certifications[studentId];
          await fetch(`http://localhost:5000/api/verification/${studentId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(studentCertifications),
          });
        }
      }
      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000);
    } catch (error) {
      console.error('Error submitting verification data:', error);
    }
  };

  const handleBack = () => navigate(-1);

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4 pt-24 pb-8 md:pt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-800 mb-8">
          Student Verification Status
        </h2>

        <div className="mb-6">
          <button
            onClick={handleBack}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-full shadow-md transition-all"
          >
            ⬅️ Back
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-xl animate-pulse">
                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-4"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student) => (
              <div
                key={student._id}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-purple-700">{student.name}</h3>
                  <p className="text-gray-600">🎓 Reg No: {student.rollNumber}</p>
                  <p className="text-gray-600">🏢 Dept: {student.department}</p>
                  <p className="text-gray-600">📚 Section: {student.section}</p>
                </div>

                <div className="flex flex-col space-y-3 text-sm mt-4">
  {['internship', 'project', 'coCurricular', 'certifications'].map((cert) => (
    <label key={cert} className="flex items-center text-gray-700">
      <input
        type="checkbox"
        checked={certifications[student._id]?.[cert] || false}
        onChange={() => handleCertificationChange(student._id, cert)}
        className="mr-2 rounded border-gray-300 focus:ring-2 focus:ring-purple-400"
      />
      {cert === 'coCurricular'
        ? 'Co-Curricular Activities'
        : cert.charAt(0).toUpperCase() + cert.slice(1)}
    </label>
  ))}
</div>

              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <button
            onClick={handleSubmit}
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md transition-all"
          >
            💾 Save Changes
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Success!</h3>
              <p className="text-gray-800">Your changes have been saved successfully.</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusPage;
