import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
  const {user} = use(AuthContext);
  const location = useLocation();
  const {loading} = use(AuthContext);

  if(loading){
    return <p>loading........................</p>
  }

  if(!user){
    return <Navigate to={'/signin'} state={location.pathname} ></Navigate>
  }

  return children;
};

export default PrivateRoute;