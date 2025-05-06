import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import StaffDashboard from './pages/StaffDashboard';
import StudentDashboard from './pages/StudentDashboard';
import AddStudent from './pages/AddStudent';
import History from './pages/History';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StatusPage from './pages/StatusPage';
import CertificatePage from './pages/CertificatePage';
import PlusPage from './pages/plus';
import EntryList from './pages/entrylist';
import StatusComplete from './pages/StatusComplete';
import Attendance from './pages/Attendance';
import Bonafide from './pages/Bonafide';
import Character from './pages/Character';
import Provisional from './pages/Provisional';
import CheakInfo from './pages/CheckInfo';
import ShowStaff from './pages/ShowStaff';
import StudentDetail from './pages/StudentDetail';
import Contact from './pages/contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-blue-50 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/staff-dashboard" element={<StaffDashboard />} />
          <Route path="/staff/add-student" element={<AddStudent />} />
          <Route path="/staff/plus" element={<PlusPage />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/student-dashboard/CheakInfo" element={<CheakInfo/>}/>
          <Route path="/staff/entry-list" element={<EntryList />} />
          <Route path="/status-complete" element={<StatusComplete />} />
          <Route path="/staff/history" element={<History />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="student-dashboard/show-Staff" element={<ShowStaff />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/certificate/attendance" element={<Attendance />} />
          <Route path="/certificate/bonafide" element={<Bonafide />} />
          <Route path="/certificate/character" element={<Character />} />
          <Route path="/certificate/provisional" element={<Provisional />} />
          <Route path="/student-dashboard/student-detail" element={<StudentDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
