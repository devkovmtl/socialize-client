import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';

const MobileNavLink = ({ to, label }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          to={to}
          className={`${
            active ? 'text-violet-600 hover:bg-gray-200/25' : 'text-white'
          } px-2 py-3 text-md font-semibold transition-all`}
        >
          {label}
        </Link>
      )}
    </Menu.Item>
  );
};

export default MobileNavLink;
