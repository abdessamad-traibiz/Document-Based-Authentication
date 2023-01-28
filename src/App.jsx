import React, { useContext } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Verify from './pages/Verify'
import User from './pages/User'
import { AuthContext } from './contexts/Auth'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import UploadDocument from './components/Modals/UploadDocument'
import VerifyDocument from './components/Modals/VerifyDocument'
import DownloadDocument from './components/Modals/DownloadDocument'
import ManageStudent from './components/Modals/ManageStudent'
import Login from './pages/Login'

const App = () => {
  const { state: ContextState } = useContext(AuthContext);
  const { isAuthenticated } = ContextState;
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Routes location={background || location}>
      <Route path="/" element={<Home />} >
        <Route path="upload-document" element={<AuthenticatedRoute><UploadDocument /></AuthenticatedRoute>} />
        <Route path="verify-document" element={<AuthenticatedRoute><VerifyDocument /></AuthenticatedRoute>} />
        <Route path="download-document" element={<AuthenticatedRoute><DownloadDocument /></AuthenticatedRoute>} />
        <Route path="manage-student" element={<AuthenticatedRoute><ManageStudent /></AuthenticatedRoute>} />
      </Route>
      <Route path="about" element={<About />} >
        <Route path="upload-document" element={<AuthenticatedRoute><UploadDocument /></AuthenticatedRoute>} />
        <Route path="verify-document" element={<AuthenticatedRoute><VerifyDocument /></AuthenticatedRoute>} />
        <Route path="download-document" element={<AuthenticatedRoute><DownloadDocument /></AuthenticatedRoute>} />
        <Route path="manage-student" element={<AuthenticatedRoute><ManageStudent /></AuthenticatedRoute>} />
      </Route>
      <Route path="verify" element={!isAuthenticated ? <Verify /> : <Navigate to='/' />} />
      <Route path="user" element={<AuthenticatedRoute><User /></AuthenticatedRoute>} />
      <Route path="login" element={!isAuthenticated ? <Login /> : <Login />} />
    </Routes>
  )
}

export default App