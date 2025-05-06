import React from "react";
import { Link } from "react-router-dom";
import { UserPlus, LogIn } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex items-center justify-center px-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 w-full max-w-5xl shadow-2xl text-center">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          Welcome to <span className="text-purple-400">Kalki Portal</span>
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
          A unified platform to manage student records, generate certificates, and simplify staff workflows — all secured with role-based access.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link to="/register">
            <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg">
              <UserPlus size={20} /> Register
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gray-800 hover:bg-gray-700 transition text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg">
              <LogIn size={20} /> Login
            </button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Role-Based Login", desc: "Access dashboards based on Admin, Manager, or Staff roles." },
            { title: "Smart Certificate Generation", desc: "Create and send attendance, bonafide, and more." },
            { title: "Student Record Hub", desc: "Store, update, and monitor student academic data." },
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-purple-400 transition duration-300">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
