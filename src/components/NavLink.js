import { Link, useLocation } from 'react-router-dom';

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
        }  hover:text-purple-600 hover:bg-gray-200/25 transition-all`}
      >
        {label}
      </Link>
    </li>
  );
};
export default NavLink;
