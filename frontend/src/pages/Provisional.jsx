// import React, { useState, useEffect } from 'react';
// import html2pdf from 'html2pdf.js';
// import { Toaster, toast } from 'react-hot-toast';

// // Load Google Fonts dynamically
// const loadFonts = () => {
//   const link = document.createElement('link');
//   link.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins&display=swap';
//   link.rel = 'stylesheet';
//   document.head.appendChild(link);
// };

// const Provisional = () => {
//   const [studentDetails, setStudentDetails] = useState({
//     name: '',
//     department: '',
//     regNo: '',
//     year: '',
//     yop: '',
//   });

//   const [previewMode, setPreviewMode] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     loadFonts();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStudentDetails((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleDownload = async () => {
//     setLoading(true);
//     setPreviewMode(true);

//     await new Promise((resolve) => setTimeout(resolve, 300));

//     const element = document.getElementById('certificate');
//     const opt = {
//       margin: 0,
//       filename: `${studentDetails.name || 'ProvisionalCertificate'}.pdf`,
//       image: { type: 'jpeg', quality: 1 },
//       html2canvas: { scale: 2 },
//       jsPDF: {
//         unit: 'px',
//         format: [595, 842],
//         orientation: 'portrait',
//       },
//     };

//     html2pdf()
//       .from(element)
//       .set(opt)
//       .save()
//       .then(() => {
//         setLoading(false);
//         setPreviewMode(false);
//         showToast('Certificate Downloaded Successfully 🎉', 'success');
//       })
//       .catch(() => {
//         setLoading(false);
//         setPreviewMode(false);
//         showToast('Something went wrong ❌', 'error');
//       });
//   };

//   const showToast = (message, type) => {
//     if (type === 'success') {
//       toast.success(message, {
//         style: {
//           border: '2px solid #4CAF50',
//           padding: '16px',
//           color: 'green',
//           fontWeight: 'bold',
//         },
//         icon: '🎉',
//       });
//     } else {
//       toast.error(message, {
//         style: {
//           border: '2px solid #f44336',
//           padding: '16px',
//           color: 'red',
//           fontWeight: 'bold',
//         },
//         icon: '❌',
//       });
//     }
//   };

//   const todayDate = new Date().toLocaleDateString();

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 relative">
//       <Toaster position="top-center" reverseOrder={false} />

//       {loading && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-full shadow-lg flex items-center space-x-4">
//             <div className="w-6 h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//             <span className="text-blue-600 font-semibold">Downloading...</span>
//           </div>
//         </div>
//       )}

//       <h1 className="text-3xl font-bold text-center mb-8">Generate Provisional Certificate</h1>

//       {!previewMode ? (
//         <>
//           <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-4 mb-10">
//             {['name', 'department', 'regNo', 'year', 'yop'].map((field) => (
//               <input
//                 key={field}
//                 type="text"
//                 name={field}
//                 placeholder={`Enter ${field === 'regNo' ? 'Registration Number' : field.charAt(0).toUpperCase() + field.slice(1)}`}
//                 className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
//                 value={studentDetails[field]}
//                 onChange={handleChange}
//                 required
//               />
//             ))}

//             <div className="flex space-x-4">
//               <button
//                 type="button"
//                 onClick={() => setPreviewMode(true)}
//                 className="w-1/2 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
//               >
//                 Preview Certificate
//               </button>
//               <button
//                 type="button"
//                 onClick={handleDownload}
//                 className="w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//               >
//                 Download Certificate
//               </button>
//             </div>
//           </form>
//         </>
//       ) : (
//         <>
//           <div className="flex justify-center mb-4">
//             <button
//               onClick={() => setPreviewMode(false)}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//             >
//               Go Back
//             </button>
//           </div>

//           <div
//             id="certificate"
//             style={{
//               width: '595px',
//               height: '842px',
//               background: 'white',
//               margin: 'auto',
//               position: 'relative',
//               boxSizing: 'border-box',
//               fontFamily: 'Poppins, sans-serif',
//             }}
//           >
//             {/* Blue & Gold Border */}
//             <div
//               style={{
//                 position: 'absolute',
//                 top: '15px',
//                 left: '15px',
//                 right: '15px',
//                 bottom: '15px',
//                 border: '6px double #1e3a8a', // blue
//                 boxShadow: '0 0 10px gold',
//                 padding: '30px',
//                 boxSizing: 'border-box',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//               }}
//             >
//               {/* Header */}
//               <div style={{ textAlign: 'center' }}>
//                 <img
//                   src="\src\assets\logo.png"
//                   alt="College Logo"
//                   style={{ width: '350px', marginBottom: '20px' }}
//                 />
//                 <h1 style={{ fontFamily: 'Great Vibes, cursive', fontSize: '36px', color: '#1e3a8a', marginBottom: '5px' }}>
//                   <b>M.Kumarasamy College of Engineering</b>
//                 </h1>
//                 <p style={{ fontSize: '14px', color: '#555' }}>
//                   NAAC Accredited Autonomous Institution
//                 </p>
//                 <p style={{ fontSize: '14px', color: '#555' }}>
//                   Thalavapalayam, Karur - 639 113
//                 </p>
//               </div>

//               {/* Certificate Title */}
//               <div style={{ textAlign: 'center', marginTop: '20px' }}>
//                 <h1 style={{ fontSize: '32px', fontFamily: 'Great Vibes, cursive', color: '#1e3a8a' }}>
//                   Provisional Certificate
//                 </h1>
//               </div>

