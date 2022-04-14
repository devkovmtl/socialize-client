import { useEffect } from 'react';
import axios from 'axios';

const FeedCard = () => {
  return (
    <div className='block p-4 max-w-md bg-white border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-600'>
      <p className='text-normal font-medium text-gray-700 dark:text-gray-400'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In officiis
        deleniti ex ipsam cumque hic ab eius. Consequatur cupiditate fuga
        ducimus incidunt, autem quibusdam debitis ea libero distinctio,
        asperiores id?
      </p>
      {/* Comments like */}
      <div className='w-1/2 flex mt-4 items-center justify-between ml-auto'>
        <button className='flex items-center justify-start group '>
          {/* Icons */}
          <span className='text-gray-700 group-hover:text-red-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill={false ? 'currentColor' : 'none'}
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </span>
          {/* Number */}
          <span className='text-gray-700 group-hover:text-red-500 ml-1 text-xs'>
            1120
          </span>
        </button>

        <button className='flex items-center justify-start group '>
          {/* Icons */}
          <span className='text-gray-700 group-hover:text-blue-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill={false ? 'currentColor' : 'none'}
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
              />
            </svg>
          </span>
          {/* Number */}
          <span className='text-gray-700 group-hover:text-blue-500 ml-1'>
            152
          </span>
        </button>
      </div>
    </div>
  );
};

const Feed = () => {
  useEffect(() => {
    const fetchFeed = async () => {
      const response = await axios.get('http://localhost:8080/api/v1/');
      console.log(response.data);
      return response.data;
    };

    fetchFeed();
  }, []);
  return (
    <div className='max-w-4xl mx-auto'>
      <div className='block max-w-md shadow-md rounded-lg'>
        <textarea
          name='post'
          id='post'
          rows='4'
          className='h-full w-full p-4 text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='What do you want to share?'
        ></textarea>
      </div>

      <div className='mt-4 space-y-2'>
        <FeedCard />

        <FeedCard />

        <FeedCard />

        <FeedCard />
        <FeedCard />

        <FeedCard />
        <FeedCard />

        <FeedCard />
        <FeedCard />

        <FeedCard />
      </div>
    </div>
  );
};

export default Feed;
