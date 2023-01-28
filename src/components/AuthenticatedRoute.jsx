import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth'

const AuthenticatedRoute = ({children}) => {
  const { state: ContextState } = useContext(AuthContext);
  const { isAuthenticated } = ContextState;
  
  if(!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

export default AuthenticatedRoute