import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      {isLoggedIn && (
        <ul>
          <li>
            <Link to='/'>Social Club</Link>
          </li>
          <li>
            <Link to='profile'>Profile</Link>
          </li>
          <button onClick={handleLogout}>Logout</button>
        </ul>
      )}
      <Outlet />
    </div>
  );
};

export default Layout;
