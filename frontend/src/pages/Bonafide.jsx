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

const Bonafide = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    department: '',
    regNo: '',
    year: '',
    purpose: '',
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
      filename: `${studentDetails.name || 'Bonafide'}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'px', format: [595, 842], orientation: 'portrait' },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .then(() => {
        setLoading(false);
        setPreviewMode(false);
        showToast('Bonafide Certificate Downloaded 🎉', 'success');
      })
      .catch(() => {
        setLoading(false);
        setPreviewMode(false);
        showToast('Download failed ❌', 'error');
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
      <Toaster position="top-center" reverseOrder={false} />

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-full shadow-lg flex items-center space-x-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <span className="text-blue-600 text-sm sm:text-base font-semibold">Downloading...</span>
          </div>
        </div>
      )}

      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Generate Bonafide Certificate</h1>

      {!previewMode ? (
        <>
          <form className="w-full max-w-sm sm:max-w-xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-md space-y-4 mb-10">
            {['name', 'department', 'regNo', 'year', 'purpose'].map((field) => (
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
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setPreviewMode(false)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Go Back
            </button>
          </div>

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
                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/src/assets/logo.png"
                    alt="College Logo"
                    style={{ width: '4000px', marginBottom: '30px' }}
                  />
                  <h1 style={{ fontFamily: 'Great Vibes, cursive', fontSize: '24px', margin: 0 }}>
                    <b>M.Kumarasamy College of Engineering</b>
                  </h1>
                  <p style={{ fontSize: '14px', margin: 0 }}>
                    <b>NAAC Accredited Autonomous Institution</b>
                  </p>
                  <p style={{ fontSize: '14px', margin: 0 }}>
                    <b>Thalavapalayam, Karur - 639 113</b>
                  </p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                  <h1 style={{ margin: 0, fontSize: '20px', fontFamily: 'Great Vibes, cursive' }}>
                    Bonafide Certificate
                  </h1>
                </div>

                <div style={{ fontSize: '14px', marginTop: '20px', lineHeight: '1.8' }}>
                  <p style={{ textAlign: 'justify' }}>
                    This is to certify that Mr. <b>{studentDetails.name || '[Your Name]'}</b>, with Registration Number{' '}
                    <b>{studentDetails.regNo || '[RegNo]'}</b>, studying in the <b>{studentDetails.department || '[Department]'}</b> department during the academic year{' '}
                    <b>{studentDetails.year || '[Year]'}</b>, is a bonafide student of this institution. This certificate is issued for{' '}
                    <b>{studentDetails.purpose || '[Purpose]'}</b>.
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p><br /><br />Student Sign</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <img
                      src="/src/assets/sign.png"
                      alt="Principal Sign"
                      style={{ width: '100px', marginBottom: '5px' }}
                    />
                    <p>Principal</p>
                  </div>
                </div>

                <div style={{ textAlign: 'right', marginTop: '10px', fontSize: '12px' }}>
                  Date: {todayDate}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

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

export default Bonafide;
