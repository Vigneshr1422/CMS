import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    section: '',
    role: '',
    password: '',
    key: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const departments = ['MBA', 'MCA', 'Mechanical', 'Civil'];
  const sections = ['I', 'II', 'III', 'IV'];
  const roles = ['Staff', 'Admin']; // Only Staff and Admin

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      (formData.role === 'Student' && formData.key !== '2025') ||
      (formData.role === 'Staff' && formData.key !== '2024') ||
      (formData.role === 'Admin' && formData.key.trim() !== '2023')
    ) {
      toast.error('Invalid key provided!');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Registration successful!');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Error during registration:', err);
      toast.error('Something went wrong. Try again!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="flex w-full max-w-4xl shadow-xl rounded-lg overflow-hidden">
        {/* Left side image */}
        <div className="w-1/2 bg-blue-100 flex justify-center items-center">
          <img 
            src="\src\assets\Mobile login-pana.svg" 
            alt="Login Illustration" 
            className="w-3/4" 
          />
        </div>

        {/* Right side form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 w-1/2 space-y-4"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-700">Register</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>

          <select
            name="section"
            value={formData.section}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Section</option>
            {sections.map((sec) => (
              <option key={sec} value={sec}>{sec}</option>
            ))}
          </select>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="key"
            placeholder="Enter Secret Key"
            value={formData.key}
            onChange={handleChange}
            className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Submit'}
          </button>

          <p className="text-center text-gray-600 mt-4">
            Already registered?{' '}
            <span
              onClick={() => navigate('/login')}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Go to Login
            </span>
          </p>
        </form>
      </div>

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default Register;
