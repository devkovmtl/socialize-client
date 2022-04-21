import { Link, useLocation } from 'react-router-dom';
import { Menu } from '@headlessui/react';

const NavLink = ({ to, label, activePath }) => {
  const location = useLocation();
  const isActive = location.pathname === activePath;
  const isActiveClasses = 'text-purple-600 bg-white';

  return (
    <li>
      <Link
        to={to}
        className={` px-5 py-2.5 font-semibold rounded-md ${
          isActive ? isActiveClasses : 'text-white'
        }  hover:text-purple-600 transition-all`}
      >
        {label}
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full h-[72px] z-10 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 px-2 sm:px-4 py-3 shadow-xl'>
      <div className='container h-full flex justify-between items-center mx-auto'>
        <Link to='/'>
          <span className='text-white font-lobster self-center text-5xl font-bold'>
            Social Club
          </span>
        </Link>

        <ul className='hidden sm:flex space-x-2 md:space-x-8'>
          <NavLink to='profile' label='Profile' activePath='/profile' />
          <NavLink to='settings' label='Settings' activePath='/settings' />
        </ul>
        <Menu
          as='div'
          className='sm:hidden rounded-full flex items-center justify-center p-1 border border-transparent  hover:cursor-pointer hover:bg-gray-300/20 hover:border-white transition-all'
        >
          <Menu.Button>
            <div className='text-white '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </div>
          </Menu.Button>
          <Menu.Items className='bg-slate-100 absolute top-[72px] left-0 w-full z-40 shadow-lg'>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='/'
                  className={`${
                    active ? 'bg-orange-500 text-white' : 'text-gray-800'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Home
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='profile'
                  className={`${
                    active ? 'bg-orange-500 text-white' : 'text-gray-800'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='settings'
                  className={`${
                    active ? 'bg-orange-500 text-white' : 'text-gray-800'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Settings
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
