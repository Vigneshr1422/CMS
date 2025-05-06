import React, { useState } from 'react';

const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    rollNumber: '',
    name: '',
    dob: '',
    tenthPercentage: '',
    twelfthPercentage: '',
    undergradPercentage: '',
    arrears: '',
    phoneNumber: '',
    email: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/staffaddstudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(studentData),
      });

      try {
        const data = await res.json();
        if (res.ok) {
          alert('Student added successfully!');
          setStudentData({
            rollNumber: '',
            name: '',
            dob: '',
            tenthPercentage: '',
            twelfthPercentage: '',
            undergradPercentage: '',
            arrears: '',
            phoneNumber: '',
            email: '',
          });
          setError('');
        } else {
          setError(data.message || 'Failed to add student.');
        }
      } catch (parseErr) {
        setError('Unexpected server response. Contact backend developer.');
      }
    } catch (err) {
      setError('Something went wrong. Try again!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-green-600 flex justify-center items-start py-10">
      <div className="w-full max-w-lg sm:max-w-md md:max-w-2xl bg-white rounded-lg shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Add New Student</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: 'Roll Number', name: 'rollNumber' },
            { label: 'Name', name: 'name' },
            { label: 'Date of Birth', name: 'dob', type: 'date' },
            { label: '10th Grade %', name: 'tenthPercentage', type: 'number' },
            { label: '12th Grade %', name: 'twelfthPercentage', type: 'number' },
            { label: 'Undergrad %', name: 'undergradPercentage', type: 'number' },
            { label: 'History of Arrears', name: 'arrears' },
            { label: 'Phone Number', name: 'phoneNumber' },
            { label: 'Email ID', name: 'email', type: 'email' },
          ].map(({ label, name, type = 'text' }) => (
            <div key={name}>
              <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
              <input
                type={type}
                name={name}
                value={studentData[name]}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 font-semibold disabled:opacity-70"
          >
            {isSubmitting ? 'Submitting...' : 'Add Student'}
          </button>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="w-full mt-3 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
