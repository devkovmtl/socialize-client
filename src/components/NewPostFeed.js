import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../redux/postSlice';

const NewPostFeed = () => {
  // error for backend validation
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      content: '',
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // response {success:boolean, message:string, post:object}
      const response = await dispatch(addNewPost(data)).unwrap();
      setIsLoading(false);
      if (response.success) {
        setError('');
        resetField('content');
      } else {
        setError(response.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className='w-full flex flex-col p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
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
  );
};

export default NewPostFeed;
