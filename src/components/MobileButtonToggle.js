import { Menu } from '@headlessui/react';

const MobileButtonToggle = ({ toggle }) => {
  return (
    <Menu.Button
      className='sm:hidden p-2 border border-transparent rounded-full text-white hover:bg-gray-200/25 hover:border-white'
      onClick={toggle}
    >
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
    </Menu.Button>
  );
};

export default MobileButtonToggle;
