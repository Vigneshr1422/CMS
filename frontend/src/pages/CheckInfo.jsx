import React from 'react';

const CheckInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Check Information</h2>

        <div className="text-lg text-gray-800">
          {/* Example of displaying some additional information */}
          <p>Here you can check additional information about your student account.</p>
          <p>For example, you can view your department, section, or any other relevant details.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckInfo;
