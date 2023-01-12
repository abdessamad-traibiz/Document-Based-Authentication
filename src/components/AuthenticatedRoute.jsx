import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth'

const AuthenticatedRoute = () => {
  const { state: ContextState } = useContext(AuthContext);
  const { isAuthenticated } = ContextState;
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default AuthenticatedRoute