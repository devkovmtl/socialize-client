import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, label, activePath }) => {
  const location = useLocation();
  const isActive = location.pathname === activePath;
  const isActiveClasses = 'font-semibold text-purple-600 bg-white';

  return (
    <li>
      <Link
        to={to}
        className={`px-5 py-2.5 rounded-md ${
          isActive ? isActiveClasses : ''
        }  hover:text-purple-600 transition-all`}
      >
        {label}
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-10 bg-gradient-to-br from-pink-500 to-orange-400 px-2 sm:px-4 py-3 shadow-lg'>
      <div className='container flex justify-between items-center mx-auto'>
        <Link to='/'>
          <span className='text-white font-lobster self-center text-3xl font-bold'>
            Social Club
          </span>
        </Link>

        <ul className='text-white flex space-x-2 md:space-x-8'>
          <NavLink to='profile' label='Profile' activePath='/profile' />
          <NavLink to='settings' label='Settings' activePath='/settings' />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
