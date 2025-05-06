import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Plus = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    department: "",
    section: "",
    YOP: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("🎉 Student added successfully!", {
      style: {
        border: "1px solid #4F46E5",
        padding: "16px",
        color: "#1F2937",
        background: "#E0E7FF",
        fontWeight: "600",
      },
      iconTheme: {
        primary: "#4F46E5",
        secondary: "#E0E7FF",
      },
      duration: 3000,
    });

    setFormData({
      name: "",
      rollNumber: "",
      department: "",
      section: "",
      YOP: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4 py-6 sm:py-14 pt-24">
      <Toaster position="bottom-center" reverseOrder={false} />

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
          Add New Student
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          {["name", "rollNumber", "department", "section", "YOP", "email", "phone"].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 font-medium mb-1 capitalize">
                {field === "YOP" ? "Year of Passing (YOP)" : field}
              </label>
              <input
                type={field === "email" ? "email" : field === "YOP" ? "number" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          ))}

          <div className="flex flex-col gap-4 mt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Add Student
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full bg-gray-400 text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Plus;
