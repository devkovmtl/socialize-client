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
    <div className='p-6 sm:max-w-[800px] mx-auto'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-4xl'>Settings</h1>
        <button
          className='font-semibold text-lg border border-red-500 text-red-500 px-4 py-2 rounded-xl flex items-center justify-center hover:border-red-700 hover:bg-red-500 hover:text-white transition-all'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div>
        <div className='my-5'>
          <h4 className='font-semibold text-lg my-3'>Profile Picture</h4>
          <div className='flex items-center'>
            <div className='w-20 h-20 rounded-full bg-slate-600 mr-4'></div>
            <button className='font-semibold text-lg border border-orange-500 text-orange-500 px-4 py-2 rounded-xl hover:border-orange-700 hover:bg-orange-500 hover:text-white transition-all'>
              Update
            </button>
          </div>
        </div>

        <div className='my-5'>
          <h4 className='font-semibold text-lg my-3'>About Me</h4>
          <div>
            <p>First Name</p>
            <p>Last Name</p>
            <p>
              Description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Mollitia dolores enim delectus. Reiciendis, obcaecati ut.
            </p>
          </div>
        </div>

        <div className='my-5'></div>
      </div>
    </div>
  );
};

export default Settings;
