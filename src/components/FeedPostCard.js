const FeedPostCard = ({ post, author }) => {
  const { content, totalLikes, totalComments } = post;
  return (
    <div className='block p-4 w-full bg-white border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-600'>
      <p className='text-normal font-medium text-gray-700 dark:text-gray-400'>
        {content}
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
            {totalLikes}
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
            {totalComments}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FeedPostCard;