//               {/* Certificate Body */}
//               <div style={{ fontSize: '18px', marginTop: '30px', lineHeight: '1.8', color: '#333' }}>
//                 <p>
//                   This is to certify that Mr./Ms. <b>{studentDetails.name || '[Your Name]'}</b>, bearing Registration Number{' '}
//                   <b>{studentDetails.regNo || '[RegNo]'}</b>, from the Department of <b>{studentDetails.department || '[Department]'}</b>, has completed the academic year{' '}
//                   <b>{studentDetails.year || '[Year]'}</b> and is hereby issued this provisional certificate.
//                 </p>
//                 <p>
//                   His/her final year of study is <b>{studentDetails.yop || '[YOP]'}</b>.
//                 </p>
//               </div>

//               {/* Footer Signatures */}
//               <div
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   marginTop: '40px',
//                   alignItems: 'center',
//                   textAlign: 'center',
//                 }}
//               >
//                 <div>
//                   <p><br /><br />Student</p>
//                 </div>
//                 <div>
//                   <p><br /><br />HOD</p>
//                 </div>
//                 <div>
//                   <img
//                     src="\src\assets\sign.png"
//                     alt="Principal Sign"
//                     style={{ width: '120px', marginBottom: '5px' }}
//                   />
//                   <p>Principal</p>
//                 </div>
//               </div>

//               {/* Date */}
//               <div style={{ textAlign: 'right', marginTop: '20px', fontSize: '14px', color: '#555' }}>
//                 Date: {todayDate}
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       <div className="flex justify-center mt-4">
//         <button
//           onClick={() => window.history.back()}
//           className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Provisional;

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

const Provisional = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    department: '',
    regNo: '',
    year: '',
    yop: '',
    courseDuration: '',
    grade: '',
    certificateIssueDate: new Date().toLocaleDateString(),
    remarks: '',
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
      filename: `${studentDetails.name || 'ProvisionalCertificate'}.pdf`,
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
  <div className="min-h-screen bg-gray-100 p-4 sm:p-8 relative">
    <Toaster position="top-center" reverseOrder={false} />

    {loading && (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-full shadow-lg flex items-center space-x-4">
          <div className="w-6 h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <span className="text-blue-600 font-semibold">Downloading...</span>
        </div>
      </div>
    )}

    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
      <br /><br />Generate Certificate
    </h1>

    {!previewMode ? (
      <form className="w-full max-w-xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-md space-y-4 mb-10">
        {['name', 'department', 'regNo', 'year', 'yop'].map((field) => (
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

        <input
          type="number"
          name="courseDuration"
          placeholder="Enter Course Duration (in years)"
          className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          value={studentDetails.courseDuration}
          onChange={handleChange}
          required
        />

        <select
          name="grade"
          className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          value={studentDetails.grade}
          onChange={handleChange}
          required
        >
          <option value="">Select Grade</option>
          <option value="First Class">First Class</option>
          <option value="Second Class">Second Class</option>
          <option value="Third Class">Third Class</option>
        </select>

        <input
          type="date"
          name="certificateIssueDate"
          className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          value={studentDetails.certificateIssueDate}
          onChange={handleChange}
          required
        />

        <select
          name="remarks"
          className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          value={studentDetails.remarks}
          onChange={handleChange}
          required
        >
          <option value="">Select Remarks</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
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

        {/* Responsive Certificate Preview */}
        <div className="overflow-auto sm:overflow-hidden flex justify-center">
          <div
            id="certificate"
            className="bg-white shadow-lg"
            style={{
              width: '595px',
              height: '842px',
              position: 'relative',
              fontFamily: 'Poppins, sans-serif',
              boxSizing: 'border-box',
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
                  src="\src\assets\logo.png"
                  alt="College Logo"
                  style={{ width: '500px', marginBottom: '20px' }}
                />
                <h1 style={{ fontFamily: 'Great Vibes, cursive', fontSize: '28px', color: '#1e3a8a' }}>
                  <b>M.Kumarasamy College of Engineering</b>
                </h1>
                <p style={{ fontSize: '14px', color: '#555' }}>
                  NAAC Accredited Autonomous Institution
                </p>
                <p style={{ fontSize: '14px', color: '#555' }}>
                  Thalavapalayam, Karur - 639 113
                </p>
              </div>

              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <h1 style={{ fontSize: '26px', fontFamily: 'Great Vibes, cursive', color: '#1e3a8a' }}>
                  Provisional Certificate
                </h1>
              </div>

              <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
                <p style={{ textAlign: 'justify' }}>
                  This is to certify that Mr./Ms. <b>{studentDetails.name || '[Your Name]'}</b>, bearing Registration Number <b>{studentDetails.regNo || '[RegNo]'}</b>, from the Department of <b>{studentDetails.department || '[Department]'}</b>, has completed the academic year <b>{studentDetails.year || '[Year]'}</b> and is hereby issued this provisional certificate.
                </p>
                <p>His/her final year of study is <b>{studentDetails.yop || '[YOP]'}</b>.</p>
                <p>Course Duration: <b>{studentDetails.courseDuration} years</b></p>
                <p>Grade: <b>{studentDetails.grade}</b></p>
                <p>Certificate Issue Date: <b>{studentDetails.certificateIssueDate}</b></p>
                <p>Remarks: <b>{studentDetails.remarks}</b></p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', textAlign: 'center' }}>
                <div>
                  <p><br />Student</p>
                </div>
                <div>
                  <img src="\src\assets\Hod.png" alt="HOD Sign" style={{ width: '65px', marginBottom: '5px' }} />
                  <p>HOD</p>
                </div>
                <div>
                  <img src="\src\assets\sign.png" alt="Principal Sign" style={{ width: '65px', marginBottom: '5px' }} />
                  <p>Principal</p>
                </div>
              </div>

              <div style={{ textAlign: 'right', fontSize: '9px', color: '#555' }}>
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
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        Back
      </button>
    </div>
  </div>
);
};

export default Provisional;
