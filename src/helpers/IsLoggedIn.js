import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

// if user is already logged in, redirect to feed
const IsLoggedIn = ({ redirectPath = '/', children }) => {
  let location = useLocation();
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }
  return children;
};

export default IsLoggedIn;
