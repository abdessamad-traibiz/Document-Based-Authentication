import React, { useContext, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import Verify from './pages/Verify'
import { AuthContext } from './contexts/Auth'
import AuthenticatedRoute from './components/AuthenticatedRoute'

const App = () => {
  const { state: ContextState } = useContext(AuthContext);
  const { isAuthenticated } = ContextState;
  useEffect(() => {
    // console.log(isAuthenticated)
  })

  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } />
      <Route path="verify" element={!isAuthenticated ? <Verify /> : <Navigate to='/user' />} />
      <Route element={<AuthenticatedRoute />}>
        <Route path="user" element={ <User /> } />
      </Route>
    </Routes>
  )
}

export default App