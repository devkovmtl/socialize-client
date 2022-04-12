import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LabelForm,
  InputField,
  InputFieldError,
  PageTitle,
  PageDescription,
  Spinner,
} from '../components';
import { FormRulesOptions } from '../constants';
import { login } from '../redux/authSlice';

const Login = () => {
  // error for backend validation
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let from = location.state?.from?.pathname || '/';

  const onSubmit = async (data) => {
    const { username, password } = data;
    setIsLoading(true);
    try {
      const response = await dispatch(login({ username, password })).unwrap();
      setIsLoading(false);
      if (response.success) {
        // replace true we don't create another entry in
        // browser history
        navigate(from, { replace: true });
      } else {
        setError(response.message);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='min-h-screen min-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
      <div className='max-w-lg mx-auto'>
        <PageTitle title='Social Club' color='text-white' />
        <PageDescription
          description='Join the community and share your posts with your friends and the world.'
          color='text-gray-800'
        />
        {isLoading ? (
          <div className='h-100 flex items-center justify-center'>
            <Spinner />
          </div>
        ) : (
          <form
            className='p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl bg-slate-100'
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className='text-center text-lg font-medium'>Log In</p>
            {error && <p className='text-red-600 text-xs'>{error}</p>}
            <div>
              <LabelForm
                htmlFor='username'
                labelName='Username'
                isRequired={true}
                errors={errors && errors.username}
              />
              <div className='relative mt-1'>
                <InputField
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Enter your username'
                  register={register}
                  errors={errors}
                  rules={FormRulesOptions.username}
                />
              </div>
              {errors.username && (
                <InputFieldError error={errors.username.message} />
              )}
            </div>
            <div>
              <LabelForm
                htmlFor='password'
                labelName='Password'
                isRequired={true}
                errors={errors && errors.password}
              />

              <div className='relative mt-1'>
                <InputField
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Enter your password'
                  register={register}
                  errors={errors}
                  rules={FormRulesOptions.password}
                />
              </div>
              {errors.password && (
                <InputFieldError error={errors.password.message} />
              )}
            </div>

            {/* <p className='text-sm text-left text-gray-500'>
            <Link to='/login'>Forgout Your Password?</Link>
          </p> */}

            <button
              type='submit'
              className='inline-block w-full px-8 py-3  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg text-white active:text-opacity-75 focus:outline-none focus:ring'
            >
              Login
            </button>
            <p className='text-sm text-center text-gray-500'>
              Not registered?{' '}
              <Link className='underline' to='/register'>
                Create an account
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
