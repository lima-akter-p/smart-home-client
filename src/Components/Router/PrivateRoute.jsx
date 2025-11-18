import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContex } from '../Provider/AuthContext';
import Loading from '../../Pages/Loading/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  //  console.log(user)
  const location = useLocation();
  console.log(location)

  if (loading) {
    return <Loading></Loading>
  }

  if (!user) {
    return <Navigate state={{ from: location.pathname }} to="/auth/login" />;

  }
  return children;





};

export default PrivateRoute;

