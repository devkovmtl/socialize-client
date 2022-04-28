import { Menu } from '@headlessui/react';
import AvatarImage from './AvatarImage';

const UserCardList = ({ user }) => {
  return (
    <div
      id={user._id}
      className='flex items-center justify-between px-6 py-3 hover:cursor-pointer hover:bg-gray-300/30'
    >
      <div className='flex items-center'>
        <AvatarImage src={user.avatar} />
        <h1 className='ml-2 hover:underline hover:underline-offset-1'>
          {user.username}
        </h1>
      </div>
      <Menu as='div' className='relative'>
        <Menu.Button className='p-1 rounded-full hover:bg-gray-300/50'>
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
              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
            />
          </svg>
        </Menu.Button>
        <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <Menu.Item>
            <button className='group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-900'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
                />
              </svg>
              Follow
            </button>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default UserCardList;
