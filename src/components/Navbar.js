import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { NavLink, MobileNavLink, MobileButtonToggle } from './';

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => setIsShowing(!isShowing);

  return (
    <Menu
      as='div'
      className='fixed inset-0 h-[72px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500  shadow-xl sm:px-4'
    >
      <div className='container h-full flex items-center justify-between mx-auto'>
        <Link to='/'>
          <span className='text-white font-lobster self-center text-5xl font-bold'>
            Social Club
          </span>
        </Link>
        <ul className='hidden sm:flex space-x-2 md:space-x-8'>
          <NavLink to='profile' label='Profile' activePath='/profile' />
          <NavLink to='settings' label='Settings' activePath='/settings' />
        </ul>
        <MobileButtonToggle toggle={toggle} />
      </div>
      <Transition as={Fragment} appear={false}>
        <Menu.Items className='sm:hidden bg-gradient-to-bl from-yellow-500 via-red-500  to-pink-500 shadow-xl'>
          <div className='px-1 py-1 flex flex-col'>
            <MobileNavLink to='profile' label='Profile' />
            <MobileNavLink to='settings' label='Settings' />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Navbar;
