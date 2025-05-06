import React, { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { Toaster, toast } from 'react-hot-toast';

const loadFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const Character = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    department: '',
    regNo: '',
    year: '',
    behavior: 'Good',
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
    setPreviewMode(true);
    await new Promise((resolve) => setTimeout(resolve, 300));

    const element = document.getElementById('certificate');
    const opt = {
      margin: 0,
      filename: `${studentDetails.name || 'CharacterCertificate'}.pdf`,
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
    const options = {
      style: {
        border: `2px solid ${type === 'success' ? '#4CAF50' : '#f44336'}`,
        padding: '16px',
        color: type === 'success' ? 'green' : 'red',
        fontWeight: 'bold',
      },
      icon: type === 'success' ? '🎉' : '❌',
    };
    toast[type](message, options);
  };

  const todayDate = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-100 p-12 sm:p- relative">
      <Toaster position="top-center" reverseOrder={false} />

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-full shadow-lg flex items-center space-x-4">
            <div className="w-6 h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <span className="text-blue-600 font-semibold">Downloading...</span>
          </div>
        </div>
      )}

      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Generate Certificate</h1>

      {!previewMode ? (
        <form className="max-w-xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow space-y-4 mb-8">
          {['name', 'department', 'regNo', 'year'].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={`Enter ${field === 'regNo' ? 'Registration Number' : field.charAt(0).toUpperCase() + field.slice(1)}`}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={studentDetails[field]}
              onChange={handleChange}
              required
            />
          ))}

          <select
            name="behavior"
            value={studentDetails.behavior}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          >
            <option value="Good">Good</option>
            <option value="Bad">Bad</option>
            <option value="Worst">Worst</option>
          </select>

          <div className="flex flex-col sm:flex-row gap-4">
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
      ) : (
        <>
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setPreviewMode(false)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Go Back
            </button>
          </div>

          <div className="overflow-auto flex justify-center">
            <div
              id="certificate"
              style={{
                width: '595px',
                height: '842px',
                background: 'white',
                position: 'relative',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  right: '15px',
                  bottom: '15px',
                  border: '6px double #1e3a8a',
                  boxShadow: '0 0 10px gold',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/src/assets/logo.png"
                    alt="College Logo"
                    style={{ maxWidth: '510px', marginBottom: '30px' }}
                  />
                  <h1 style={{ fontFamily: 'Great Vibes, cursive', fontSize: '36px', color: '#1e3a8a' }}>
                    <b>M.Kumarasamy College of Engineering</b>
                  </h1>
                  <p style={{ fontSize: '17px', color: '#555' }}>NAAC Accredited Autonomous Institution</p>
                  <p style={{ fontSize: '17px', color: '#555' }}>Thalavapalayam, Karur - 639 113</p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <h1 style={{ fontSize: '37px', fontFamily: 'Great Vibes, cursive', color: '#1e3a8a' }}>
                    Character Certificate
                  </h1>
                </div>

                <div style={{ fontSize: '18px', marginTop: '30px', lineHeight: '1.8', color: '#333' }}>
                  <p style={{ textAlign: 'justify' }}>
                    This is to certify that Mr./Ms. <b>{studentDetails.name || '[Your Name]'}</b>, bearing Registration Number{' '}
                    <b>{studentDetails.regNo || '[RegNo]'}</b>, from the Department of <b>{studentDetails.department || '[Department]'}</b>, has completed the academic year{' '}
                    <b>{studentDetails.year || '[Year]'}</b> at our institution.
                  </p>
                  <p>
                    During this period, his/her behavior and conduct have been found to be{' '}
                    <b>{studentDetails.behavior || '[Behavior]'}</b>.
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', textAlign: 'center' }}>
                  <div>
                    <p><br /><br /><br />Student</p>
                  </div>
                  <div>
                    <img src="/src/assets/Hod.png" alt="HOD Sign" style={{ width: '90px', marginBottom: '5px' }} />
                    <p>HOD</p>
                  </div>
                  <div>
                    <img src="/src/assets/sign.png" alt="Principal Sign" style={{ width: '120px', marginBottom: '5px' }} />
                    <p>Principal</p>
                  </div>
                </div>

                <div style={{ textAlign: 'right', marginTop: '20px', fontSize: '14px', color: '#555' }}>
                  Date: {todayDate}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="flex justify-center mt-6">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Character;
