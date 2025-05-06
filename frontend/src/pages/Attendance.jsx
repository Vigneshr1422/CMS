import React, { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { Toaster, toast } from 'react-hot-toast';

// Load Google Fonts dynamically
const loadFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const Attendance = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    department: '',
    regNo: '',
    year: '',
    attendance: '',
  });

  const [previewMode, setPreviewMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDownload = async () => {
    setLoading(true);
    setPreviewMode(true); // Make the certificate visible

    await new Promise((resolve) => setTimeout(resolve, 300)); // Wait to render certificate

    const element = document.getElementById('certificate');
    const opt = {
      margin: 0,
      filename: `${studentDetails.name || 'Certificate'}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: 'px',
        format: [595, 842],
        orientation: 'portrait',
      },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .then(() => {
        setLoading(false);
        setPreviewMode(false);
        showToast('Certificate Downloaded Successfully 🎉', 'success');
      })
      .catch(() => {
        setLoading(false);
        setPreviewMode(false);
        showToast('Something went wrong ❌', 'error');
      });
  };

  const showToast = (message, type) => {
    if (type === 'success') {
      toast.success(message, {
        style: {
          border: '2px solid #4CAF50',
          padding: '16px',
          color: 'green',
          fontWeight: 'bold',
        },
        icon: '🎉',
      });
    } else {
      toast.error(message, {
        style: {
          border: '2px solid #f44336',
          padding: '16px',
          color: 'red',
          fontWeight: 'bold',
        },
        icon: '❌',
      });
    }
  };

  const todayDate = new Date().toLocaleDateString();
  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-20 sm:p-8/ relative">
      {/* React Hot Toast */}
      <Toaster position="top-center" reverseOrder={false} />
  
      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-full shadow-lg flex items-center space-x-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <span className="text-blue-600 text-sm sm:text-base font-semibold">Downloading...</span>
          </div>
        </div>
      )}
  
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Generate Certificate</h1>
  
      {!previewMode ? (
        <>
          {/* Form */}
          <form className="w-full max-w-sm sm:max-w-xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-md space-y-4 mb-10">
            {['name', 'department', 'regNo', 'year', 'attendance'].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={`Enter ${field === 'regNo' ? 'Registration Number' : field.charAt(0).toUpperCase() + field.slice(1)}`}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm sm:text-base"
                value={studentDetails[field]}
                onChange={handleChange}
                required
              />
            ))}
  
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <button
                type="button"
                onClick={() => setPreviewMode(true)}
                className="w-full sm:w-1/2 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Preview Certificate
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="w-full sm:w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Download Certificate
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          {/* Preview Mode */}
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setPreviewMode(false)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Go Back
            </button>
          </div>
  
          {/* Certificate preview container (only visible properly on larger screens) */}
          <div className="overflow-auto">
            <div
              id="certificate"
              className="mx-auto bg-white"
              style={{
                width: '595px',
                height: '842px',
                position: 'relative',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              {/* Gold Border */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  right: '20px',
                  bottom: '20px',
                  border: '5px solid gold',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Header */}
                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/src/assets/logo.png"
                    alt="College Logo"
                    style={{ width: '4000px', marginBottom: '30px' }}
                  />
                  <h1 style={{ margin: 0, fontFamily: 'Great Vibes, cursive', fontSize: '24px' }}>
                    <b>M.Kumarasamy College of Engineering</b>
                  </h1>
                  <p style={{ margin: 0, fontSize: '14px' }}>
                    <b>NAAC Accredited Autonomous Institution</b>
                  </p>
                  <p style={{ margin: 0, fontSize: '14px' }}>
                    <b>Thalavapalayam, Karur - 639 113</b>
                  </p>
                </div>
  
                {/* Certificate Title */}
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                  <h1 style={{ margin: 0, fontSize: '20px', fontFamily: 'Great Vibes, cursive' }}>
                    Certificate of Attendance
                  </h1>
                </div>
  
                {/* Body Content */}
                <div style={{ fontSize: '14px', marginTop: '20px', lineHeight: '1.8' }}>
                  <p style={{ textAlign: 'justify' }}>
                    This is to certify that Mr. <b>{studentDetails.name || '[Your Name]'}</b>, bearing Reg. No{' '}
                    <b>{studentDetails.regNo || '[RegNo]'}</b>, enrolled in the <b>{studentDetails.department || '[Department]'}</b> program,
                    has attended sessions for the year <b>{studentDetails.year || '[Year]'}</b> with{' '}
                    <b>{studentDetails.attendance || '[Attendance Percentage]'}%</b> attendance.
                  </p>
                </div>
  
                {/* Footer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p><br /><br />Student Sign</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <img
                      src="/src/assets/sign.png"
                      alt="HOD Sign"
                      style={{ width: '100px', marginBottom: '5px' }}
                    />
                    <p>HOD</p>
                  </div>
                </div>
  
                {/* Date */}
                <div style={{ textAlign: 'right', marginTop: '10px', fontSize: '12px' }}>
                  Date: {todayDate}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
  
      {/* Back Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
  };

export default Attendance;
