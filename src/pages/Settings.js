import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Settings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
    <div>
      <h1>Settings</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Settings;
