// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!email || !password || !role) {
//       setError("Email, password, and role are required.");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const res = await fetch('https://cms-2-6zsp.onrender.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password, role }),
//       });

//       const data = await res.json();
//       setIsLoading(false);

//       if (res.ok) {
//         localStorage.setItem('token', data.token);
//         toast.success('Login successful!');
//         navigate(`/${role.toLowerCase()}-dashboard`);
//       } else {
//         setError(data.message || 'Login failed');
//         toast.error(data.message || 'Login failed');
//       }
//     } catch (err) {
//       setIsLoading(false);
//       setError('Something went wrong. Try again!');
//       toast.error('Something went wrong. Try again!');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-100 px-4">
//       <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
//         {/* Image section */}
//         <div className="hidden md:flex items-center justify-center bg-blue-200 p-8">
//           <img
//             src="./src/assets/Privacy policy-rafiki.png"
//             alt="Login illustration"
//             className="w-full h-auto"
//           />
//         </div>

//         {/* Form section */}
//         <div className="p-8">
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Login</h2>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 mb-1 font-medium">Email</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1 font-medium">Password</label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 autoComplete="new-password"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1 font-medium">Role</label>
//               <select
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 required
//               >
//                 <option value="">Select Role</option>
//                 <option value="Student">Student</option>
//                 <option value="Staff">Staff</option>
//                 <option value="Admin">Admin</option>
//               </select>
//             </div>
//             {error && <p className="text-red-500 text-sm">{error}</p>}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
//             >
//               {isLoading ? 'Logging in...' : 'Login'}
//             </button>
//           </form>

//           {/* New user registration link */}
//           <div className="text-center mt-4">
//             <p className="text-gray-600 text-sm">
//               Don't have an account?{' '}
//               <Link to="/register" className="text-blue-600 hover:underline">
//                 Register here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//       <ToastContainer position="top-center" autoClose={4000} />
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password || !role) {
      setError("Email, password, and role are required.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('https://cms-2-6zsp.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();
      setIsLoading(false);

      if (res.ok) {
        localStorage.setItem('token', data.token);

        // ✅ Store staffId if role is Staff and data.staff exists
        if (role === 'Staff' && data.staff && data.staff._id) {
          localStorage.setItem('staffId', data.staff._id);
          console.log("Staff ID stored:", data.staff._id);
        }

        toast.success('Login successful!');
        navigate(`/${role.toLowerCase()}-dashboard`);
      } else {
        setError(data.message || 'Login failed');
        toast.error(data.message || 'Login failed');
      }
    } catch (err) {
      setIsLoading(false);
      setError('Something went wrong. Try again!');
      toast.error('Something went wrong. Try again!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-100 px-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Image section */}
        <div className="hidden md:flex items-center justify-center bg-blue-200 p-8">
          <img
            src="./src/assets/Privacy policy-rafiki.png"
            alt="Login illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Form section */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Role</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select Role</option>
                {/* <option value="Student">Student</option> */}
                <option value="Staff">Staff</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={4000} />
    </div>
  );
};

export default Login;
