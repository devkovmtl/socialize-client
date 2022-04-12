import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ redirectPath = '/login', children }) => {
  let location = useLocation();
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    // redirect to login page
    // save current location
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
