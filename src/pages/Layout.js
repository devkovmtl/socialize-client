import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      {isLoggedIn && <Navbar />}
      <div className={`${isLoggedIn ? 'mt-[72px]' : ''}`}>
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;
