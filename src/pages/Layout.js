import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      {isLoggedIn && <Navbar />}
      <div className={`${isLoggedIn ? 'mt-16' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
