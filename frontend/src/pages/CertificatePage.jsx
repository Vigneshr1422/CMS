import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegIdCard } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { GiAchievement } from 'react-icons/gi';
import { IoDocumentText } from 'react-icons/io5';

const CertificatePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">
        Certificate Generator 📄
      </h1>

      <div className="w-full max-w-md flex flex-col gap-5">
        <button
          onClick={() => handleNavigation('/certificate/attendance')}
          className="w-full py-4 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition text-lg font-semibold flex items-center justify-center gap-3"
        >
          <FaRegIdCard className="text-2xl" />
          Attendance Certificate
        </button>

        <button
          onClick={() => handleNavigation('/certificate/bonafide')}
          className="w-full py-4 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition text-lg font-semibold flex items-center justify-center gap-3"
        >
          <MdSchool className="text-2xl" />
          Bonafide Certificate
        </button>

        <button
          onClick={() => handleNavigation('/certificate/character')}
          className="w-full py-4 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition text-lg font-semibold flex items-center justify-center gap-3"
        >
          <GiAchievement className="text-2xl" />
          Character Certificate
        </button>

        <button
          onClick={() => handleNavigation('/certificate/provisional')}
          className="w-full py-4 bg-pink-600 text-white rounded-xl shadow-md hover:bg-pink-700 transition text-lg font-semibold flex items-center justify-center gap-3"
        >
          <IoDocumentText className="text-2xl" />
          Provisional Certificate
        </button>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="mt-8 py-3 px-6 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition text-lg font-semibold"
      >
        🔙 Back
      </button>
    </div>
  );
};

export default CertificatePage;
