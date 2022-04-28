import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from 'react-hook-form';
import {
  NewPostFeed,
  FeedPostCard,
  Spinner,
  UserCardList,
} from '../components';
import { fetchPosts } from '../redux/postSlice';
import { fetchUsers } from '../redux/userSlice';

const Feed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      content: '',
    },
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (post.status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [post.status, dispatch]);

  useEffect(() => {
    if (user.status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [user.status, dispatch]);

  let feedContent;
  if (post.status === 'pending') {
    feedContent = <Spinner />;
  } else if (post.status === 'fulfilled') {
    feedContent = post.posts.map((post) => (
      <FeedPostCard key={post._id} post={post} />
    ));
  } else if (post.status === 'rejected') {
    feedContent = <div>Failed to fetch the post.</div>;
  }

  let userContent;
  if (user.status === 'pending') {
    userContent = <Spinner />;
  } else if (user.status === 'fulfilled') {
    userContent = user.users
      .filter((u) => u._id !== auth.user.id)
      .map((u) => <UserCardList key={u._id} user={u} />);
  } else if (user.status === 'rejected') {
    userContent = <div>Failed to fetch the user.</div>;
  }

  return (
    <>
      <div className='min-h-screen pt-6 md:max-w-5xl mx-auto flex sm:gap-6'>
        <div className='flex-1 flex flex-col items-center space-y-2 sm:space-y-4'>
          {/* TextArea */}
          <div className='w-[475px] hidden sm:block'>
            <NewPostFeed />
          </div>

          {/* Feed */}
          <div className='w-[380px] md:w-[475px] flex flex-col items-center space-y-2 sm:space-y-4'>
            {feedContent}
          </div>
        </div>
        {/* Friend container */}
        <div className='hidden sm:block min-w-[275px]'>
          <div className='w-[275px] rounded-2xl shadow-xl'>
            <div className='px-6 py-4 rounded-t-2xl'>
              <h3 className='font-extrabold text-xl'>Friends</h3>
            </div>
            <div>{userContent}</div>
          </div>
        </div>

        <button
          className='fixed sm:hidden bottom-6 right-3 rounded-full text-white bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:bg-gradient-to-tl w-11 h-11 flex items-center justify-center transition-all shadow-md shadow-orange-500/50 hover:shadow-pink-500/50'
          onClick={openModal}
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
              d='M12 4v16m8-8H4'
            />
          </svg>
        </button>
      </div>
      <Transition appear={false} show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={closeModal}
        >
          <div className='min-h-screen px-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-800/75' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                <div className='flex items-center justify-end'>
                  <button
                    type='button'
                    onClick={closeModal}
                    className='text-red-500 bg-transparent rounded-full p-1 border border-transparent hover:border-red-500 hover:bg-red-500/25 hover:text-red-700'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>
                <div className='mt-1'>
                  <div className='w-full flex flex-col'>
                    <TextareaAutosize
                      id='content'
                      name='content'
                      minRows={3}
                      className='w-full bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg border-none shadow-none outline-none focus:outline-none focus:shadow-none focus:ring-transparent active:shadow-none active:outline-none text-xl font-normal resize-none min-w-fit overflow-hidden'
                      placeholder='What do you want to share?'
                      {...register('content', {
                        required: {
                          value: true,
                          message: 'Content is required',
                        },
                      })}
                    />
                    <div className='mt-4 flex items-center justify-end'>
                      <button
                        className='bg-orange-500 text-white font-semibold px-3 py-1.5 rounded-md hover:bg-orange-600 transition'
                        onClick={() => handleSubmit(onSubmit)()}
                      >
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Feed;
