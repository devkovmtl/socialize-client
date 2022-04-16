import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from 'react-hook-form';

const NewPostFeed = () => {
  // error for backend validation
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { content } = data;

    try {
    } catch (error) {}
  };

  return (
    <div className='flex flex-col p-4 max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <TextareaAutosize
        id='content'
        name='content'
        minRows={3}
        className='w-full bg-gray-200 dark:bg-gray-700 dark:text-white rounded-lg border-none shadow-none outline-none focus:outline-none focus:shadow-none focus:ring-transparent active:shadow-none active:outline-none text-xl font-normal resize-none min-w-fit overflow-hidden'
        placeholder='What do you want to say?'
        {...register('content', {
          required: {
            value: true,
            message: 'Content is required',
          },
        })}
      />
      <div className='mt-4 flex items-center justify-end'>
        <button className='bg-orange-500 text-white font-semibold px-3 py-1.5 rounded-md hover:bg-orange-600 transition'>
          Send
        </button>
      </div>
    </div>
  );
};

export default NewPostFeed;
